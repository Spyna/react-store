import defaultConfig from './defaultConfig'

const createStore = (StoreProvider, config = defaultConfig) => {
  const componentState = StoreProvider.state
  const promisify = config.promisify || false
  const updateState = state => {
    const promise = new Promise(resolve => {
      StoreProvider.setState(state)
      resolve()
    })
    return promisify ? promise : undefined
  }
  return {
    get: (key, defaultValue) => {
      let value = componentState[key]
      if (value === undefined) {
        value = defaultValue
      }
      return value
    },
    set: (key, value) => {
      const state = componentState
      state[key] = value
      return updateState(state)
    },
    remove: key => {
      const state = componentState
      delete state[key]
      return updateState(state)
    },
    getState: () => {
      return Object.assign({}, componentState)
    }
  }
}

class Store {
  constructor(Component, config) {
    const store = createStore(Component, config)
    Object.assign(this, store)
  }
}

const warnUser = prop => {
  console.group('%c @spyna/react-store ', 'background: #fcc; color: #333')
  console.error(`Sorry, you can't modify the [${prop}] property this way.`)
  console.groupEnd()
}

const storeHandler = {
  set(obj, prop, value) {
    warnUser(prop)
    return true
  },
  deleteProperty(target, prop) {
    warnUser(prop)
    return true
  }
}
export { storeHandler }

export default Store
