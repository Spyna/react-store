import React from 'react'

import { withStore } from 'spyna-react-store'

class DecrementAmount extends React.Component {
  displayName = 'DecrementAmount'
  decrement = () => {
    const { store } = this.props
    let amount = store.get('amount', 0) - 1
    store.set('amount', amount)
  }

  render() {
    return (
      <div className="component component3">
        <h2>{this.displayName}.js</h2>
        <button onClick={this.decrement}>Decrement</button>
        <p>
          This component decrements <strong>amount</strong> in store
        </p>
      </div>
    )
  }
}

export default withStore(DecrementAmount)
