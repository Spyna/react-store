import React from 'react'
import Card from './layout/Card'
import { withStore } from '@spyna/react-store'

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
      <Card title={this.displayName}>
        <p>set / remove data in store</p>
        <form onSubmit={this.updatestore}>
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
          <ul className="card-actions">
            <li>
              <button className="button-primary" type="submit">
                set value
              </button>
            </li>
            <li>
              <button className="button-danger" onClick={this.delete}>
                delete value
              </button>
            </li>
          </ul>
        </form>
      </Card>
    )
  }
}

export default withStore(SetDataInstore)
