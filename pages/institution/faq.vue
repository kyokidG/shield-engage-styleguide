
<template>
  <div class="main-content columns">
    <section
      class="column section is-full-mobile is-two-thirds-tablet is-two-thirds-desktop is-two-thirds-widescreen is-three-quarters-fullhd"
    >
      <b-switch v-model="isEditMode" size="is-small">
        Edit mode
      </b-switch>

      <display-faq-list v-if="!isEditMode" :items="localList" />
      <edit-faq-list-order v-if="isEditMode" :items="localList" @updateList="updateList" />
    </section>

    <aside
      class="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd"
    >
      <div class="categories-list-container">
        <faq-categories-list :items="localList" />
        <ContactUs style="max-width: 350px;" />
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import { cloneDeep } from 'lodash'
import ContactUs from '@/components/ContactUs.vue'
import DisplayFaqList from '@/components/fi/faq/DisplayFaqList.vue'
import EditFaqListOrder from '@/components/fi/faq/EditFaqListOrder.vue'
import FaqCategoriesList from '@/components/fi/faq/FaqCategoriesList.vue'

import useActions from '@/composables/useActions'
import useGetters from '@/composables/useGetters'

export default createComponent({
  layout: 'fi-layout',
  name: 'faq',
  transition: 'fade',
  components: {
    ContactUs,
    DisplayFaqList,
    FaqCategoriesList,
    EditFaqListOrder
  },
  setup () {
    const getters = { ...useGetters('institution', { faqList: 'faqs' }) }
    const actions = { ...useActions('institution', ['updateFaqList']) }
    const { updateFaqList } = actions

    const state = reactive({
      localList: getters.faqList.value.map((c: any) => cloneDeep(c)),
      badList: [
        {
          categoryName: 'Shannon',
          categoryId: '5e3c5775e2f2b5e76642a69a',
          categoryIndex: 0,
          questions: [
            {
              questionId: '5e3c57751a9a084158b7a82f',
              question: 'cupidatat eiusmod id?',
              answer: '<button onclick="alert(1)">Xss</button>'
            }
          ]
        }]
    })

    function updateList (newList: any) {
      updateFaqList(cloneDeep(newList))
    }

    return {
      isEditMode: false,
      updateList,
      ...getters,
      ...state
    }
  }
})
</script>
<style lang="scss">
.categories-list-container {
   position: fixed; padding: 0;
}
</style>
