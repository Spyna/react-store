import React from 'react'
import withStore from './withStore'
import StoreContext from './StoreContext'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

class TestComponent extends React.Component {
  render() {
    return <div id='test-div'>hello</div>
  }
}

Enzyme.configure({ adapter: new Adapter() })

describe('With Store', () => {
  it('it creates a Component with the store', () => {
    const WithStore = withStore(TestComponent)

    const testContextValue = {
      store: { get: () => 'test-value' }
    }

    const wrapper = mount(
      <StoreContext.Provider value={testContextValue}>
        <WithStore />
      </StoreContext.Provider>
    )
    const renderComponent = wrapper.find(TestComponent).first()
    expect(renderComponent.exists()).toBe(true)

    expect(renderComponent.prop('store').get()).toBe(
      testContextValue.store.get()
    )
  })

  it('it injects the store properties as props', () => {
    const WithStore = withStore(TestComponent, ['testkey'])

    const testValue = 'test-value'
    const testContextValue = {
      store: {
        getState: () => ({
          testkey: testValue
        }),
        get: key => {
          expect(key).toBe('testkey')
          return testValue
        }
      }
    }

    const wrapper = mount(
      <StoreContext.Provider value={testContextValue}>
        <WithStore />
      </StoreContext.Provider>
    )
    const renderComponent = wrapper.find(TestComponent).first()

    expect(renderComponent.prop('testkey')).toBe(testValue)
  })

  it('Context.Consumer needs a store in the Provicer value', () => {
    const WithStore = withStore(TestComponent)

    const testContextValue = 'an invalid value for the provider'

    const value = 'test'
    let errorComponent
    try {
      errorComponent = (
        <StoreContext.Provider value={testContextValue}>
          <WithStore property={value} />
        </StoreContext.Provider>
      )
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError)
      expect(error.message).toBe(
        'Cannot create proxy with a non-object as target or handler'
      )
    }
    expect(errorComponent.props.value).toBe(testContextValue)
  })
})
