import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, text, number } from '@storybook/addon-knobs'
import { defaultSizes, defaultTypes } from '../../constants'
import { Template } from '../../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/numberinput/',
  header: 'NumberInput',
  template: '<b-numberinput v-model="value" :disabled="isDisabled" :min="max" :max="max" :step="step" :controls="controls" :controls-rounded="isRounded" :expanded="false" :loading="isLoading"/>',
  size: 'large',
  progress: 7
}).getTemplate()

export default {
  title: 'Core/Form',
  decorators: [withKnobs]
}

export const NumberInput = () => ({
  template: TEMPLATE,
  props: {
    size: {
      default: select('Size', defaultSizes, 'is-large')
    },
    value: {
      default: number('Value', 420)
    },
    min: {
      default: number('Min', 0)
    },
    max: {
      default: number('Max', 1000)
    },
    step: {
      default: number('Step', 1)
    },
    type: {
      default: select('Type', defaultTypes, 'is-danger')
    },
    controls: {
      default: boolean('Controls', true)
    },
    isRounded: {
      default: boolean('Rounded controls', false)
    },
    isDisabled: {
      default: boolean('Disabled', false)
    },
    isLoading: {
      default: boolean('Loading', false)
    },
    isExpanded: {
      default: boolean('Expanded', false)
    },
    customClass: {
      default: text('Custom CSS classes', '')
    },
    validationMessage: {
      default: text('Validation message (if needed)', '')
    }

  },
  methods: {
    input: action('input'),
    focus: action('focus'),
    iconClick: action('icon-click')
  }
})
