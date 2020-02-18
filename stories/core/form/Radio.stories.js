import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, text } from '@storybook/addon-knobs'
import { defaultSizes, defaultTypes } from '../../constants'
import { Template } from '../../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/radio/',
  header: 'Radio',
  template: '<b-radio @input="input" :type="type" :size="size" :disabled="isDisabled" :required="isRequired" v-model="radio" :name="name" native-value="default">Radio</b-radio>',
  size: 'large',
  progress: 98
}).getTemplate()

export default {
  title: 'Core/Form',
  decorators: [withKnobs]
}

export const Radio = () => ({
  template: TEMPLATE,
  data () {
    return {
      radio: ''
    }
  },
  props: {
    size: {
      default: select('Size', defaultSizes, 'is-large')
    },
    type: {
      default: select('Type', defaultTypes, 'is-danger')
    },
    isDisabled: {
      default: boolean('Disabled', false)
    },
    isRequired: {
      default: boolean('Required', false)
    },
    isRounded: {
      default: boolean('Rounded', false)
    },
    name: {
      default: text('Name', '')
    }

  },
  methods: {
    input: action('input')
  }
})
