import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, text } from '@storybook/addon-knobs'
import { defaultSizes, defaultTypes } from '../constants'
import { Template } from '../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/tag/',
  header: 'Tag',
  template: '<b-tag @close="close" :type="type" :size="size" :aria-close-label="ariaCloseLabel" :closable="isClosable" :attached="isAttached" :rounded="isRounded" :ellipsis="isEllipsis" :tabstop="isTabstop" :disabled="isDisabled">Tag</b-tag>',
  size: 'large',
  progress: 96
}).getTemplate()

export default {
  title: 'Core',
  decorators: [withKnobs]
}

export const Tag = () => ({
  template: TEMPLATE,
  props: {
    size: {
      default: select('Size', defaultSizes, 'is-large')
    },
    ariaCloseLabel: {
      default: text('Aria Close Label', 'aria close label')
    },
    type: {
      default: select('Type', defaultTypes, 'is-danger')
    },
    isClosable: {
      default: boolean('Closable', false)
    },
    isAttached: {
      default: boolean('Attached', false)
    },
    isRounded: {
      default: boolean('Rounded', false)
    },
    isEllipsis: {
      default: boolean('Ellipsis', false)
    },
    isTabstop: {
      default: boolean('Tab stop (adds tabindex to element)', false)
    },
    isDisabled: {
      default: boolean('Disabled', false)
    }
  },
  methods: {
    close: action('close')
  }
})
