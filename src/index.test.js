import React from 'react'
import { createStore, withStore } from '.'
import StoreContext from './StoreContext'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

class TestComponent extends React.Component {
  render() {
    return <div id="test-div">hello</div>
  }
}

Enzyme.configure({ adapter: new Adapter() })

describe('Create Store', () => {
  beforeEach(() => {})
  it('the initial value is in the component state', () => {
    const initialValue = {
      amount: 15,
      user: {
        name: 'Spyna',
        url: 'https://github.com/Spyna'
      }
    }
    const Store = createStore(TestComponent, initialValue)
    const wrapper = mount(<Store />)
    const instance = wrapper.instance()

    expect(instance.state.amount).toBe(initialValue.amount)
    expect(wrapper.find('#test-div').length).toBe(1)
  })
})

describe('With Store', () => {
  it('it creates a Component with the store', () => {
    const WithStore = withStore(TestComponent)

    const testContextValue = {
      get: () => 'test-value'
    }

    const value = 'test'

    const wrapper = mount(
      <StoreContext.Provider value={testContextValue}>
        <WithStore property={value} />
      </StoreContext.Provider>
    )
    expect(wrapper.prop('property')).toBe(value)

    const renderComponent = wrapper.find(TestComponent).first()
    expect(renderComponent.exists()).toBe(true)

    expect(renderComponent.prop('store').get()).toBe(testContextValue.get())
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

  it('it protects store methods from being modified', () => {
    const WithStore = withStore(TestComponent)

    const testContextValue = {
      get: () => 'test-value'
    }

    const wrapper = mount(
      <StoreContext.Provider value={testContextValue}>
        <WithStore />
      </StoreContext.Provider>
    )

    global.console = { error: jest.fn(), group: jest.fn(), groupEnd: jest.fn() }

    const renderComponent = wrapper.find(TestComponent).first()
    const store = renderComponent.prop('store')
    store.get = () => 'another function'
    expect(store.get()).toBe(testContextValue.get())
    expect(console.group).toBeCalled()
    expect(console.group.mock.calls[0][0]).toContain('@spyna/react-store')
    expect(console.error).toBeCalled()
    expect(console.error.mock.calls[0][0]).toBe(
      `Sorry, you can't modify the [get] property this way.`
    )
    expect(console.groupEnd).toBeCalled()
  })

  it('it protects store methods from being removed', () => {
    const WithStore = withStore(TestComponent)

    const testContextValue = {
      get: () => 'test-value'
    }

    const wrapper = mount(
      <StoreContext.Provider value={testContextValue}>
        <WithStore />
      </StoreContext.Provider>
    )

    global.console = { error: jest.fn(), group: jest.fn(), groupEnd: jest.fn() }

    const renderComponent = wrapper.find(TestComponent).first()
    const store = renderComponent.prop('store')
    delete store.get
    expect(store.get()).toBe(testContextValue.get())
    expect(console.group).toBeCalled()
    expect(console.error).toBeCalled()
    expect(console.groupEnd).toBeCalled()
  })
})
