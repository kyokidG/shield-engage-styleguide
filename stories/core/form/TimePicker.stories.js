import { action } from '@storybook/addon-actions'
import { select, withKnobs, text, boolean } from '@storybook/addon-knobs'
import { defaultSizes, ICON_LIST } from '../../constants'
import { Template } from '../../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/timepicker/',
  header: 'TimePicker',
  template: '<b-timepicker :rounded="isRounded" :placeholder="placeholder" :inline="isInline" :icon="icon" :size="size" :loading="isLoading" :enable-seconds="isEnableSeconds"></b-timepicker>',
  size: 'large',
  progress: 80
}).getTemplate()

export default {
  title: 'Core/Form',
  decorators: [withKnobs]
}

export const Timepicker = () => ({
  template: TEMPLATE,
  data () {
    return {}
  },
  props: {
    size: {
      default: select('Size', defaultSizes, 'is-large')
    },
    icon: {
      default: select('Icon', ICON_LIST, 'watch')
    },
    placeholder: {
      default: text('Placeholder', 'Select time ...')
    },
    isEnableSeconds: {
      default: boolean('Enable seconds', false)
    },
    isRounded: {
      default: boolean('Rounded', false)
    },
    isInline: {
      default: boolean('Inline', false)
    },
    isLoading: {
      default: boolean('Loading', false)
    }
  },
  methods: {
    input: action('input')
  }
})
