import { createMuiTheme } from '@material-ui/core/styles'

const specs = {
  palette: {
    primary: {
      light: '#5c93ff',
      main: '#0066cc',
      dark: '#003399',
      contrastText: '#fff'
    },
    secondary: {
      light: '#333',
      main: '#222',
      dark: '#111',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
    headline: {
      fontSize: 36
    }
  }
}

export default createMuiTheme(specs)
