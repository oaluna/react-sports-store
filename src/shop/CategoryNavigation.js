import React, { Component } from 'react'
import { ToggleLink } from '../ToggleLink'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../theme'

export class CategoryNavigation extends Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <ToggleLink to={`${this.props.baseUrl}/all`} exact={false}>
            All
          </ToggleLink>
          {this.props.categories &&
            this.props.categories.map((cat) => (
              <ToggleLink
                key={cat}
                to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                {cat}
              </ToggleLink>
            ))}
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
