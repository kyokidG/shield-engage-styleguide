import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { Template } from '../TemplateClass'

const templates = [
  `<b-collapse class="card" :open="isCollapsed" @open="this.open" @close="this.close">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
          <p class="card-header-title">Collapse</p>
          <p class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
          </p>
      </div>
      <div class="card-content">
          <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          </div>
      </div>
    </b-collapse>`,
    `<b-collapse class="card" v-for="(collapse, index) of collapses" :key="index" :open="allOpen" @open="this.open">
        <div slot="trigger" slot-scope="props" class="card-header" role="button">
            <p class="card-header-title">
                {{ collapse.title }}
            </p>
            <p class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                </b-icon>
            </p>
        </div>
        <div class="card-content">
            <div class="content">
                {{ collapse.text }}
            </div>
        </div>
    </b-collapse>`
]
const TEMPLATE = new Template({
  originalUrl: ['https://buefy.org/documentation/collapse/', 'https://buefy.org/documentation/collapse/'],
  header: ['Single', 'Multiple'],
  template: templates,
  size: 'large',
  columns: 1,
  progress: 100
}).getTemplate()

export default {
  title: 'Core',
  decorators: [withKnobs]
}

export const Collapse = () => ({
  template: TEMPLATE,
  props: {
    isCollapsed: {
      default: boolean('isCollapsed', false, 'SINGLE')
    },
    allOpen: {
      default: boolean('Open all', false, 'MULTIPLE')
    },
    collapses: {
      default: [{
        title: 'Collapse Title 1',
        text: 'Text 1'
      },
      {
        title: 'Collapse Title 2',
        text: 'Text 2'
      },
      {
        title: 'Collapse Title 3',
        text: 'Text 3'
      }
      ]
    }
  },
  methods: {
    open: action('open'),
    close: action('close')
  }
})
