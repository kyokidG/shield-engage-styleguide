<template>
  <div class="page-content">
    <h1 class="title">
      {{ label }}
    </h1>
    <hr>
    <div class="text">
      {{ instructions }}
    </div>
    <Question
      v-for="(question) in questions"
      :key="question.guid"
      :question="question"
      class="mt3 mb3"
    />
    <b-message>{{ helpText }}</b-message>
    <b-button class="btn-submit">
      Submit
    </b-button>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import ICard from '@/interfaces/ICard'
import Question from '~/components/Question.vue'

export default createComponent({
  name: 'Card',
  components: {
    Question
  },
  setup () {
    // TODO: mocked data
    const cardJSON: ICard = {
      label: 'Verify Authorized Representative',
      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit',
      helpText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit',
      helpImage: '',
      questions: [{
        guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe81c3',
        type: 'text',
        label: 'Phone Number',
        options: [],
        validations: [
          {
            type: 'required',
            params: ['please enter your phone number']
          },
          {
            type: 'min',
            params: [4, 'there should be at least 4 numbers']
          },
          {
            type: 'matches',
            params: ['^((\\\\+[1-9]{1,4}[ \\\\-]*)|(\\\\([0-9]{2,3}\\\\)[ \\\\-]*)|([0-9]{2,4})[ \\\\-]*)*?[0-9]{3,4}?[ \\\\-]*[0-9]{3,4}?$', 'please enter a valid phone number']
          }
        ],
        helpText: 'add your work number',
        value: '',
        note: '',
        approved: false
      }, {
        guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe81c4',
        type: 'text',
        label: 'User Name',
        options: [],
        validations: [
          {
            type: 'max',
            params: [10, 'username cannot be more than 10 characters']
          }
        ],
        helpText: 'add your username',
        value: '',
        note: '',
        approved: false
      }, {
        guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe81c9',
        type: 'date',
        label: 'Birthday',
        options: [],
        validations: [
          {
            type: 'required',
            params: ['please select your birthday']
          }
        ],
        helpText: '',
        value: null,
        note: '',
        approved: false
      }, {
        guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe8110',
        type: 'file',
        label: 'Upload a file',
        options: [],
        validations: [
          {
            type: 'required',
            params: ['please upload a file']
          }
        ],
        helpText: '',
        value: null,
        note: '',
        approved: false
      }, {
        guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe81c5',
        type: 'bounded',
        label: 'Role at the Company',
        options: ['amet', 'laboris', 'eiusmod'],
        validations: [
          {
            type: 'required',
            params: ['please select your role']
          }
        ],
        helpText: '',
        value: '',
        note: '',
        approved: false
      }, {
        guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe86c3',
        type: 'boolean',
        label: 'The information I am submitting is true and I am authorized to act on behalf of this entity and its owner',
        options: [],
        validations: [
          {
            type: 'oneOf',
            params: [[true], 'You must agree to these terms']
          }
        ],
        helpText: '',
        value: false,
        note: '',
        approved: false
      }, {
        guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe34c3',
        type: 'boolean',
        label: 'I consent to the sharing of my contact information between Work and their affiliates and agents for the purpose of servicing this application.',
        options: [],
        validations: [
          {
            type: 'oneOf',
            params: [[true], 'You must agree to these terms']
          }
        ],
        helpText: '',
        value: false,
        note: '',
        approved: false
      }]
    }

    /* Prepare a question's object for validation.
    *  @param el question object.
    */
    function prepareQuestions (el: any) {
      if (el.type === 'boolean') {
        return {
          ...el,
          validationType: 'boolean'
        }
      }
      return {
        ...el,
        validationType: 'string'
      }
    }

    const questionArrayPrepared = cardJSON.questions.map(prepareQuestions)
    const questions = ref(questionArrayPrepared)
    const label = ref(cardJSON.label)
    const helpText = ref(cardJSON.helpText)
    const instructions = ref(cardJSON.instructions)

    return {
      questions,
      label,
      helpText,
      instructions
    }
  }
})
</script>
