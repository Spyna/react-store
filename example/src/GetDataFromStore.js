import React from 'react'

import { withStore } from 'spyna-react-store'

class GetDataFromStore extends React.Component {
  state = { key: 'myStoreKey' }
  getFromStore = e => {
    e.preventDefault()
    const { key } = this.state
    this.setState({ value: this.props.store.get(key) })
  }

  update = e => {
    const state = {}
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  render() {
    const { key } = this.state
    const value = this.props.store.get(key)
    return (
      <div className="component component5">
        <h2>{this.constructor.name}.js</h2>
        <p>get data from store</p>
        <form onSubmit={this.getFromStore}>
          key:{'  '}
          <input
            type="text"
            onChange={this.update}
            name="key"
            placeholder="store key"
            value={key}
            autoComplete="false"
          />
          <br />
          The value is:
          <br />
          <span className="display-value">{value || 'undefined'}</span>
        </form>
      </div>
    )
  }
}

export default withStore(GetDataFromStore)
