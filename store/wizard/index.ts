import { ActionTree, MutationTree } from 'vuex'

import { IWizard } from './interfaces'
import {
  SET_CONFIG,
  SET_STAGES,
  SET_ACTIVE_STAGE,
  SET_CURRENT_TASKS,
  SET_CURRENT_CARDS,
  SET_ACTIVE_TASK,
  SET_ACTIVE_CARD,
  ADD_STAGES_DONE,
  ADD_TASKS_DONE,
  ADD_CARDS_DONE
} from './mutations.type'
import { fetchMoreCards } from '@/utils/api/wizard'

declare let $nuxt: any

export const state = () => ({
  stages: [],
  currentTasks: [],
  currentCards: [],
  activeStage: null,
  activeTask: null,
  activeCard: null,
  config: null,
  stagesDone: [],
  tasksDone: [],
  cardsDone: []
})

export type RootState = ReturnType<(...args: any) => IWizard>

export const mutations: MutationTree<RootState> = {
  [SET_CONFIG] (state, config) {
    state.config = config
  },
  [SET_STAGES] (state, stages) {
    state.stages = stages
  },
  [SET_ACTIVE_STAGE] (state, activeStage) {
    state.activeStage = activeStage
  },
  [SET_CURRENT_TASKS] (state, currentTasks) {
    state.currentTasks = currentTasks
  },
  [SET_CURRENT_CARDS] (state, currentCards) {
    state.currentCards = currentCards
  },
  [SET_ACTIVE_TASK] (state, activeTask) {
    state.activeTask = activeTask
  },
  [SET_ACTIVE_CARD] (state, activeCard) {
    state.activeCard = activeCard
  },
  [ADD_STAGES_DONE] (state, activeStage) {
    state.stagesDone = [...state.stagesDone, activeStage]
  },
  [ADD_TASKS_DONE] (state, activeTask) {
    state.tasksDone = [...state.tasksDone, activeTask]
  },
  [ADD_CARDS_DONE] (state, activeCard) {
    state.cardsDone = [...state.cardsDone, activeCard]
  }
}

export const actions:ActionTree<RootState, RootState> = {
  nextStage ({ state, dispatch }) {
    const newStageIndex = state.activeStage.index + 1
    dispatch('goToStage', newStageIndex)
  },
  nextTask ({ state, dispatch }) {
    const newTaskIndex = state.activeTask.index + 1
    dispatch('goToTask', newTaskIndex)
  },
  nextCard ({ state, dispatch }) {
    const newCardIndex = state.activeCard.index + 1
    dispatch('goToCard', newCardIndex)
  },
  async next ({ state, dispatch }, apiCall: any) {
    if (apiCall !== undefined) {
      if (apiCall.requestType === 'MORE_CARDS') {
        const { cards } = await fetchMoreCards()
        dispatch('updateCards', cards)
      }
    }
    if (state.currentCards.length - 1 !== state.activeCard.index) {
      return dispatch('nextCard')
    } else if (state.currentTasks.length - 1 === state.activeTask.index && state.stages.length - 1 !== state.activeStage.index) {
      return dispatch('nextStage')
    } else if (state.currentTasks.length - 1 !== state.activeTask.index) {
      return dispatch('nextTask')
    } else {
      // end of wizard
      return null
    }
  },
  updateCards ({ state, commit }, newCards) {
    commit(SET_CURRENT_CARDS, [...state.currentCards, ...newCards])
  },
  goToStage ({ state, commit }, stageIndex) {
    if (stageIndex !== state.activeStage.index + 1 && state.stagesDone.findIndex(stage => stage.index === stageIndex) === -1) {
      throw new Error('Invalid Route')
    }

    const nextActiveStage = {
      name: state.stages[stageIndex],
      index: stageIndex
    }

    const nextCurrentTasks = Object.keys(state.config.stages[nextActiveStage.name].tasks)
    const nextActiveTask = {
      name: nextCurrentTasks[0],
      index: 0
    }

    const currentCards = state.config.stages[state.stages[nextActiveStage.index]].tasks[nextActiveTask.name].cards
    const activeCard = {
      name: currentCards[0],
      index: 0
    }

    commit(ADD_STAGES_DONE, state.activeStage)
    commit(ADD_TASKS_DONE, state.activeTask)
    commit(ADD_CARDS_DONE, state.activeCard)
    commit(SET_CURRENT_CARDS, currentCards)
    commit(SET_ACTIVE_CARD, activeCard)
    commit(SET_CURRENT_TASKS, nextCurrentTasks)
    commit(SET_ACTIVE_STAGE, nextActiveStage)
    commit(SET_ACTIVE_TASK, nextActiveTask)

    $nuxt._router.push(`/entity/application/${state.activeStage.name}/${nextActiveTask.name}/0`)
  },
  goToTask ({ state, commit }, taskIndex) {
    if (taskIndex !== state.activeTask.index + 1 && state.tasksDone.findIndex(task => task.index === taskIndex) === -1) {
      throw new Error('Invalid Route')
    }

    const nextActiveTask = {
      name: state.currentTasks[taskIndex],
      index: taskIndex
    }
    const currentCards = state.config.stages[state.stages[state.activeStage.index]].tasks[nextActiveTask.name].cards
    const activeCard = {
      name: currentCards[0],
      index: 0
    }

    commit(ADD_TASKS_DONE, state.activeTask)
    commit(ADD_CARDS_DONE, state.activeCard)
    commit(SET_CURRENT_CARDS, currentCards)
    commit(SET_ACTIVE_CARD, activeCard)
    commit(SET_ACTIVE_TASK, nextActiveTask)

    $nuxt._router.push(`/entity/application/${state.activeStage.name}/${nextActiveTask.name}/0`)
  },
  goToCard ({ state, commit }, cardIndex) {
    if (cardIndex !== state.activeCard.index + 1 && state.cardsDone.findIndex(card => card.index === cardIndex) === -1) {
      throw new Error('Invalid Route')
    }

    const nextActiveCard = {
      name: state.currentCards[cardIndex],
      index: cardIndex
    }

    commit(ADD_CARDS_DONE, state.activeCard)
    commit(SET_ACTIVE_CARD, nextActiveCard)
    $nuxt._router.push(`/entity/application/${state.activeStage.name}/${state.activeTask.name}/${nextActiveCard.index}`)
  },
  start ({ state }) {
    if (this.state.config !== null) {
      $nuxt._router.push(`/entity/application/${state.activeStage.name}/${state.activeTask.name}/0`)
    }
  },
  setupWizard ({ commit }, config) {
    const stages = Object.keys(config.stages)
    const activeStage = {
      name: stages[0],
      index: 0
    }

    const currentTasks = Object.keys(config.stages[stages[0]].tasks)
    const activeTask = {
      name: currentTasks[0],
      index: 0
    }

    const currentCards = config.stages[stages[0]].tasks[activeTask.name].cards
    const activeCard = {
      name: currentCards[0],
      index: 0
    }

    commit(SET_CONFIG, config)
    commit(SET_STAGES, stages)
    commit(SET_CURRENT_TASKS, currentTasks)
    commit(SET_CURRENT_CARDS, currentCards)
    commit(SET_ACTIVE_STAGE, activeStage)
    commit(SET_ACTIVE_TASK, activeTask)
    commit(SET_ACTIVE_CARD, activeCard)
    commit(ADD_STAGES_DONE, activeStage)
    commit(ADD_TASKS_DONE, activeTask)
    commit(ADD_CARDS_DONE, activeCard)
  }
}
