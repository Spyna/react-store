import React from 'react'
import Card from '../../layout/CodeCard'
import { withStore } from '@spyna/react-store'
import Button from '@material-ui/core/Button'

class IncrementAmount extends React.Component {
  displayName = 'IncrementAmount'
  increment = () => {
    const { store } = this.props
    let amount = store.get('amount', 0) + 1
    store.set('amount', amount)
  }

  render() {
    return (
      <Card title={this.displayName} source="src/views/Demo/IncrementAmount.js">
        <p>
          This component increments <strong>amount</strong> in store
        </p>
        <Button variant="contained" color="primary" onClick={this.increment}>
          click to Increment amount
        </Button>
      </Card>
    )
  }
}

export default withStore(IncrementAmount)
