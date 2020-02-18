import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { IEntity } from './interfaces'

export const state = () => ({
  guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe81c5',
  label: 'Grow GSO, LLC',
  type: 'llc',
  products: [],
  cards: [
    {
      guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe81c5',
      index: 0,
      locked: true,
      label: 'Primary contact',
      helpText: 'Lorem ipsum',
      questions: [{
        guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe81c5',
        index: 0,
        type: 'bounded',
        options: ['amet', 'laboris', 'eiusmod'],
        required: true,
        validation: {},
        label: 'state',
        helpText: 'Lorem ipsom',
        value: null,
        note: 'tempor eiusmod aliquip quis qui qui aute dolor id tempor ad dolore',
        approved: false
      }]
    }
  ],
  entities: []
})

export type RootState = ReturnType<(...args: any) => IEntity>

export const getters: GetterTree<RootState, RootState> = {
  type: state => state.type
}

export const mutations: MutationTree<RootState> = {
  UPDATE_LABEL: (state, newLabel: string) => (state.label = newLabel)
}

export const actions: ActionTree<RootState, RootState> = {
  updateLabel ({ commit }, payload: string) {
    commit('UPDATE_LABEL', payload)
  }
}
