import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import SecondApp from './SecondApp'

ReactDOM.render(
  <React.Fragment>
    <App />
    <hr />
    <SecondApp />
  </React.Fragment>,
  document.getElementById('root')
)
