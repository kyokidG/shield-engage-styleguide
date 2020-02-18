import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, text } from '@storybook/addon-knobs'
import { ICON_LIST, defaultSizes } from '../../constants'
import { Template } from '../../TemplateClass'

const selectTemplate = `<b-select :placeholder="placeholder" :icon="icon" :size="size" :rounded="isRounded" :loading="isLoading" :expanded="isExpanded" :disabled="isDisabled" @input="input" @focus="focus" @blur="blur">
        <option :value="itemOneValue" :disabled="itemOneDisabled">{{itemOneText}}</option>
        <option :value="itemTwoValue" :disabled="itemTwoDisabled">{{itemTwoText}}</option>
      </b-select>`
const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/button/',
  header: 'Single',
  template: selectTemplate,
  size: 'large'
}).getTemplate()

export default {
  title: 'Core/Form',
  decorators: [withKnobs]
}

export const Select = () => ({
  template: TEMPLATE,
  props: {
    size: {
      default: select('Size', defaultSizes, 'is-large', 'Select')
    },
    icon: {
      default: select('Icon', ICON_LIST, '', 'Select')
    },
    value: {
      default: text('Value', '', 'Select')
    },
    placeholder: {
      default: text('Placeholder', 'Select me', 'Select')
    },
    isDisabled: {
      default: boolean('Disabled', false, 'Select')
    },
    isLoading: {
      default: boolean('Loading', false, 'Select')
    },
    isRounded: {
      default: boolean('Rounded', false, 'Select')
    },
    isExpanded: {
      default: boolean('Expanded', false, 'Select')
    },
    // item 1
    itemOneValue: {
      default: text('Value', 'item-1', 'Item 1')
    },
    itemOneText: {
      default: text('Text', 'Item One', 'Item 1')
    },
    itemOneDisabled: {
      default: boolean('Disabled', false, 'Item 1')
    },
    // item 2
    itemTwoValue: {
      default: text('Value', 'item-2', 'Item 2')
    },
    itemTwoText: {
      default: text('Text', 'Item Two', 'Item 2')
    },
    itemTwoDisabled: {
      default: boolean('Disabled', true, 'Item 2')
    }

  },
  methods: {
    input: action('input'),
    focus: action('focus'),
    blur: action('blur')
  }
})
