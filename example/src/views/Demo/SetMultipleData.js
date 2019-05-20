import React from 'react'
import Card from '../../layout/CodeCard'
import { withStore } from '@spyna/react-store'
import Button from '@material-ui/core/Button'

const number = 3

const keys = Array.from(Array(number))

class SetDataInstore extends React.Component {
  constructor() {
    super()
    const state = {}
    keys.forEach((key, index) => {
      state[`key-${index}`] = index
    })
    this.state = state
  }

  displayName = 'SetMultipleData'

  updatestore = e => {
    e.preventDefault()
    const { store } = this.props
    const propertiesToSet = []
    Object.keys(this.state).forEach(key => {
      propertiesToSet.push({ key: key, value: this.state[key] })
    })
    store.setAll(...propertiesToSet)
  }

  update = e => {
    const state = {}
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  render() {
    return (
      <Card title={this.displayName} source="src/views/Demo/SetMultipleData.js">
        <p>
          set multiple data at once, using an object in the form{' '}
          <code className="language-javascript">{`{ key : 'some-key', value : 'a value' }`}</code>
          .
        </p>
        <pre>
          <code className="language-javascript">
            {`store.setAll(
        {key: 'key-1', value: 'value'}, 
        {key: 'key-2', value: 'value'}
            )`}
          </code>
        </pre>
        <form onSubmit={this.updatestore}>
          {keys.map((n, index) => (
            <p key={`multiple-${index}`}>
              <label>key {index}: </label>
              <input
                type="text"
                onChange={this.update}
                name={`key-${index}`}
                placeholder="store key"
                value={this.state[`key-${index}`]}
                autoComplete="false"
              />
            </p>
          ))}
          <Button variant="contained" color="primary" type="submit">
            set values
          </Button>{' '}
        </form>
      </Card>
    )
  }
}

export default withStore(SetDataInstore)
