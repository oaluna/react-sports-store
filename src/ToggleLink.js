import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './theme'

export class ToggleLink extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Route
          path={this.props.to}
          exact={this.props.exact}
          children={(routeProps) => {
            const baseClasses = this.props.className || 'm-2 btn btn-block'
            const activeClass = this.props.activeClass || 'btn-primary'
            const inActiveClass = this.props.inActiveClass || 'btn-secondary'

            const combinedClasses = `${baseClasses} ${
              routeProps.match ? activeClass : inActiveClass
            }`

            return (
              <Link
                to={this.props.to}
                className={combinedClasses}
                style={{
                  background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`
                }}>
                {this.props.children}
              </Link>
            )
          }}
        />
      </ThemeProvider>
    )
  }
}
