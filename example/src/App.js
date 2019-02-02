import React, { Component } from 'react'
import { createStore } from '@spyna/react-store'

import DisplayAmount from './DisplayAmount'
import IncrementAmount from './IncrementAmount'
import DecrementAmount from './DecrementAmount'
import SetDataInStore from './SetDataInStore'
import GetDataFromStore from './GetDataFromStore'
import NotPermittedOperations from './NotPermittedOperations'

class App extends Component {
  render() {
    return (
      <section>
        <h2>DEMO</h2>
        <section className="section-secondary">
          <h1 className="h2">createStore(App)</h1>
          <p>
            The demo demostrate that you can access the data stored in the{' '}
            <strong>Store</strong> from any <em>Component</em> in the App. The
            boxes you see below are differents <em>React Components</em>.
          </p>
          <div className="row">
            <DisplayAmount />
            <div className="col col-md-6">
              <IncrementAmount />
              <DecrementAmount />
            </div>
            <SetDataInStore />
            <GetDataFromStore />
            <NotPermittedOperations />
          </div>
        </section>
      </section>
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

export default createStore(App, initialValue)
