import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs } from '@storybook/addon-knobs'
import { ICON_LIST, defaultSizes, defaultTypes } from '../constants'
import { Template } from '../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/button/',
  header: 'Button',
  progress: 100,
  template: '<b-button @click="this.clicked" :icon-left="iconLeft" :icon-right="iconRight" :type="type" :size="size" :disabled="isDisabled" :loading="isLoading" :rounded="isRounded" :outlined="isOutlined" :expanded="isExpanded" :inverted="isInverted">Button</b-button>',
  size: 'large'
}).getTemplate()

export default {
  title: 'Core',
  decorators: [withKnobs]
}

export const Button = () => ({
  template: TEMPLATE,
  props: {
    size: {
      default: select('Size', defaultSizes, 'small')
    },
    type: {
      default: select('Type', defaultTypes, 'is-primary')
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
    isOutlined: {
      default: boolean('Outlined', false)
    },
    isExpanded: {
      default: boolean('Expanded', false)
    },
    isInverted: {
      default: boolean('Inverted', false)
    },
    iconLeft: {
      default: select('Icon left', ICON_LIST, '')
    },
    iconRight: {
      default: select('Icon right', ICON_LIST, '')
    }
  },
  methods: {
    clicked: action('clicked default')
  }
})
