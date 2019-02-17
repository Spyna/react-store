import React from 'react'
import Card from '../../layout/CodeCard'
import { withStore } from '@spyna/react-store'

class NotPermittedOperations extends React.Component {
  displayName = 'NotPermittedOperations'
  componentDidMount() {
    const { store } = this.props
    store.set = `try to override 'set' method`
    store.get = `try to override 'get' method`
    store.remove = `try to override 'remove' method`
    store.getState().property = 'try to override a prop'
    store.get = () => {
      console.log('try to override `get` method with a function')
    }
    store.someProp = () => {} //try to set a property of the store
    delete store.set //try do delete a property from the store
  }

  render() {
    return (
      <Card
        title={this.displayName}
        source="src/views/Demo/NotPermittedOperions.js"
      >
        <div>
          <p>
            Open the developer console (hit <i>F12</i>) and look at the
            messages.
          </p>
          <p>This component tries to do not permitted operations, such as:</p>
          <pre className="language-js">
            <code className="language-js">
              store.set = `try to override 'set' method`{`\n`}
              store.get = `try to override 'get' method`{`\n`}
              store.remove = `try to override 'remove' method`{`\n`}
              delete store.set
            </code>
          </pre>
        </div>
      </Card>
    )
  }
}

export default withStore(NotPermittedOperations)
