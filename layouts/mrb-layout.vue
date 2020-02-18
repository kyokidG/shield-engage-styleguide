<template>
  <div>
    <Header name="name" />

    <section class="main-content columns">
      <aside class="column section is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <TaskList />
        <ContactUs extra-class="" />
      </aside>

      <div class="container column is-full-mobile is-two-thirds-tablet is-two-thirds-desktop is-two-thirds-widescreen is-three-quarters-fullhd">
        <StageSteps />
        <nuxt />
        <ContactUs extra-class="is-visible-mobile is-hidden-tablet is-hidden-desktop is-hidden-widescreen is-hidden-fullhd" />
      </div>
    </section>
  </div>
</template>

<script lang='ts'>
import { createComponent } from '@vue/composition-api'

import Header from '@/components/Header.vue'
import ContactUs from '@/components/ContactUs.vue'
import TaskList from '@/components/application/TaskList.vue'
import StageSteps from '@/components/application/StageSteps.vue'
import useState from '@/composables/useState'

export default createComponent({
  components: {
    Header,
    ContactUs,
    TaskList,
    StageSteps
  },
  setup () {
    const state = { ...useState('entity', { name: 'label' }) }

    return {
      isOpen: 0,
      state
    }
  }
})
</script>
