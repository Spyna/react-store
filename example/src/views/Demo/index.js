import React from 'react'
import { createStore } from '@spyna/react-store'
import DisplayAmount from './DisplayAmount'
import IncrementAmount from './IncrementAmount'
import DecrementAmount from './DecrementAmount'
import SetDataInStore from './SetDataInStore'
import GetDataFromStore from './GetDataFromStore'
import NotPermittedOperations from './NotPermittedOperations'
import asCard from '../../layout/asCard'
import SetMultipleData from './SetMultipleData'

class Demo extends React.Component {
  render() {
    return (
      <section className="section-secondary">
        <h1 className="h2">createStore(App)</h1>
        <p>
          The demo demostrate that you can access the data stored in the{' '}
          <strong>Store</strong> from any <em>Component</em> in the App. The
          boxes you see below are differents <em>React Components</em>.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }}
        >
          <DisplayAmount />
          <div className="col  col-sm-12 col-md-6">
            <IncrementAmount />
            <DecrementAmount />
          </div>
          <SetDataInStore />
          <SetMultipleData />
          <GetDataFromStore />
          <NotPermittedOperations />
        </div>
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

const config = {}

export default asCard('Demo', createStore(Demo, initialValue, config))
