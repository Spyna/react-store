import React from 'react'

import { withStore } from 'spyna-react-store'

class SetDataInstore extends React.Component {
  state = { key: 'mystoreKey', value: 'MystoreValue' }
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
      <div className="component component4">
        <h2>{this.constructor.name}.js</h2>
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
          <br />
          <button type="submit">set value</button> or{' '}
          <button onClick={this.delete}>delete value</button>
        </form>
      </div>
    )
  }
}

export default withStore(SetDataInstore)
