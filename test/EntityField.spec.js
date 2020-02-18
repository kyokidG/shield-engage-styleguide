import Buefy from 'buefy'
import { createLocalVue, mount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import User from '@/components/repeater/EntityField.vue'
import guid from '@/utils/guid'

const localVue = createLocalVue()
const id = guid()
localVue.use(VueCompositionApi)
localVue.use(Buefy)

describe('EntityField', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(
      User,
      {
        localVue,
        propsData: {
          id,
          value: {
            name: '',
            type: '',
            percent: 1,
            max: 100
          }
        }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toContain(id + '-entity')
    expect(wrapper.html()).toContain(id + '-type')
    expect(wrapper.html()).toContain(id + '-percent')
  })
})
