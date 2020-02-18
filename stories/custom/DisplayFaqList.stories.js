import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import DisplayFaqList from '../../components/fi/faq/DisplayFaqList'
import { Template } from '../TemplateClass'
import * as faqListDocs from './faqListDocs.md'

const TEMPLATE = new Template({
  originalUrl: '',
  header: 'Display FAQ List',
  template: '<display-faq-list :items="computedLocalList"></display-faq-list>',
  size: 'large',
  progress: 100
}).getTemplate()

export default {
  title: 'Custom',
  decorators: [withKnobs],
  parameters: {
    notes: faqListDocs
  }
}

export const DisplayFaqListComponent = () => ({
  components: { DisplayFaqList },
  template: TEMPLATE,
  computed: {
    computedLocalList () {
      return [
        {
          categoryName: this.category1,
          categoryId: '5e3c5775e2f2b5e76642a69a',
          questions: [
            {
              questionId: '5e3c57751a9a084158b7a82f',
              question: this.question11,
              answer: this.answer11
            }, {
              questionId: '213757231a9a084167b74845',
              question: this.question12,
              answer: this.answer12
            }]
        },
        {
          categoryName: this.category2,
          categoryId: 'fdsfsdfds53489524389',
          questions: [
            {
              questionId: '542353645gerwg464',
              question: this.question21,
              answer: this.answer21
            }, {
              questionId: '53453522654756gh',
              question: this.question22,
              answer: this.answer22
            }]
        }]
    }
  },
  props: {
    category1: {
      default: text('First category name', 'Category1', 'Categories')
    },
    category2: {
      default: text('Second category name', 'Category2', 'Categories')
    },
    question11: {
      default: text('Question 1', 'ipsum aliquip voluptate veniam?', 'First category')
    },
    answer11: {
      default: text('Answer 1', 'This is an answer', 'First category')
    },
    question12: {
      default: text('Question 2', 'proident aliquip aute?', 'First category')
    },
    answer12: {
      default: text('Answer 2', 'This is a another answer', 'First category')
    },
    question21: {
      default: text('Question 1', 'minim ex veniam?', 'Second category')
    },
    answer21: {
      default: text('Answer 1', 'A short answer .... ', 'Second category')
    },
    question22: {
      default: text('Question 2', 'velit excepteur?', 'Second category')
    },
    answer22: {
      default: text('Answer 2', 'test', 'Second category')
    }
  },
  methods: {
    input: action('input'),
    change: action('change')
  }
})
