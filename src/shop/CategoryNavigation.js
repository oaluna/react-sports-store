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
              className='text-center p-auto m-auto'
              style={{
                fontFamily: 'Bungee Inline',
                color: `${theme.palette.primary.light}`,
                textShadow: `0px 0px 3px #fff`
              }}>
              Categories
            </h1>
          </header>

          <ToggleLink to={`${this.props.baseUrl}/all`} exact={false}>
            <h2
              style={{
                fontFamily: 'Bungee Inline',
                color: `${theme.palette.openTitle}`
              }}>
              All
            </h2>
          </ToggleLink>
          {this.props.categories &&
            this.props.categories.map((cat) => (
              <ToggleLink
                key={cat}
                to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                <h2
                  style={{
                    fontFamily: 'Bungee Inline',
                    color: `${theme.palette.openTitle}`
                  }}>
                  {cat}
                </h2>
              </ToggleLink>
            ))}
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
