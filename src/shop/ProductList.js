import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../theme'
export class ProductList extends Component {
  render() {
    if (this.props.products == null || this.props.products.length === 0) {
      return <h5 className='p-2'>No Products</h5>
    }
    return this.props.products.map((p) => (
      <ThemeProvider theme={theme}>
        <div className='card m-3 p-1 bg-light shadow-sm' key={p.id}>
          <h3 style={{ color: `${theme.palette.secondary.contrastText}` }}>
            {p.name}
            <span className='badge badge-pill badge-warning float-right'>
              ${p.price.toFixed(2)}
            </span>
          </h3>
          <div className='card-text bg-white p-1'>
            {p.description}
            <button
              className='btn btn-sm text-white float-right'
              style={{
                background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`
              }}
              onClick={() => this.props.addToCart(p)}>
              Add To Cart
            </button>
          </div>
        </div>
      </ThemeProvider>
    ))
  }
}
