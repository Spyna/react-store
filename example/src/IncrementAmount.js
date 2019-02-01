import React from 'react'

import { withStore } from 'spyna-react-store'

class IncrementAmount extends React.Component {
  increment = () => {
    const { store } = this.props
    let amount = store.get('amount', 0) + 1
    store.set('amount', amount)
  }

  render() {
    return (
      <div className="component component2">
        <h2>{this.constructor.name}.js</h2>
        <button onClick={this.increment}>Increment</button>
        <p>This component increments <strong>amount</strong> in store</p>
      </div>
    )
  }
}

export default withStore(IncrementAmount)
