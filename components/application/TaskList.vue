<template>
  <div class="task-list box p5">
    <div class="level pb5">
      <div class="is-size-3 has-text-grey has-text-weight-bold">
        {{ activeStage.name }}
      </div>
    </div>
    <div
      v-for="(task, index) in currentTasks"
      :key="index"
      class="level is-size-5 has-text-grey pb5 flex justify-start"
      @click="tryGoToTask(index)"
    >
      <template v-if="task.toLowerCase() == activeTask.name.toLowerCase()">
        <b-icon icon="circle-outline" size="is-medium" class="has-text-gray mr3" />
        {{ task }}
      </template>
      <template v-else>
        <b-icon icon="circle" size="is-medium" class="has-text-light mr3" />
        {{ task }}
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import useState from '@/composables/useState'
import useActions from '@/composables/useActions'

export default createComponent({
  setup () {
    const state = {
      ...useState('wizard', {
        stages: 'stages',
        currentTasks: 'currentTasks',
        activeStage: 'activeStage',
        activeTask: 'activeTask'
      })
    }

    const actions = { ...useActions('wizard', ['goToTask']) }
    const { goToTask } = actions

    function tryGoToTask (index: number) {
      try {
        goToTask(index)
      } catch (e) {
        alert(e)
      }
    }

    return {
      ...state,
      tryGoToTask
    }
  }
})
</script>

<style lang="scss">
.level {
    border-bottom: 1px solid #CCCCCC;
    cursor: pointer;
}

.level:last-of-type {
    border: none
}
</style>
