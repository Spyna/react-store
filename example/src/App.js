import React, { Component } from 'react'
import { createStore } from 'spyna-react-store'

import DisplayAmount from './DisplayAmount'
import IncrementAmount from './IncrementAmount'
import DecrementAmount from './DecrementAmount'
import SetDataInStore from './SetDataInStore'
import GetDataFromStore from './GetDataFromStore'
import NotPermittedOperations from './NotPermittedOperations'

class App extends Component {
  render() {
    return (
      <div className="container">
        <DisplayAmount />
        <IncrementAmount />
        <DecrementAmount />
        <SetDataInStore />
        <GetDataFromStore />
        <NotPermittedOperations />
      </div>
    )
  }
}

const initialValue = {
  amount: 15,
  username: {
    name: 'spyna',
    url: 'https://spyna.it'
  }
}

const config = {
  debug: true
}

export default createStore(App, initialValue, config)
