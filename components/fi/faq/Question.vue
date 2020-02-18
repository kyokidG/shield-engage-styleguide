<template>
  <b-collapse
    class="card drag-question"
    :open="false"
    animation="none"
    @open="state.isEditQuestion = true"
    @close="state.isEditQuestion = false"
  >
    <div v-if="!state.isEditQuestion" slot="trigger" class="card-header" role="button">
      <p class="card-header-title">
        <span class="column-drag-handle mr2">&#x2630;</span>{{ question.question }}
      </p>
      <a class="card-header-icon pr0 question-actions">
        <b-button
          type="is-text"
          outlined
          class="is-pulled-right"
          @click="state.isEditQuestion = true"
        >
          <b-icon icon="pencil" size="is-small" class="edit-item-icon" />Edit question
        </b-button>
        <b-button
          type="is-danger"
          outlined
          class="ml1"
          @click="deleteQuestion(category, question)"
        >
          <b-icon icon="delete" size="is-small" />
        </b-button>
      </a>
    </div>
    <div v-if="state.isEditQuestion" slot="trigger" class="card-header" role="button" @click.stop>
      <b-input
        v-model="question.question"
        class="card-header-title p0"
      />
      <a class="card-header-icon pr0">
        <b-button type="is-primary" outlined @click="saveQuestion">
          <b-icon icon="check" size="is-small" class="edit-item-icon" />Save
        </b-button>
      </a>
    </div>
    <div class="card-content p0 mb4">
      <div class="rows">
        <div class="row">
          <wysiwyg v-model="question.answer" tab-index="0" placeholder="Your new answer ..." />
        </div>
      </div>
    </div>
  </b-collapse>
</template>
<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
  name: 'Question',
  props: {
    category: Object,
    question: Object
  },
  setup (_, { emit }) {
    const state = reactive({
      isEditQuestion: false
    })
    function deleteQuestion (category: Object, question: Object) {
      emit('delete', category, question)
    }
    function saveQuestion () {
      state.isEditQuestion = false
    }

    return {
      state,
      deleteQuestion,
      saveQuestion
    }
  }
})
</script>
