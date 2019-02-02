import React from 'react'
import Card from './layout/Card'
import { withStore } from '@spyna/react-store'

class DecrementAmount extends React.Component {
  displayName = 'DecrementAmount'
  decrement = () => {
    const { store } = this.props
    let amount = store.get('amount', 0) - 1
    store.set('amount', amount)
  }

  render() {
    return (
      <Card title={this.displayName} size={12}>
        <p>
          This component decrements <strong>amount</strong> in store
        </p>
        <ul className="card-actions">
          <li>
            <button className="button-primary" onClick={this.decrement}>
              Decrement
            </button>
          </li>
        </ul>
      </Card>
    )
  }
}

export default withStore(DecrementAmount)
