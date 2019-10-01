import React from 'react'
import Card from '../../layout/CodeCard'
import { withStore } from '@spyna/react-store'

class DisplaystoreData extends Card {
  displayName = 'DisplayAmount'
  render() {
    const { amount, store } = this.props
    return (
      <Card title={this.displayName} source="src/views/Demo/DisplayAmount.js">
        <p>
          <strong>amount</strong>.<br />
          <span className="amount">{amount}</span>
        </p>
        <div>
          Amount, accessed using both:
          <ul>
            <li>
              <code className="language-javascript">props.amount</code>
            </li>
            <li>
              <code className="language-javascript">store.get('amount')</code>
            </li>
          </ul>
        </div>
        <div>
          <h2>All data stored </h2>
          <pre className="language-json">
            <code className="language-json">
              {JSON.stringify(store.getState(), null, ' ')}
            </code>
          </pre>
        </div>
      </Card>
    )
  }
}

export default withStore(DisplaystoreData, ['amount'])
