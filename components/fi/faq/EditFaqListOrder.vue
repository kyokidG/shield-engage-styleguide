<template>
  <div class="edit-faq card-scene section pl0 pb3 pt3">
    <Container
      orientation="vertical"
      drag-handle-selector=".column-drag-handle"
      :drop-placeholder="upperDropPlaceholderOptions"
      @drop="onColumnDrop($event)"
    >
      <Draggable v-for="c in state.list" :key="c.categoryId">
        <div class="card-container">
          <category-header :category="c" @delete="deleteCategory" />
          <Container
            group-name="col"
            :get-child-payload="getCardPayload(c)"
            drag-class="card-ghost"
            drop-class="card-ghost-drop"
            :drop-placeholder="dropPlaceholderOptions"
            @drop="onCardDrop(c, $event)"
          >
            <Draggable v-for="q in c.questions" :key="q.questionId" class="dragged-questions">
              <question :question="q" :category="c" @delete="deleteQuestion" />
            </Draggable>
            <add-question :category="c" @add="addNewQuestion" />
          </Container>
        </div>
      </Draggable>
    </Container>
    <add-category :enabled="state.isAddCategoryEnabled" @add="addCategory" />
  </div>
</template>

<script lang="ts">
import { Container, Draggable } from 'vue-smooth-dnd'
import '../../../node_modules/vue-wysiwyg/dist/vueWysiwyg.css'
import { createComponent, reactive } from '@vue/composition-api'
import { applyDrag } from '../../../utils/drag-drop/applyDrag'
// import { applyDrag } from '../../../utils/drag-drop/applyDrag'
import IDropResult from '../../../utils/drag-drop/interfaces/IDropResult'
import guid from '../../../utils/guid'
import AddCategory from './AddCategory.vue'
import AddQuestion from './AddQuestion.vue'
import Question from './Question.vue'
import CategoryHeader from './CategoryHeader.vue'

interface IQuestion {
  questionId: String;
  question: String;
  answer: String;
}
interface ICategory {
  categoryName: String;
  categoryId: String;
  questions: Array<IQuestion>;
}

export default createComponent({
  props: {
    items: Array
  },
  components: {
    Container,
    Draggable,
    AddCategory,
    Question,
    AddQuestion,
    CategoryHeader
  },
  name: 'EditFaqListOrder',
  setup ({ items }, { emit }) {
    const state = reactive({
      newCategory: '',
      isAddCategoryEnabled: false,
      list: items || []
    })

    function onColumnDrop (dropResult: IDropResult) {
      state.list = applyDrag(state.list, dropResult)
      emit('updateList', state.list)
    }

    function getCategoryIndex (cat: ICategory) {
      return state.list.findIndex(c => (c as ICategory).categoryId === cat.categoryId)
    }
    function getQuestionIndex (list: Array<IQuestion>, question: IQuestion) {
      return list.findIndex(q => q.question === question.question)
    }

    function onCardDrop (cat: ICategory, dropResult: IDropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const categoryIndex = getCategoryIndex(cat)
        const newCategory = Object.assign({}, state.list[categoryIndex]) as ICategory
        newCategory.questions = applyDrag(newCategory.questions, dropResult)
        state.list.splice(categoryIndex, 1, newCategory)
      }
      emit('updateList', state.list)
    }

    function getCardPayload (cat: ICategory) {
      return (index: number) => {
        return (state.list.filter(c => (c as ICategory).categoryId === cat.categoryId)[0] as ICategory).questions[index]
      }
    }

    function addCategory (newCategoryName: String) {
      const newCategory = {
        categoryId: guid(),
        categoryName: newCategoryName,
        questions: []
      }
      state.list.push(newCategory)

      state.isAddCategoryEnabled = false
      emit('updateList', state.list)
    }

    function deleteCategory (category: ICategory) {
      const categoryIndex = getCategoryIndex(category)
      if (categoryIndex > -1) {
        state.list.splice(categoryIndex, 1)
      }
      emit('updateList', state.list)
    }

    function addNewQuestion (category: ICategory, newQuestion: String, newAnswer: String) {
      const newListItem = {
        question: newQuestion,
        questionId: guid(),
        answer: newAnswer
      }
      const categoryIndex = getCategoryIndex(category)

      if (categoryIndex > -1) {
        (state.list[categoryIndex] as ICategory).questions.push(newListItem)
      }

      emit('updateList', state.list)
    }

    function deleteQuestion (category: ICategory, question: IQuestion) {
      const ci = getCategoryIndex(category)

      if (ci > -1) {
        const qi = getQuestionIndex((state.list[ci] as ICategory).questions, question)
        if (qi > -1) {
          (state.list[ci] as ICategory).questions.splice(qi, 1)
        }
      }
      emit('updateList', state.list)
    }

    return {
      state,
      onColumnDrop,
      onCardDrop,
      getCardPayload,
      addCategory,
      addNewQuestion,
      deleteCategory,
      deleteQuestion,
      upperDropPlaceholderOptions: {
        className: 'cards-drop-preview',
        animationDuration: '150',
        showOnTop: true
      },
      dropPlaceholderOptions: {
        className: 'drop-preview',
        animationDuration: '150',
        showOnTop: true
      }
    }
  }
})
</script>

<style lang="scss">
.edit-faq {
  .column-drag-handle {
    cursor: grab !important;
  }
  .smooth-dnd-container .smooth-dnd-draggable-wrapper {
    margin-top: 20px;
  }
  .smooth-dnd-container .dragged-questions {
    margin-top: 5px;
  }
  .card-column-header {
    padding: 5px;
  }
  .drag-question {
    border: 1px solid lightgray;
  }
  .drag-question {
    border-bottom: 0;
    border-right: 0;
    border-left: 0;
  }
  .category-actions {
    padding-right: 7px !important;
  }
  .question-actions,
  .category-actions {
    opacity: 0;
  }
  .card-header:hover .question-actions,
  .card-container:hover .category-actions {
    opacity: 1;
  }
  .add-question-btn {
    opacity: 0;
    min-width: min-content;
    width: 30% !important;
    margin: 0 auto;
  }
  .card-container:hover .add-question-btn {
    opacity: 1;
  }
}
</style>
