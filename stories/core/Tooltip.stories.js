import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, number, text } from '@storybook/addon-knobs'
import { defaultSizes, defaultTypes } from '../constants'
import { Template } from '../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/tooltip/',
  header: 'Tooltip',
  template: '<b-tooltip :label="label" :type="type" :position="position" :size="size" :multilined="isMultilined" :always="isAlways" :animated="animation" :square="isSquare" :dashed="isDashed" :delay="delay"><button class="button is-primary">Hover me</button></b-tooltip>',
  size: 'large',
  progress: 96
}).getTemplate()

export default {
  title: 'Core',
  decorators: [withKnobs]
}
const positions = {
  'is-bottom': 'is-bottom',
  'is-top': 'is-top',
  'is-left': 'is-left',
  'is-right': 'is-right'
}
export const Tooltip = () => ({
  template: TEMPLATE,
  props: {
    label: {
      default: text('Label', 'Hello tooltip')
    },
    type: {
      default: select('Type', defaultTypes, 'is-info')
    },
    isAlways: {
      default: boolean('Always', false)
    },
    isActive: {
      default: boolean('Active', false)
    },
    position: {
      default: select('Position', positions, 'is-bottom')
    },
    size: {
      default: select('Size', defaultSizes, 'is-large')
    },
    isMultilined: {
      default: boolean('Multilined', false)
    },
    animation: {
      default: boolean('Animated', false)
    },
    isSquare: {
      default: boolean('Square', false)
    },
    isDashed: {
      default: boolean('Dashed', false)
    },
    delay: {
      default: number('Delay (ms)', 0)
    }
  },
  methods: {
    input: action('input'),
    focus: action('focus'),
    iconClick: action('icon-click')
  }
})
