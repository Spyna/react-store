import React from 'react'
import createStore from './createStore'
import withStore from './withStore'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

class TestCreateStoreComponent extends React.Component {
  render() {
    return <div id='test-div'>{this.props.children}</div>
  }
}
class TestWithStoreComponent extends React.Component {
  render() {
    return <div id='test-div-withStore'>hello</div>
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
    const Store = createStore(TestCreateStoreComponent, initialValue)
    const wrapper = mount(<Store />)
    const instance = wrapper.instance()

    expect(instance.state.storage.amount).toBe(initialValue.amount)
    expect(wrapper.find('#test-div').length).toBe(1)
  })

  it('should preserve the original wrappedComponent props', () => {
    const Store = createStore(TestCreateStoreComponent)
    const testValue = 'test-value'
    const wrapper = mount(<Store originalProp={testValue} />)
    const instance = wrapper.instance()

    expect(instance.props.originalProp).toBe(testValue)
    expect(wrapper.find('#test-div').length).toBe(1)
  })
})

describe('Freeze the store methods', () => {
  it('should protect store methods from being modified', () => {
    const App = createStore(TestCreateStoreComponent)
    const WithStore = withStore(TestWithStoreComponent)
    const wrapper = mount(
      <App>
        <WithStore />
      </App>
    )

    global.console = { error: jest.fn(), group: jest.fn(), groupEnd: jest.fn() }

    const renderComponent = wrapper.find(TestWithStoreComponent).first()
    expect(renderComponent.exists()).toBe(true)
    const store = renderComponent.prop('store')
    store.get = () => 'another function'
    expect(console.group).toBeCalled()
    expect(console.group.mock.calls[0][0]).toContain('@spyna/react-store')
    expect(console.error).toBeCalled()
    expect(console.error.mock.calls[0][0]).toBe(
      `Sorry, you can't modify the [get] property this way.`
    )
    expect(console.groupEnd).toBeCalled()
  })

  it('should protect store methods from being removed', () => {
    const App = createStore(TestCreateStoreComponent)
    const WithStore = withStore(TestWithStoreComponent)
    const wrapper = mount(
      <App>
        <WithStore />
      </App>
    )
    global.console = {
      error: jest.fn(),
      group: jest.fn(),
      groupEnd: jest.fn()
    }

    const renderComponent = wrapper.find(TestWithStoreComponent).first()
    const store = renderComponent.prop('store')
    delete store.get
    expect(console.group).toBeCalled()
    expect(console.error).toBeCalled()
    expect(console.groupEnd).toBeCalled()
  })
})

describe('Use the store', () => {
  it('should set and get a value in the store', async () => {
    const App = createStore(TestCreateStoreComponent)
    const WithStore = withStore(TestWithStoreComponent)
    const wrapper = mount(
      <App>
        <WithStore />
      </App>
    )

    const renderComponent = wrapper.find(TestWithStoreComponent).first()
    expect(renderComponent.exists()).toBe(true)
    const store = renderComponent.prop('store')

    const key = 'key '
    const value = 'value'

    await store.set(key, value)

    const aValue = store.get(key)
    expect(aValue).toBe(value)
  })

  it('should get the default value if a key does not exists', async () => {
    const App = createStore(TestCreateStoreComponent)
    const WithStore = withStore(TestWithStoreComponent)
    const wrapper = mount(
      <App>
        <WithStore />
      </App>
    )

    const renderComponent = wrapper.find(TestWithStoreComponent).first()
    expect(renderComponent.exists()).toBe(true)
    const store = renderComponent.prop('store')

    const key = 'key '
    const defaultValue = 'value'

    const aValue = store.get(key, defaultValue)
    expect(aValue).toBe(defaultValue)
  })

  it('should remove a value from the store', async () => {
    const App = createStore(TestCreateStoreComponent)
    const WithStore = withStore(TestWithStoreComponent)
    const wrapper = mount(
      <App>
        <WithStore />
      </App>
    )

    const renderComponent = wrapper.find(TestWithStoreComponent).first()
    expect(renderComponent.exists()).toBe(true)
    const store = renderComponent.prop('store')

    const key = 'key '
    const value = 'value'

    await store.set(key, value)

    let aValue = store.get(key)
    expect(aValue).toBe(value)

    store.remove(key)
    aValue = store.get(key)
    expect(aValue).toBeUndefined()
  })

  it('should return all the store data', async () => {
    const App = createStore(TestCreateStoreComponent)
    const WithStore = withStore(TestWithStoreComponent)
    const wrapper = mount(
      <App>
        <WithStore />
      </App>
    )

    const renderComponent = wrapper.find(TestWithStoreComponent).first()
    expect(renderComponent.exists()).toBe(true)
    const store = renderComponent.prop('store')

    const key = 'key '
    const value = 'value'

    await store.set(key, value)

    const state = store.getState()
    expect(Object.keys(state)).toContain(key)
    expect(state[key]).toBe(value)
  })

  it('method set should return a promise', () => {
    const App = createStore(TestCreateStoreComponent, {}, {})
    const WithStore = withStore(TestWithStoreComponent)
    const wrapper = mount(
      <App>
        <WithStore />
      </App>
    )

    const renderComponent = wrapper.find(TestWithStoreComponent).first()
    expect(renderComponent.exists()).toBe(true)
    const store = renderComponent.prop('store')

    const key = 'key '
    const value = 'value'
    const setPromise = store.set(key, value)
    expect(setPromise).toBeInstanceOf(Promise)
  })

  it('should call a custom callback function when store changes', async () => {
    const listener = jest.fn()
    const App = createStore(TestCreateStoreComponent, {}, { listener })
    const WithStore = withStore(TestWithStoreComponent)
    const wrapper = mount(
      <App>
        <WithStore />
      </App>
    )

    const renderComponent = wrapper.find(TestWithStoreComponent).first()
    expect(renderComponent.exists()).toBe(true)
    const store = renderComponent.prop('store')

    const key = 'key '
    const value = 'value'
    await store.set(key, value)

    expect(listener).toBeCalledWith(store.getState())
  })

  it('method set multiple values at once', async () => {
    const App = createStore(TestCreateStoreComponent, {}, {})
    const WithStore = withStore(TestWithStoreComponent)
    const wrapper = mount(
      <App>
        <WithStore />
      </App>
    )

    const renderComponent = wrapper.find(TestWithStoreComponent).first()
    expect(renderComponent.exists()).toBe(true)
    const store = renderComponent.prop('store')

    const key = 'key 1'
    const value = 'value'

    const key2 = 'key 2'
    const value2 = 'value 2'

    await store.setAll({ key, value }, { key: key2, value: value2 })

    expect(store.getState()[key]).toBe(value)
    expect(store.getState()[key2]).toBe(value2)
  })
})
