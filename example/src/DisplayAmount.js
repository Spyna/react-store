import React from 'react'

import { withStore } from 'spyna-react-store'

class DisplaystoreData extends React.Component {
  displayName = 'DisplaystoreData'
  render() {
    const { store } = this.props
    return (
      <div className="component component1">
        <h2>{this.displayName}.js</h2>
        <p>
          <strong>amount</strong>.<br />
          <span className="amount">{store.get('amount')}</span>
        </p>
        <div>
          Amount, accessed using
          <pre>store.get('amount', 0)</pre>
        </div>
        <div>
          <h2>store data</h2>
          <pre>{JSON.stringify(store.getState(), null, ' ')}</pre>
        </div>
      </div>
    )
  }
}

export default withStore(DisplaystoreData)
