import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CartDetailsRows } from './CartDetailsRows'
import { CartSummary } from './CartSummary'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../theme'

export class CartDetails extends Component {
  getLinkClasses = () => `btn btn-secondary m-1
  ${this.props.cartItems === 0 ? 'disabled' : ''}`
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <div
            className='col text-white'
            style={{
              background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`
            }}>
            <div className='navbar-brand'>SPORTS STORE</div>
            <CartSummary {...this.props} />
          </div>
          <div className='m-3'>
            <h2 className='text-center'>Your Cart</h2>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Product</th>
                  <th className='text-right'>Price</th>
                  <th className='text-right'>SubTotal</th>
                </tr>
              </thead>
              <tbody>
                <CartDetailsRows
                  cart={this.props.cart}
                  cartPrice={this.props.cartPrice}
                  updateQuantity={this.props.updateCartQuantity}
                  removeFromCart={this.props.removeFromCart}
                />
              </tbody>
            </table>
            <div className='text-center'>
              <Link
                className='btn btn-primary m-1'
                style={{
                  background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`
                }}
                to='/shop'>
                Continue Shopping
              </Link>
              <Link
                className={this.getLinkClasses()}
                style={{
                  background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`
                }}
                to='/shop/checkout'>
                Checkout
              </Link>
            </div>
          </div>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
