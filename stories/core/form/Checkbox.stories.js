import { action } from '@storybook/addon-actions'
import { boolean, withKnobs, text, select } from '@storybook/addon-knobs'
import { ICON_LIST, defaultSizes, defaultTypes } from '../../constants'
import { Template } from '../../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/checkbox/',
  header: 'Checkbox',
  description: '<p>Multiple checkboxes must be wrapped around a div with <code>class="field"</code><br><hr>',
  template: '<b-checkbox @input="input" v-model="value" :type="type" :size="size" :disabled="isDisabled" :indeterminate="isIndeterminate" :required="isRequired" :name="name">Checkbox</b-checkbox>',
  size: 'large',
  progress: 100
}).getTemplate()

export default {
  title: 'Core/Form',
  decorators: [withKnobs]
}

export const Checkbox = () => ({
  template: TEMPLATE,
  data () {
    return {
      value: {
        default: boolean('Checked', false)
      },
      checkboxGroup: []
    }
  },
  props: {
    size: {
      default: select('Size', defaultSizes, 'is-large')
    },
    name: {
      default: text('Name (optional)', 'remeber-me-checkbox')
    },
    type: {
      default: select('Type', defaultTypes, 'is-danger')
    },
    cbType: {
      default: select('Type', defaultTypes, 'is-success')
    },
    isIndeterminate: {
      default: boolean('Indeterminate', false)
    },
    isRequired: {
      default: boolean('Required', false)
    },
    isDisabled: {
      default: boolean('Disabled', false)
    },
    isLoading: {
      default: boolean('Loading', false)
    },
    cbIcon: {
      default: select('Icon', ICON_LIST, 'check')
    }
  },
  methods: {
    input: action('input')
  }
})
