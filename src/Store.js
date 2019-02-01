const createStore = Component => {
  const componentState = Component.state
  return {
    get: (key, defaultValue) => {
      const value = componentState[key]
      if (value === undefined) {
        return defaultValue
      }
      return value
    },
    set: (key, value) => {
      const state = componentState
      state[key] = value
      Component.setState(state)
    },
    remove: key => {
      const state = componentState
      delete state[key]
      Component.setState(state)
    },
    getState: () => {
      return Object.assign({}, componentState)
    }
  }
}

class Store {
  constructor(Component) {
    const store = createStore(Component)
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
