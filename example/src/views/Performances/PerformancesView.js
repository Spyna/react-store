import React from 'react'
import Paper from '@material-ui/core/Paper'

import WithReactStore from './ReactStore'
import WithRedux from './ReactRedux'

class View extends React.Component {
  render() {
    return (
      <Paper>
        <h2>Performances</h2>
        <p>
          Open the <strong>devTools</strong> (<code>F12</code>) and click on the{' '}
          <em>
            <code>+</code>
          </em>{' '}
          button.
        </p>
        <WithRedux />
        <WithReactStore />
      </Paper>
    )
  }
}

export default View
