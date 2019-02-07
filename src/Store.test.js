import Store from './Store'

describe('Store test', () => {
  it('instantiates a Store from a component', () => {
    const component = {
      state: { key: 'test-state' },
      setState: jest.fn()
    }

    const store = new Store(component)
    expect(store.getState).toBeInstanceOf(Function)
    expect(store.set).toBeInstanceOf(Function)
    expect(store.get).toBeInstanceOf(Function)
    expect(store.remove).toBeInstanceOf(Function)
    expect(Object.keys(store.getState())[0]).toBe('key')
  })

  it('sets and gets a value in the store', () => {
    const component = {
      state: { key: 'test-state' },
      setState: jest.fn()
    }

    const store = new Store(component)

    const key = 'text-key'
    const value = 'text-value'
    store.set(key, value)
    expect(component.setState).toBeCalled()
    expect(store.get(key)).toBe(value)
  })

  it('removes a value from the store', () => {
    const component = {
      state: { key: 'test-state' },
      setState: jest.fn()
    }

    const store = new Store(component)

    const key = 'text-key'
    const value = 'text-value'
    store.set(key, value)
    expect(component.setState).toBeCalled()

    store.remove(key)
    expect(component.setState).toBeCalled()
    expect(store.get(key)).toBeUndefined()
  })

  it(`'set' returns a promise by default`, done => {
    const component = {
      state: { key: 'test-state' },
      setState: jest.fn()
    }

    const store = new Store(component)

    const key = 'text-key'
    const value = 'text-value'
    store.set(key, value).then(() => {
      expect(component.setState).toBeCalled()
      expect(store.get(key)).toBe(value)
      done()
    })
  })

  it(`'remove' returns a promise by default`, done => {
    const component = {
      state: { key: 'test-state' },
      setState: jest.fn()
    }
    const config = {
      promisify: true
    }
    const store = new Store(component, config)

    const key = 'text-key'
    const value = 'text-value'
    store.set(key, value)
    expect(component.setState).toBeCalled()

    store.remove(key).then(() => {
      expect(component.setState).toBeCalled()
      expect(store.get(key)).toBeUndefined()
      done()
    })
  })

  it('returns nothing if no promise is configured', () => {
    const component = {
      state: { key: 'test-state' },
      setState: jest.fn()
    }
    const config = {
      promisify: false
    }
    const store = new Store(component, config)

    const key = 'text-key'
    const value = 'text-value'
    store.set(key, value)
    expect(component.setState).toBeCalled()

    const result = store.remove(key)
    expect(result).toBeUndefined()
    expect(component.setState).toBeCalled()
    expect(store.get(key)).toBeUndefined()
  })
})
