import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './theme'

export class PaginationButtons extends Component {
  getPageNumbers = () => {
    if (this.props.pageCount < 4) {
      return [...Array(this.props.pageCount + 1).keys()].slice(1)
    } else if (this.props.currentPage <= 4) {
      return [1, 2, 3, 4, 5]
    } else if (this.props.currentPage > this.props.pageCount - 4) {
      return [...Array(5).keys()].reverse().map((v) => this.props.pageCount - v)
    } else {
      return [
        this.props.currentPage - 1,
        this.props.currentPage,
        this.props.currentPage + 1
      ]
    }
  }

  render() {
    const current = this.props.currentPage
    const pageCount = this.props.pageCount
    const navigate = this.props.navigate
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <button
            onClick={() => navigate(current - 1)}
            disabled={current === 1}
            className='btn text-white btn-secondary mx-1'
            style={{
              background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`
            }}>
            Previous
          </button>
          {current > 4 && (
            <React.Fragment>
              <button
                className='btn text-white mx-1'
                onClick={() => navigate(1)}
                style={{
                  background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`
                }}>
                1
              </button>
              <span className='h4'>...</span>
            </React.Fragment>
          )}
          {this.getPageNumbers().map((num) => (
            <button
              className={`btn mx-1  text-white`}
              onClick={() => navigate(num)}
              style={{
                background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`
              }}
              key={num}>
              {num}
            </button>
          ))}
          {current <= pageCount - 4 && (
            <React.Fragment>
              <span className='h4'>...</span>
              <button
                className='btn text-white mx-1'
                onClick={() => navigate(pageCount)}
                style={{
                  background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`
                }}>
                {pageCount}
              </button>
            </React.Fragment>
          )}
          <button
            onClick={() => navigate(current + 1)}
            disabled={current === pageCount}
            className='btn btn-secondary text-white mx-1'
            style={{
              background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`
            }}>
            Next
          </button>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
