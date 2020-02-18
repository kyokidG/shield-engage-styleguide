import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { Template } from '../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: 'https://buefy.org/documentation/table/',
  header: 'Table',
  progress: 75,
  template: `<b-table :data="isEmpty ? [] : data" :bordered="isBordered" :striped="isStriped" :narrowed="isNarrowed" :hoverable="isHoverable" :loading="isLoading" :focusable="isFocusable" :mobile-cards="hasMobileCards">
              <template slot-scope="props">
                  <b-table-column field="id" label="ID" width="40" numeric>
                      {{ props.row.id }}
                  </b-table-column>
                  <b-table-column field="first_name" label="Name">
                      {{ props.row.first_name }}
                  </b-table-column>
                  <b-table-column field="date" label="Date" centered>
                      <span class="tag is-success">
                          {{ new Date(props.row.date).toLocaleDateString() }}
                      </span>
                  </b-table-column>
              </template>
              <template slot="empty">
                  <section class="section">
                      <div class="content has-text-grey has-text-centered">
                          <p>
                              <b-icon
                                  icon="emoticon-sad"
                                  size="is-large">
                              </b-icon>
                          </p>
                          <p>Nothing here.</p>
                      </div>
                  </section>
              </template>
        </b-table>    
  `,
  size: 'large'
}).getTemplate()

export default {
  title: 'Core',
  decorators: [withKnobs]
}
export const Table = () => ({
  template: TEMPLATE,
  data () {
    const data = [
      { id: 1, first_name: 'Jesse', date: '2016/10/15 13:43:27' },
      { id: 2, first_name: 'John', date: '2016/12/15 06:00:53' },
      { id: 3, first_name: 'Tina', date: '2016/04/26 06:26:28' },
      { id: 4, first_name: 'Clarence', date: '2016/04/10 10:28:46' },
      { id: 5, first_name: 'Anne', date: '2016/12/06 14:38:38' }
    ]

    return {
      data
    }
  },
  props: {
    isEmpty: {
      default: boolean('Empty', false)
    },
    isBordered: {
      default: boolean('Bordered', false)
    },
    isStriped: {
      default: boolean('Striped', false)
    },
    isNarrowed: {
      default: boolean('Narrowed', false)
    },
    isHoverable: {
      default: boolean('Hoverable', false)
    },
    isFocusable: {
      default: boolean('Focusable', false)
    },
    isLoading: {
      default: boolean('Loading', false)
    },
    hasMobileCards: {
      default: boolean('Has Mobile Cards', false)
    }
  },
  methods: {
    input: action('input'),
    focus: action('focus'),
    iconClick: action('icon-click')
  }
})
