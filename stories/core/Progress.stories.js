import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, number } from '@storybook/addon-knobs'
import { defaultSizes, defaultTypes } from '../constants'
import { Template } from '../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/progress/',
  header: 'Progress',
  template: '<b-progress :type="type"  :value="indeterminate ? undefined : value" :size="size" :max="max" :show-value="showValue" :precision="precision" :keep-trailing-zeroes="keepTrailingZeroes"></b-progress>',
  size: 'large',
  progress: 100
}).getTemplate()

export default {
  title: 'Core',
  decorators: [withKnobs]
}

export const Progress = () => ({
  template: TEMPLATE,
  props: {
    value: {
      default: number('Value (out of max)', 10)
    },
    indeterminate: {
      default: boolean('Indeterminate', false)
    },
    max: {
      default: number('Max', 100)
    },
    size: {
      default: select('Size', defaultSizes, 'small')
    },
    type: {
      default: select('Type', defaultTypes, 'is-primary')
    },
    showValue: {
      default: boolean('Show value', false)
    },
    precision: {
      default: number('Precision', 1)
    },
    keepTrailingZeroes: {
      default: boolean('Keep trailing zeroes', true)
    }

  },
  methods: {
    close: action('close')
  }
})
