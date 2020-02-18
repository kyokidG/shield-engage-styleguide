import { action } from '@storybook/addon-actions'
import { select, withKnobs, boolean, number, text } from '@storybook/addon-knobs'
import { ANIMATIONS } from '../constants'
import { Template } from '../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/modal/',
  header: 'Modal',
  template: `
        <b-modal aria-role="dialog" @close="close" :active="active" :width="width" :trap-focus="trapFocus" :custom-class="customClass" :animation="animation">
            <div class="card content p4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. 
              <br>
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
        </b-modal>`,
  size: 'large',
  progress: 80
}).getTemplate()

export default {
  title: 'Core',
  decorators: [withKnobs]
}
export const Modal = () => ({
  template: TEMPLATE,
  props: {
    active: {
      default: boolean('Active', true)
    },
    animation: {
      default: select('Animation', ANIMATIONS, 'zoom-out')
    },
    width: {
      default: number('Width', 300)
    },
    trapFocus: {
      default: boolean('Trap focus', true)
    },
    customClass: {
      default: text('Custom CSS class', '')
    }
  },
  methods: {
    close: action('close')
  }
})
