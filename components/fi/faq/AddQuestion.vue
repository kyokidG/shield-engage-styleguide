<template>
  <div>
    <div v-if="category.questions.length === 0 && !state.isAddQuestionEnabled" class="add-question-container">
      There are no questions in this category
      <b-button
        type="is-primary"
        outlined
        expanded
        class="mt4"
        @click="enableAddNewQuestion"
      >
        + Add the first question
      </b-button>
    </div>
    <b-button
      v-if="!state.isAddQuestionEnabled && category.questions.length !== 0"
      type="is-primary"
      outlined
      expanded
      class="add-question-btn"
      @click="enableAddNewQuestion"
    >
      + Add new question in this category
    </b-button>
    <div v-if="state.isAddQuestionEnabled" class="new-question">
      <b-collapse
        class="card drag-question"
        :open="true"
        animation="none"
      >
        <div slot="trigger" class="card-header p0" role="button">
          <p class="card-header-title p0" @click.stop>
            <b-input
              v-model="state.newQuestion"
              placeholder="Your new question"
              class="card-header-title p0 mb2 mt2"
            />
          </p>
          <a class="card-header-icon pr0">
            <div class="row">
              <b-button
                type="is-primary"
                outlined
                expanded
                class="is-pulled-right"
                @click="addNewQuestion(category)"
              >
                + Add question
              </b-button>
            </div>
          </a>
        </div>
        <div class="card-content p0 mb4">
          <div class="rows">
            <div class="row">
              <wysiwyg v-model="state.newAnswer" placeholder="Your new answer ..." />
            </div>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>
<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
  name: 'AddQuestion',
  props: {
    category: Object
  },
  setup (_, { emit }) {
    const state = reactive({
      isAddQuestionEnabled: false,
      newQuestion: '',
      newAnswer: ''
    })

    function addNewQuestion (category:Object) {
      emit('add', category, state.newQuestion, state.newAnswer)
      state.newAnswer = ''
      state.newQuestion = ''
      state.isAddQuestionEnabled = false
    }

    function enableAddNewQuestion () {
      state.isAddQuestionEnabled = true
    }

    return {
      state,
      addNewQuestion,
      enableAddNewQuestion
    }
  }
})
</script>
