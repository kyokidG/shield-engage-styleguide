<template>
  <div class="stage-steps flex my8">
    <div
      v-for="(stage, index) in stages"
      :key="index"
      class="step flex items-center justify-center"
      :class="{ 'step-active': activeStage.index >= index}"
    >
      <span class="is-size-5 has-text-grey">
        {{ stage }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import useState from '@/composables/useState'

export default createComponent({
  setup () {
    const state = {
      ...useState('wizard', {
        stages: 'stages',
        activeStage: 'activeStage'
      })
    }

    return { ...state }
  }
})
</script>

 <style>
    .step:after {
        color: #EBEBEB;
        border-left: 26px solid;
        border-top: 26px solid transparent;
        border-bottom: 26px solid transparent;
        display: inline-block;
        content: '';
        position: absolute;
        right: -26px;
    }
    .step {
        background-color: #EBEBEB;
        width: 250px;
        height: 52px;
        position: relative;
        margin-right: 25px;
    }
    .step-active {
        background-color: #DDDDDD;
    }
    .step-active:after {
        color: #DDDDDD;
    }
 </style>
