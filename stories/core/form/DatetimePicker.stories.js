import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, text, number } from '@storybook/addon-knobs'
import { ICON_LIST, defaultSizes } from '../../constants'
import { Template } from '../../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/datetimepicker/',
  header: 'DatetimePicker',
  template: `<b-datetimepicker @input="input" @change-month="changeMonth"  @change-year="changeYear" :placeholder="placeholder" :icon="icon" :size="size" :loading="isLoading" :rounded="isRounded"          
                :datepicker="{ showWeekNumber, firstDay }"
                :timepicker="{ isEnableSeconds }">
              </b-datetimepicker>`,
  size: 'large',
  progress: 20
}).getTemplate()

export default {
  title: 'Core/Form',
  decorators: [withKnobs]
}

export const DatetimePicker = () => ({
  template: TEMPLATE,
  props: {
    size: {
      default: select('Size', defaultSizes, 'is-large', 'DateTimePicker')
    },
    icon: {
      default: select('Icon', ICON_LIST, 'calendar-today', 'DateTimePicker')
    },
    placeholder: {
      default: text('Placeholder', 'Click to select ....', 'DateTimePicker')
    },
    isLoading: {
      default: boolean('Loading', false, 'DateTimePicker')
    },
    isRounded: {
      default: boolean('Rounded', false, 'DateTimePicker')
    },
    // date
    showWeekNumber: {
      default: boolean('Show week nuber', false, 'DatePicker')
    },
    firstDay: {
      default: number('First day of the week (0-6)', 1, 6, 'DatePicker')
    },
    // time
    isEnableSeconds: {
      default: boolean('Enable seconds', false, 'TimePicker')
    }

  },
  methods: {
    input: action('input'),
    changeMonth: action('change-month'),
    changeYear: action('change-month')
  }
})
