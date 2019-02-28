import React from 'react';
import { storeHandler } from './storeProxyHandler'
import defaultConfig from './defaultConfig'
import StoreContext from './StoreContext'

/**
 * @param {ReactElement} WrappedComponent the component to connect with the store
 * @param {Object} initialValue the initial store value or nothing
 * @param {Object} config the custom configuration. If nothing is passed will be used the default config
 */
const createStore = (
  WrappedComponent,
  initialValue,
  config = defaultConfig
) => {
  const userConfig = Object.freeze({ ...defaultConfig, ...config })

  const { promisify } = userConfig

  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { storage: { ...initialValue } }
    }

    updateState = state => {
      const promise = new Promise(resolve => {
        this.setState({ storage: state })
        resolve()
      })
      return promisify ? promise : undefined
    }

    componentWillMount() {
      let store = {
        get: (key, defaultValue) => {
          let value = this.state.storage[key]
          if (value === undefined) {
            value = defaultValue
          }
          return value
        },
        set: (key, value) => {
          const state = this.state.storage
          state[key] = value
          return this.updateState(state)
        },
        remove: key => {
          const state = this.state.storage
          delete state[key]
          return this.updateState(state)
        },
        getState: () => {
          return Object.assign({}, this.state.storage)
        }
      }
      store = new Proxy(store, storeHandler)
      this.setState({ store })
    }

    render() {
      return (
        <StoreContext.Provider
          value={{ store: this.state.store }}
        >
          <WrappedComponent {...this.props} />
        </StoreContext.Provider>
      )
    }
  }
}

export default createStore
