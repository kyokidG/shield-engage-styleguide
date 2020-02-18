import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, text, number } from '@storybook/addon-knobs'
import { ICON_LIST, defaultSizes, defaultTypes } from '../../constants'
import { Template } from '../../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/datepicker/',
  header: 'DatePicker',
  template: '<b-datepicker @input="input" @change-month="changeMonth"  @change-year="changeYear" @range-start="rangeStart" @range-end="rangeEnd" :show-week-number="showWeekNumber" :placeholder="placeholder" :icon="icon" :size="size" :loading="isLoading" :rounded="isRounded" :first-day-of-week="firstDay"></b-datepicker>',
  size: 'large',
  progress: 80
}).getTemplate()

export default {
  title: 'Core/Form',
  decorators: [withKnobs]
}

export const DatePicker = () => ({
  template: TEMPLATE,
  props: {
    showWeekNumber: {
      default: boolean('Show week nuber', false)
    },
    placeholder: {
      default: text('Placeholder', '')
    },
    size: {
      default: select('Size', defaultSizes, 'is-small')
    },
    firstDay: {
      default: number('First day of the week (0-6)', 1)
    },
    icon: {
      default: select('Icon', ICON_LIST, 'calendar-today')
    },
    value: {
      default: text('Value', '')
    },
    type: {
      default: select('Type', defaultTypes, 'is-danger')
    },
    isDisabled: {
      default: boolean('Disabled', false)
    },
    isLoading: {
      default: boolean('Loading', false)
    },
    isRounded: {
      default: boolean('Rounded', false)
    }
  },
  methods: {
    input: action('input'),
    changeMonth: action('change-month'),
    changeYear: action('change-month'),
    rangeStart: action('range-start'),
    rangeEnd: action('range-end')
  }
})
