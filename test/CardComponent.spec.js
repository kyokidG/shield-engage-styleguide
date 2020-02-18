import Buefy from 'buefy'
import { createLocalVue, mount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import Card from '@/pages/card.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(Buefy)

describe('CardComponent', () => {
  test('Card elements are generated properly', () => {
    const wrapper = mount(Card, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
    wrapper.setData({ label: 'some label' })
    expect(wrapper.vm.label).toBe('some label')
    expect(wrapper.find('.title').exists()).toBe(true)
    expect(wrapper.find('.text').exists()).toBe(true)
    expect(wrapper.find('.message-body').exists()).toBe(true)
  })
})
