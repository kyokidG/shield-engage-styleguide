<template>
  <section class="section flex justify-center flex-column">
    <h1 class="is-size-2 has-text-centered">
      Provide Owner Information
    </h1>
    <div class="description mb6 mt6">
      Now we need to know about the primary entity’s ownership. Please list all owning interests with ownership percentages equal to or greater than 10% each.
    </div>
    <h3 class="is-size-5 mt8 mb6">
      Who owns Operation Grow Ohio, LLC
    </h3>
    <entity-repeater />
    <highlight>
      <div class="flex">
        <div class="left">
          <img src="@/assets/img/icon07.png" alt="Icon 07">
        </div>
        <div class="right">
          Entity “types” refer to how the business was formed. Business formation type selections include Limited Liability Company (LLC), Corporations, Partnership, and Sole Proprietorship.
        </div>
      </div>
    </highlight>
    <b-button type="is-light mt4" @click="next({requestType:'MORE_CARDS'})">
      Submit
    </b-button>
  </section>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import useActions from '@/composables/useActions'
import EntityRepeater from '@/components/repeater/EntityRepeater.vue'
import Highlight from '@/components/Highlight.vue'

export default createComponent({
  layout: 'nothing',
  name: 'primary-entity',
  components: {
    Highlight,
    EntityRepeater
  },
  setup () {
    const actions = { ...useActions('wizard', ['next']) }

    return {
      ...actions
    }
  }
})
</script>
<style lang="scss">
.select-full-width .select,
.select-full-width .select select{
  width: 100%;
}
</style>
<style scoped lang="scss">
.section{
  width: 635px;
  margin: 0 auto;
}

.icons li{
  width: 160px;
}

.highlight-panel img{
  width: 112px;
  max-width: 112px;
}
</style>
