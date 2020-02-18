import { createStore } from '../.nuxt/store'

describe('VuexStore', () => {
  test('initializes corectly', () => {
    const store = createStore()

    // creates 2 modules
    expect(Object.keys(store.state).length).toBe(3)
  })
})

describe('Entity Module', () => {
  test('initializes corectly', () => {
    const store = createStore()
    expect(store.state).toHaveProperty('entity')
  })

  test('actions work properly', () => {
    const store = createStore()
    store._actions['entity/updateLabel'][0]('NEW ENTITY NAME')
    expect(store.state.entity.label).toBe('NEW ENTITY NAME')
  })
})

describe('Institution Module', () => {
  test('initializes corectly', () => {
    const store = createStore()
    expect(store.state).toHaveProperty('institution')
  })

  test('actions work properly', () => {
    const store = createStore()
    store._actions['institution/updateName'][0]('NEW INSTITUTION NAME')
    expect(store.state.institution.name).toBe('NEW INSTITUTION NAME')
  })
})

describe('Wizard Module', () => {
  test('initializes corectly', () => {
    const store = createStore()
    expect(store.state).toHaveProperty('wizard')
  })

  test('setup wizard correctly', () => {
    const store = createStore()
    const testConfig = {
      stages: {
        'Get Started': {
          tasks: {
            intro: {
              cards: [
                'Introduction Card!'
              ]
            },
            'verify representation': {
              cards: [
                'Card One',
                'Card Two',
                'Card Three'
              ]
            },
            'term & conditions': {
              cards: [
                'Card One',
                'Card Two'
              ]
            },
            diclosures: {
              cards: [
                'Card One',
                'Card Two'
              ]
            }
          }
        },
        Inform: {
          tasks: {
            intro: {
              cards: [
                'Introduction Card!'
              ]
            },
            'Provide Information': {
              cards: [
                'Card One',
                'Card Two',
                'Card Three',
                'Card Four'
              ]
            },
            'Create Profiles': {
              cards: [
                'Card One',
                'Card Two',
                'Card Three'
              ]
            },
            'Review & Submit': {
              cards: [
                'Card One',
                'Card Two'
              ]
            }
          }
        },
        Apply: {
          tasks: {
            intro: {
              cards: [
                'Introduction Card!'
              ]
            },
            'Choose Services': {
              cards: [
                'Card One',
                'Card Two'
              ]
            },
            'Provide Documents': {
              cards: [
                'Card One',
                'Card Two',
                'Card Three'
              ]
            },
            'Review & Submit': {
              cards: [
                'Card One',
                'Card Two',
                'Card Three'
              ]
            }
          }
        },
        Verify: {
          tasks: {
            intro: {
              cards: [
                'Introduction Card!'
              ]
            },
            'Answer Questions': {
              cards: [
                'Card One',
                'Card Two'
              ]
            },
            'Additional Documents': {
              cards: [
                'Card One',
                'Card Two',
                'Card Three'
              ]
            },
            'Review & Submit': {
              cards: [
                'Card One',
                'Card Two',
                'Card Three'
              ]
            }
          }
        }
      }
    }
    store._actions['wizard/setupWizard'][0](testConfig)
    expect(store.state.wizard.config).toMatchObject(testConfig)
  })
})
