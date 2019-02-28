import React from 'react'
import StoreContext from './StoreContext'

/**
 *
 * @param {ReactElement} WrappedComponent the component will be connected with the store
 * @param {Array<String>} keys the keys of the data in the store to set as WrappedComponent props.
 */
const withStore = (WrappedComponent, keys = []) => {
  return class extends React.PureComponent {
    static displayName = `withStore(${WrappedComponent.displayName ||
      WrappedComponent.name})`
    static WrappedComponent = WrappedComponent

    render() {
      return (
        <StoreContext.Consumer>
          {context => {
            const { store } = context
            const storeData = {}
            keys.forEach(key => {
              storeData[key] = store.get(key)
            })
            return (
              <WrappedComponent store={store} {...this.props} {...storeData} />
            )
          }}
        </StoreContext.Consumer>
      )
    }
  }
}

export default withStore
