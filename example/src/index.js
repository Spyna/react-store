import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'

import { withStore, createStore } from '@spyna/react-store'

class MyComponent extends Component {
  componentWillMount() {
    this.props.store.set('amount', 10)
  }

  render() {
    return (
      <div className="container">
        <div className="component component2">
          <h2>This component uses a different store</h2>
          <p>Amount {this.props.store.get('amount')}</p>
          <p>
            This component is defined in the file <code>index.js</code>
          </p>
        </div>
      </div>
    )
  }
}

const WithStore = withStore(MyComponent)

const MyApp = props => (
  <div>
    <WithStore />
  </div>
)

const CreateStore = createStore(MyApp, {}, { debug: true })
ReactDOM.render(
  <React.Fragment>
    <App />
    <hr />
    <CreateStore />
  </React.Fragment>,
  document.getElementById('root')
)
