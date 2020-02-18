import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, text, number } from '@storybook/addon-knobs'
import { ICON_LIST, defaultSizes, defaultTypes } from '../../constants'
import { Template } from '../../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/input/',
  header: 'Input',
  description: '<p>Input element must be wrapped around a div with <code>class="field"</code><br><hr>',
  template: `
      <b-field :label="label" :type="type" :message="message">
          <b-input @input="input" @icon-click="iconClick" @focus="focus" :icon="icon" :type="itype" :value="value" :size="size" :disabled="isDisabled" :loading="isLoading" :rounded="isRounded" :maxlength="maxlength" :expanded="isExpanded" :icon-clickable="isIconClickable" :has-counter="isHasCounter" :custom-class="customClass" :validation-message="validationMessage"></b-input>
      </b-field>`,
  size: 'large',
  progress: 99
}).getTemplate()

export default {
  title: 'Core/Form',
  decorators: [withKnobs]
}
const itypes = {
  email: 'email',
  password: 'password'
}
export const Input = () => ({
  template: TEMPLATE,
  props: {
    size: {
      default: select('Size', defaultSizes, 'is-large')
    },
    label: {
      default: text('Label', '')
    },
    icon: {
      default: select('Icon', ICON_LIST, '')
    },
    value: {
      default: text('Value', '')
    },
    message: {
      default: text('Message', '')
    },
    maxlength: {
      default: number('Maxlength', 30)
    },
    type: {
      default: select('Type', defaultTypes, 'is-dark')
    },
    itype: {
      default: select('Input Type', itypes, 'email')
    },
    isDisabled: {
      default: boolean('Disabled', false)
    },
    isLoading: {
      default: boolean('Loading', false)
    },
    isRounded: {
      default: boolean('Rounded', false)
    },
    isExpanded: {
      default: boolean('Expanded', false)
    },
    isIconClickable: {
      default: boolean('Icon Clickable', false)
    },
    isHasCounter: {
      default: boolean('Has Counter (if maxlength exceeded)', false)
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
