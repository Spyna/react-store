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
      store: {
        get: () => 'test-value'
      },
      state: {}
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

    expect(renderComponent.prop('store').get()).toBe(
      testContextValue.store.get()
    )
  })

  it('it protects store methods from being modified', () => {
    const WithStore = withStore(TestComponent)

    const testContextValue = {
      store: {
        get: () => 'test-value'
      },
      state: {}
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
    expect(store.get()).toBe(testContextValue.store.get())
    expect(console.group).toBeCalled()
    expect(console.error).toBeCalled()
    expect(console.groupEnd).toBeCalled()
  })

  it('it protects store methods from being removed', () => {
    const WithStore = withStore(TestComponent)

    const testContextValue = {
      store: {
        get: () => 'test-value'
      },
      state: {}
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
    expect(store.get()).toBe(testContextValue.store.get())
    expect(console.group).toBeCalled()
    expect(console.error).toBeCalled()
    expect(console.groupEnd).toBeCalled()
  })
})
