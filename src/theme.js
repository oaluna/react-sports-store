import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9d0208',
      main: '#6a040f',
      dark: '#370617',
      contrastText: '#eadeda'
    },
    secondary: {
      light: '#f48c06',
      main: '#e85d04',
      dark: '#dc2f02',
      contrastText: '#1a3a3a'
    },
    openTitle: '#9eb2a6',
    protectedTitle: blueGrey['900'],
    type: 'light'
  }
})
