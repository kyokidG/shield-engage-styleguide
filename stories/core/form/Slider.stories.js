import { action } from '@storybook/addon-actions'
import { select, withKnobs, boolean, number } from '@storybook/addon-knobs'
import { defaultSizes, defaultTypes } from '../../constants'
import { Template } from '../../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/slider/',
  header: 'Slider',
  template: '<b-slider @input="input" @change="change" @dragstart="dragstart" @dragend="dragend" @dragging="dragging" :type="type" :tooltipType="tooltipType" :step="step" :ticks="showTicks" :value="value" :size="size" :tooltip="hasTooltip" :rounded="isRounded" :disabled="isDisabled"></b-slider>',
  size: 'large',
  progress: 96
}).getTemplate()

export default {
  title: 'Core/Form',
  decorators: [withKnobs]
}

export const Slider = () => ({
  template: TEMPLATE,
  props: {
    value: {
      default: number('Value', 15)
    },
    type: {
      default: select('Type', defaultTypes, 'is-primary')
    },
    tooltipType: {
      default: select('Tooltip type', defaultTypes, 'is-primary')
    },
    size: {
      default: select('Size', defaultSizes, 'is-large')
    },
    hasTooltip: {
      default: boolean('Has tooltip', true)
    },
    showTicks: {
      default: boolean('Show ticks', true)
    },
    step: {
      default: number('Step', 100)
    },
    isDisabled: {
      default: boolean('Disabled', false)
    },
    isRounded: {
      default: boolean('Rounded', false)
    }
  },
  methods: {
    input: action('input'),
    change: action('change'),
    dragstart: action('dragstart'),
    dragend: action('dragend'),
    dragging: action('dragging')
  }
})
