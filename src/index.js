import React from 'react'
import Store, { storeHandler } from './Store'
import StoreContext from './StoreContext'


const createStore = (WrappedComponent, initialValue, config = {}) => {
  return class extends React.Component {
    state = {
      ...initialValue
    }

    render() {
      return (
        <StoreContext.Provider
          value={{
            state: this.state,
            store: new Store(this)
          }}
        >
          <WrappedComponent {...this.props} />
        </StoreContext.Provider>
      )
    }
  }
}

const withStore = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <StoreContext.Consumer>
          {context => {
            return (
              <WrappedComponent
                store={new Proxy(context.store, storeHandler)}
                {...this.props}
              />
            )
          }}
        </StoreContext.Consumer>
      )
    }
  }
}

export { createStore, withStore }
