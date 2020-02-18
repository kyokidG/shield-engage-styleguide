<template>
  <div>
    <h1>Let's get to Wurk!</h1>
    <button
      @click="start"
    >
      Get Started
    </button>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import useActions from '@/composables/useActions'
import { fetchConfig } from '@/utils/api/wizard'

export default createComponent({
  async fetch ({ store } : { store:any}) {
    // hardcoded for now  | fetch wizard configuration
    const config = await fetchConfig()

    store.dispatch('wizard/setupWizard', config)
  },
  setup () {
    const actions = {
      ...useActions('wizard', ['start'])
    }

    return { ...actions }
  }
})
</script>

<style>

</style>
