import React from 'react'
import Card from '../../layout/CodeCard'
import { withStore } from '@spyna/react-store'
import Button from '@material-ui/core/Button'

class DecrementAmount extends React.Component {
  displayName = 'DecrementAmount'
  decrement = () => {
    const { store } = this.props
    let amount = store.get('amount', 0) - 1
    store.set('amount', amount)
  }

  render() {
    return (
      <Card title={this.displayName} source="src/views/Demo/DecrementAmount.js">
        <p>
          This component decrements <strong>amount</strong> in store
        </p>
        <Button variant="contained" color="primary" onClick={this.decrement}>
          click to Decrement amount
        </Button>
      </Card>
    )
  }
}

export default withStore(DecrementAmount)
