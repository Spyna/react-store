import React from 'react'
import ReactDOM from 'react-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'
import Reboot from '@material-ui/core/CssBaseline'

import theme from './theme'

import './index.css'
import App from './App'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Reboot>
      <App />
    </Reboot>
  </MuiThemeProvider>,
  document.getElementById('root')
)
