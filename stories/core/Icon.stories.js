import { select, withKnobs, text } from '@storybook/addon-knobs'
import { ICON_LIST, defaultSizes, defaultTypes } from '../constants'
import { Template } from '../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/icon/',
  header: 'Icon',
  description: '<p>For icons we use Material Design Icons. See all icons <a target="_blank" href="https://material.io/resources/icons/">here</a>.</p><br>',
  template: '<b-icon :icon="icon" :size="size" :type="type" :custom-class="customClass"></b-icon>',
  size: 'large',
  progress: 60
}).getTemplate()

export default {
  title: 'Core',
  decorators: [withKnobs]
}

export const Icon = () => ({
  template: TEMPLATE,
  props: {
    size: {
      default: select('Size', defaultSizes, 'is-large')
    },
    type: {
      default: select('Type', defaultTypes, 'is-primary')
    },
    icon: {
      default: select('Icon', ICON_LIST, 'alarm')
    },
    customClass: {
      default: text('Custom CSS class (added to <i> element', '')
    }

  }
})
