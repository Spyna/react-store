import React from 'react'
import Card from '../../layout/CodeCard'
import { withStore } from '@spyna/react-store'

class GetDataFromStore extends React.Component {
  displayName = 'GetDataFromStore'
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
      <Card
        title={this.displayName}
        source="src/views/Demo/GetDataFromStore.js"
      >
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
          The value is:
          <pre className="language-js">
            <code className="language-js">{value || 'undefined'}</code>
          </pre>
        </form>
      </Card>
    )
  }
}

export default withStore(GetDataFromStore)
