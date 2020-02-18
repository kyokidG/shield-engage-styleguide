import { createLocalVue, mount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import User from '@/components/User.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('User', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(
      User,
      {
        localVue,
        propsData: { user: { firstName: 'Eugen', lastName: 'Guriev' } }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
