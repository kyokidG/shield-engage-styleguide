<template>
  <div class="section box">
    <p v-if="Object.keys($options.components).indexOf(activeCard.name) === -1" class="title has-text-grey has-text-centered">
      {{ activeCard.name }}
    </p>
    <component :is="activeCard.name" v-else />
    <div class="level">
      <div class="level-item">
        <b-button class="level" type="is-info" size="is-large" @click="next">
          Next
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, onMounted } from '@vue/composition-api'

import useState from '@/composables/useState'
import useActions from '@/composables/useActions'
import EntityOwners from '@/components/application/cards/EntityOwners.vue'

export default createComponent({
  layout: 'mrb-layout',
  components: {
    EntityOwners
  },
  setup () {
    const state = {
      ...useState('wizard', {
        stages: 'stages',
        currentTasks: 'currentTasks',
        activeCard: 'activeCard',
        activeTask: 'activeTask',
        activeStage: 'activeStage'
      })
    }

    const actions = {
      ...useActions('wizard', [
        'goToTask',
        'gotoStage',
        'next',
        'start'
      ])
    }
    const { start } = actions

    onMounted(() => {
      start()
    })

    return {
      ...state,
      ...actions
    }
  }
})
</script>

<style>

</style>
