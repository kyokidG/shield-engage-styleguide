<template>
  <div>
    <Header :name="institutionName" />
    <div class="container is-fluid">
      <div class="main-content columns">
        <section class="column section is-full-width">
          <nuxt />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Header from '@/components/Header.vue'

import useState from '@/composables/useState'

export default createComponent({
  name: 'fi-layout',
  components: {
    Header
  },
  setup () {
    const state = { ...useState('institution', { institutionName: 'name' }) }

    return {
      ...state
    }
  }
})
</script>
