<template>
  <section class="section">
    <h1 class="is-size-3">
      VUEX: Institution module
    </h1>
    <section class="section">
      <div>
        <b>Institution name:</b>
        {{ institutionName }}
      </div>
      <div>
        <b>Institution type (from getter):</b>
        {{ typeFromGetter }}
      </div>
      <button @click="changeNameByMutation">
        Change institution name by mutation
      </button>
      <button @click="changeNameByAction">
        Change institution name by action
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
  layout: 'fi-layout',
  name: 'applications',
  transition: 'fade',
  setup () {
    // how to use store values directly
    const state = { ...useState('institution', { institutionName: 'name' }) }

    // how to use getters from the store with CompositionAPI
    const getters = { ...useGetters('institution', { typeFromGetter: 'type' }) }

    // how to use mutations from the store with CompositionAPI
    const mutations = {
      ...useMutations('institution', { updateNameMutation: 'UPDATE_NAME' })
    }
    const { updateNameMutation } = mutations
    function changeNameByMutation () {
      updateNameMutation('New institution name (from mutation)')
    }

    // how to use actions from the store with CompositionAPI
    const actions = { ...useActions('institution', ['updateName']) }
    const { updateName } = actions
    function changeNameByAction () {
      updateName('New institution name (from action)')
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
