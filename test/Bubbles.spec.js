import Buefy from 'buefy'
import { createLocalVue, mount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import Bubbles from '@/components/bubbles/Bubbles.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(Buefy)

describe('Bubbles', () => {
  test('is a Bubbles instance', () => {
    const wrapper = mount(
      Bubbles,
      {
        localVue,
        propsData: {
          value: [
            {
              key: '6b155faf-213b-541c-385b-0331434c0511',
              text: 'ROOT'
            },
            {
              text: 'LLC',
              key: '6b921a99-5880-2092-48d1-03458a0acd5c',
              parent: '6b155faf-213b-541c-385b-0331434c0511',
              linkText: 'owns 25%'
            },
            {
              text: 'Individual',
              key: '993a6167-c94e-fb64-b7db-fa3470a0ffdc',
              parent: '6b155faf-213b-541c-385b-0331434c0511',
              linkText: 'owns 25%'
            },
            {
              text: 'LLC 2',
              key: '95fe9b87-fb13-15bd-bb5e-8aa431799d99',
              parent: '6b155faf-213b-541c-385b-0331434c0511',
              linkText: 'owns 50%'
            },
            {
              text: '4 / 1',
              key: '95fe9b87-fb13-15bd-bb5e-8aa431799d91',
              parent: '95fe9b87-fb13-15bd-bb5e-8aa431799d99',
              linkText: 'owns 50%'
            },
            {
              text: '4 / 2',
              key: '95fe9b87-fb13-15bd-bb5e-8aa431799d92',
              parent: '95fe9b87-fb13-15bd-bb5e-8aa431799d99',
              linkText: 'owns 50%'
            }
          ]
        }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.find('.plus').exists()).toBe(true)
    expect(wrapper.find('.minus').exists()).toBe(true)
    expect(wrapper.find('.limit-field').exists()).toBe(true)
  })
})
