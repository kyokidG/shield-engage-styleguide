import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, text, number } from '@storybook/addon-knobs'
import { defaultTypes, ANIMATIONS } from '../constants'
import { Template } from '../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/notification/',
  header: 'Notification',
  template: `
    <b-notification @close="close" :animation="animation" :message="message" :duration="duration" :auto-close="isAutoClose" :active="isActive" :type="type" :has-icon="hasIcon" :closable="isClosable" :aria-close-label="ariaCloseLabel" role="alert">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
    </b-notification>
  `,
  size: 'large',
  progress: 96
}).getTemplate()

export default {
  title: 'Core',
  decorators: [withKnobs]
}

export const Notification = () => ({
  template: TEMPLATE,
  props: {
    isActive: {
      default: boolean('Active', true)
    },
    message: {
      default: text('Message', 'This email is invalid')
    },
    type: {
      default: select('Type', defaultTypes, 'is-danger')
    },
    animation: {
      default: select('Animation', ANIMATIONS, 'fade')
    },
    isAutoClose: {
      default: boolean('Auto-Close (after duration ms)', false)
    },
    duration: {
      default: number('Duration', 0)
    },
    isClosable: {
      default: boolean('Closable', false)
    },
    hasIcon: {
      default: boolean('Has icon', true)
    },
    ariaCloseLabel: {
      default: text('aria-close Label', '')
    }
  },
  methods: {
    close: action('close')
  }
})
