import React from 'react'
import Card from '../../layout/CodeCard'
import { withStore } from '@spyna/react-store'
import Button from '@material-ui/core/Button'

class SetDataInstore extends React.Component {
  displayName = 'SetDataInStore'
  state = { key: 'myStoreKey', value: 'MystoreValue' }
  updatestore = e => {
    e.preventDefault()
    const { store } = this.props
    const { key, value } = this.state
    store.set(key, value)
  }

  update = e => {
    const state = {}
    state[e.target.name] = e.target.value
    this.setState(state)
  }
  delete = e => {
    e.preventDefault()
    e.stopPropagation()
    const { store } = this.props
    const { key } = this.state
    store.remove(key)
  }

  render() {
    const { key, value } = this.state
    return (
      <Card title={this.displayName} source="src/views/Demo/SetDataInStore.js">
        <p>set / remove data in store</p>
        <form onSubmit={this.updatestore}>
          <p>
            <label>key: </label>
            <input
              type="text"
              onChange={this.update}
              name="key"
              placeholder="store key"
              value={key}
              autoComplete="false"
            />
            <br />
            <label>value: </label>
            <input
              type="text"
              onChange={this.update}
              name="value"
              placeholder="try new Date()"
              value={value}
              autoComplete="false"
            />
          </p>
          <Button variant="contained" color="primary" type="submit">
            set value
          </Button>{' '}
          <Button variant="contained" color="primary" onClick={this.delete}>
            delete value
          </Button>
        </form>
      </Card>
    )
  }
}

export default withStore(SetDataInstore)
