import React, { Component } from 'react'
import { ToggleLink } from '../ToggleLink'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../theme'

export class CategoryNavigation extends Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <header className='row'>
            <h1
              className='text-center px-auto mx-auto'
              style={{
                fontFamily: 'Bungee Inline',
                color: `${theme.palette.primary.dark}`,
                textShadow: `0px 1px 2px ${theme.palette.secondary.light}`
              }}>
              Categories
            </h1>
          </header>

          <ToggleLink to={`${this.props.baseUrl}/all`} exact={false}>
            <h3
              style={{
                fontFamily: 'Bungee Inline',
                color: `${theme.palette.openTitle}`
              }}>
              All
            </h3>
          </ToggleLink>
          {this.props.categories &&
            this.props.categories.map((cat) => (
              <ToggleLink
                key={cat}
                to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                <h3
                  style={{
                    fontFamily: 'Bungee Inline',
                    color: `${theme.palette.openTitle}`
                  }}>
                  {cat}
                </h3>
              </ToggleLink>
            ))}
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
