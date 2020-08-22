import React, { Component } from 'react'
import { CategoryNavigation } from './CategoryNavigation'
import { ProductList } from './ProductList'
import { CartSummary } from './CartSummary'
import { ProductPageConnector } from './ProductPageConnector'
import { PaginationControls } from '../PaginationControls'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../theme'

const ProductPages = ProductPageConnector(PaginationControls)

export class Shop extends Component {
  handleAddToCart = (...args) => {
    this.props.addToCart(...args)
    this.props.history.push('/shop/cart')
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className='container-fluid'>
          <div className='row'>
            <div
              className='col bg-dark text-white'
              style={{
                background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`
              }}>
              <div className='navbar-brand'>
                <h1
                  className='font-weight-bold'
                  style={{
                    color: `${theme.palette.secondary.main}`,
                    textShadow: '1px 1px 4px yellow',
                    fontFamily: 'Bungee Inline'
                  }}>
                  SPORTS STORE
                </h1>{' '}
              </div>
              <CartSummary {...this.props} />
            </div>
          </div>
          <div className='row'>
            <div className='col-3 p-2'>
              <CategoryNavigation
                baseUrl='/shop/products'
                categories={this.props.categories}
              />
            </div>
            <div className='col-9 p-2'>
              <ProductPages />
              <ProductList
                products={this.props.products}
                addToCart={this.handleAddToCart}
              />
            </div>
          </div>
        </div>
        <footer className='text-center'>
          <p>
            Icons courtesy of <a href='https://flaticon.com'>Flaticon.com</a>
          </p>
        </footer>
      </ThemeProvider>
    )
  }
}
