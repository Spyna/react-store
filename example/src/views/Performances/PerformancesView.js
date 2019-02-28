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
        <p>
          When you click the <code>+</code> button you will see in the console{' '}
          two logs: one for the action and the other for the render.
          <br />
          <strong>Redux</strong>: the first log is faster, but the you have to{' '}
          wait for the Component to re-render. So the total timing is{' '}
          <em>Action</em> + <em>Render</em>.<br />
          <strong>React-store</strong>: the first and the second log arrives at{' '}
          the almost same instant. Because the <em>Action</em> end after the{' '}
          Component <em>Render</em>. So the total timing is <em>Action</em> ={' '}
          <em>Render</em>
        </p>
        <WithRedux />
        <WithReactStore />
      </Paper>
    )
  }
}

export default View
