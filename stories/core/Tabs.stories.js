import { action } from '@storybook/addon-actions'
import { select, boolean, withKnobs, text } from '@storybook/addon-knobs'
import { ICON_LIST, defaultSizes } from '../constants'
import { Template } from '../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/tabs/',
  header: 'Tabs',
  template: `<b-tabs :type="type" :expanded="isExpanded" :animated="animated" :position="position" @input="input" @change="change">
                <b-tab-item :label="tabOneLabel" :icon="tabOneIcon" :visible="isTabOneVisible" :disabled="isTabOneDisabled">Tab One</b-tab-item>
                <b-tab-item :label="tabTwoLabel" :icon="tabTwoIcon" :visible="isTabTwoVisible" :disabled="isTabTwoDisabled">Tab Two</b-tab-item>
            </b-tabs>`,
  size: 'large',
  progress: 100
}).getTemplate()

export default {
  title: 'Core',
  decorators: [withKnobs]
}
const tabsTypes = {
  'is-boxed': 'is-boxed',
  'is-toggle': 'is-toggle',
  'is-toggle-rounded': 'is-toggle-rounded'
}
export const Tabs = () => ({
  template: TEMPLATE,
  props: {
    size: {
      default: select('Size', defaultSizes, 'is-large', 'General')
    },
    position: {
      default: select('Position', ['is-centered', 'is-right', 'is-left'], 'is-centered', 'General')
    },
    type: {
      default: select('Type', tabsTypes, 'is-toggle', 'General')
    },
    isExpanded: {
      default: boolean('Expanded', false, 'General')
    },
    animated: {
      default: boolean('Animated', true)
    },
    isVertical: {
      default: boolean('Vertical', false, 'General')
    },
    tabOneLabel: {
      default: text('Label', 'Pictures', 'First tab')
    },
    tabTwoLabel: {
      default: text('Label', 'Music', 'Second tab')
    },
    tabOneIcon: {
      default: select('Icon', ICON_LIST, 'camera', 'First tab')
    },
    tabTwoIcon: {
      default: select('Icon', ICON_LIST, '', 'Second tab')
    },
    isTabOneDisabled: {
      default: boolean('Disabled', false, 'First tab')
    },
    isTabTwoDisabled: {
      default: boolean('Disabled', false, 'Second tab')
    },
    isTabOneVisible: {
      default: boolean('Visible', true, 'First tab')
    },
    isTabTwoVisible: {
      default: boolean('Visible', true, 'Second tab')
    }
  },
  methods: {
    input: action('input'),
    change: action('change')
  }
})
