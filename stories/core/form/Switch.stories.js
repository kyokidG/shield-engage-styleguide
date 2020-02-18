import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs } from '@storybook/addon-knobs'
import { defaultSizes, defaultTypes } from '../../constants'
import { Template } from '../../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/switch/',
  header: 'Switch',
  template: `<b-switch v-model="model" :rounded="isRounded" :disabled="isDisabled" :outlined="isOutlined" :size="size" @input="input" :type="type">
                Switch
            </b-switch>`,
  size: 'large',
  progress: 96
}).getTemplate()

export default {
  title: 'Core/Form',
  decorators: [withKnobs]
}
export const Swicth = () => ({
  template: TEMPLATE,
  props: {
    model: {
      default: boolean('V-Model', true)
    },
    size: {
      default: select('Size', defaultSizes, 'is-large')
    },
    type: {
      default: select('Type', defaultTypes, 'is-success')
    },
    isRounded: {
      default: boolean('Rounded', false)
    },
    isDisabled: {
      default: boolean('Disabled', false)
    },
    isOutlined: {
      default: boolean('Outlined', false)
    }

  },
  methods: {
    input: action('input')
  }
})
