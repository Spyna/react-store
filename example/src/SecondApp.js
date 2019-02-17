import React from 'react'
import Card from './layout/CodeCard'
import { withStore, createStore } from '@spyna/react-store'

class MyComponent extends React.Component {
  componentWillMount() {
    this.props.store.set('amount', 10)
  }

  render() {
    return (
      <Card title="This component uses a different store">
        <p>Amount {this.props.store.get('amount')}</p>
        <p>
          This component is defined in the file <code>SecondApp.js</code>
        </p>
      </Card>
    )
  }
}

const WithStore = withStore(MyComponent)

const MyApp = props => (
  <section className="section-secondary">
    <h1 className="h2">createStore(SecondApp)</h1>
    <div className="row">
      <WithStore />
    </div>
  </section>
)

export default createStore(MyApp, {}, { debug: true })
