import React from 'react'
import { storeHandler } from './storeProxyHandler'
import defaultConfig from './defaultConfig'
import StoreContext from './StoreContext'
import isHermesEngine from './checkJSEngine'

/**
 * @param {ReactElement} WrappedComponent the component to connect with the store
 * @param {Object} initialValue the initial store value or nothing
 * @param {Object} config the custom configuration. If nothing is passed will use the default config
 */
const createStore = (
  WrappedComponent,
  initialValue,
  config = defaultConfig
) => {
  const userConfig = Object.freeze({ ...defaultConfig, ...config })

  const { listener } = userConfig

  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { storage: { ...initialValue } }
    }

    updateState = state => {
      return new Promise(resolve => {
        this.setState({ storage: state })
        resolve(state)
        listener(state)
      })
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
          const { storage } = this.state
          storage[key] = value
          return this.updateState(storage)
        },
        setAll: (...arrayOfEntris) => {
          const { storage } = this.state
          arrayOfEntris.forEach(entry => {
            const { key, value } = entry
            storage[key] = value
          })
          return this.updateState(storage)
        },
        remove: key => {
          const { storage } = this.state
          delete storage[key]
          return this.updateState(storage)
        },
        getState: () => {
          return Object.assign({}, this.state.storage)
        }
      }

      // Proxy is not available at Hermes Engine used in React Native
      if (!isHermesEngine()) {
        store = new Proxy(store, storeHandler)
      }

      this.setState({ store })
    }

    render() {
      return (
        <StoreContext.Provider value={{ store: this.state.store }}>
          <WrappedComponent {...this.props} />
        </StoreContext.Provider>
      )
    }
  }
}

export default createStore
