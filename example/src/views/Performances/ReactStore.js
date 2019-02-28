import React from 'react'
import { createStore, withStore } from '@spyna/react-store'
import DisplayComponent from './DisplayComponent'
import Ul from './Ul'
import demoData from './demoData'
import Card from '../../layout/CodeCard'

import Log from './Log'

const log = new Log('React-store')

class DisplayThings extends React.Component {
  componentDidUpdate() {
    const end = new Date().getTime()
    log.logRender(this.start, end)
  }

  componentWillMount() {
    this.start = new Date().getTime()
  }

  componentDidMount() {
    const end = new Date().getTime()
    log.logRender(this.start, end)
  }

  render() {
    const { store } = this.props
    const amounts = Object.keys(store.getState())
    const increment = id => {
      const start = new Date().getTime()
      this.start = start
      const dataInStore = store.get(id)
      dataInStore.amount++
      store.set(id, dataInStore).then(() => {
        const end = new Date().getTime()
        log.logAction(start, end)
      })
    }
    return (
      <Card
        fullLength
        title="With react-store"
        source="src/views/Performances/ReactStore.js"
      >
        <Ul>
          {amounts.map(id => (
            <DisplayComponent
              datum={store.get(id)}
              key={`react-store-${id}`}
              onClick={increment}
            />
          ))}
        </Ul>
      </Card>
    )
  }
}

class ReactStore extends React.PureComponent {
  // class ReactStore extends React.Component {
  render() {
    const WithStore = withStore(DisplayThings)
    return <WithStore />
  }
}

export default createStore(ReactStore, { ...demoData() })
