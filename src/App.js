import React, { Component } from 'react'
import { SportsStoreDataStore } from './data/DataStore'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { ShopConnector } from './shop/ShopConnector'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './theme'

export default class App extends Component {
  render() {
    return (
      <Provider store={SportsStoreDataStore}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path='/shop' component={ShopConnector} />
              <Redirect to='/shop' />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
}
