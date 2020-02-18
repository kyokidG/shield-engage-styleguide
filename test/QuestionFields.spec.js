import Buefy from 'buefy'
import { createLocalVue, mount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import Question from '@/components/Question.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(Buefy)

describe('QuestionField', () => {
  test('text type element isVueInstance', () => {
    const wrapper = mount(
      Question,
      {
        localVue,
        propsData: {
          question: {
            guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe81c3',
            type: 'text',
            label: 'Phone Number',
            options: [],
            validations: [
              {
                type: 'required',
                params: ['please enter your phone number']
              },
              {
                type: 'min',
                params: [4, 'there should be at least 4 numbers']
              },
              {
                type: 'matches',
                params: ['^((\\\\+[1-9]{1,4}[ \\\\-]*)|(\\\\([0-9]{2,3}\\\\)[ \\\\-]*)|([0-9]{2,4})[ \\\\-]*)*?[0-9]{3,4}?[ \\\\-]*[0-9]{3,4}?$', 'please enter a valid phone number']
              }
            ],
            helpText: 'add your work number',
            value: '',
            note: '',
            approved: false
          }
        }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()

    const input = wrapper.find('input[type="text"]')
    expect(input.exists()).toBe(true)
    const p = wrapper.find('p[class="help"]')
    expect(p.exists()).toBe(true)
  })

  test('boolean type element isVueInstance', () => {
    const wrapper = mount(
      Question,
      {
        localVue,
        propsData: {
          question: {
            guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe86c3',
            type: 'boolean',
            label: 'The information I am submitting is true and I am authorized to act on behalf of this entity and its owner',
            options: [],
            validations: [
              {
                type: 'oneOf',
                params: [[true], 'You must agree to these terms']
              }
            ],
            helpText: '',
            value: false,
            note: '',
            approved: false
          }
        }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()

    const input = wrapper.find('input[type="checkbox"]')
    expect(input.exists()).toBe(true)
  })

  test('bounded type element isVueInstance', () => {
    const wrapper = mount(
      Question,
      {
        localVue,
        propsData: {
          question: {
            guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe81c5',
            type: 'bounded',
            label: 'Role at the Company',
            options: ['amet', 'laboris', 'eiusmod'],
            validations: [
              {
                type: 'required',
                params: ['please select your role']
              }
            ],
            helpText: '',
            value: '',
            note: '',
            approved: false
          }
        }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()

    const select = wrapper.find('select')
    expect(select.exists()).toBe(true)
  })

  test('date type element isVueInstance', () => {
    const wrapper = mount(
      Question,
      {
        localVue,
        propsData: {
          question: {
            guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe81c9',
            type: 'date',
            label: 'Birthday',
            options: [],
            validations: [
              {
                type: 'required',
                params: ['please select your birthday']
              }
            ],
            helpText: '',
            value: null,
            note: '',
            approved: false
          }
        }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()

    const input = wrapper.find('input[type="text"]')
    expect(input.exists()).toBe(true)
    expect(wrapper.find('div[class="datepicker control"]').exists()).toBe(true)
  })

  test('file type element isVueInstance', () => {
    const wrapper = mount(
      Question,
      {
        localVue,
        propsData: {
          question: {
            guid: 'd782e2e9-62bd-4d5b-841a-b3b84cfe8110',
            type: 'file',
            label: 'Upload a file',
            options: [],
            validations: [
              {
                type: 'required',
                params: ['please upload a file']
              }
            ],
            helpText: '',
            value: null,
            note: '',
            approved: false
          }
        }
      }
    )
    expect(wrapper.isVueInstance()).toBeTruthy()

    const input = wrapper.find('input[type="file"]')
    expect(input.exists()).toBe(true)
    expect(wrapper.find('label[class="upload control"]').exists()).toBe(true)
  })
})
