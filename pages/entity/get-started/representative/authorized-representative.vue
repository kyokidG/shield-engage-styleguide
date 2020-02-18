<template>
  <section class="section">
    <h1 class="is-size-3">
      Verify Authorized Representative (slide 7)
    </h1>
    <section class="section">
      <div>
        <b>Entity name:</b>
        {{ name }}
      </div>
      <div>
        <b>Entity type (from getter):</b>
        {{ typeFromGetter }}
      </div>
      <button @click="changeNameByMutation">
        Change entity name by mutation
      </button>
      <button @click="changeNameByAction">
        Change entity name by action
      </button>
    </section>
  </section>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import useState from '@/composables/useState'
import useActions from '@/composables/useActions'
import useMutations from '@/composables/useMutations'
import useGetters from '@/composables/useGetters'

export default createComponent({
  layout: 'mrb-layout',
  name: 'authorized-representative',
  transition: 'fade',
  setup () {
    // how to use store values directly
    const state = { ...useState('entity', { name: 'label' }) }

    // how to use getters from the store with CompositionAPI
    const getters = { ...useGetters('entity', { typeFromGetter: 'type' }) }

    // how to use mutations from the store with CompositionAPI
    const mutations = {
      ...useMutations('entity', { updateLabelMutation: 'UPDATE_LABEL' })
    }
    const { updateLabelMutation } = mutations
    function changeNameByMutation () {
      updateLabelMutation('New entity name (from mutation)')
    }

    // how to use actions from the store with CompositionAPI
    const actions = { ...useActions('entity', ['updateLabel']) }
    const { updateLabel } = actions
    function changeNameByAction () {
      updateLabel('New entity name (from action)')
    }

    return {
      ...state,
      ...getters,
      changeNameByMutation,
      changeNameByAction
    }
  }
})
</script>
