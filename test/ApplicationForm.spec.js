import Buefy from 'buefy'
import { createLocalVue, mount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import ApplicationForm from '@/pages/application-form'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(Buefy)

describe('Application form', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(
      ApplicationForm,
      {
        localVue
      }
    )
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Application from - validation', () => {
    const wrapper = mount(
      ApplicationForm,
      {
        localVue
      }
    )
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toContain('button')
  })
})
