import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CartDetailsRows } from './CartDetailsRows'
import { CartSummary } from './CartSummary'

export class CartDetails extends Component {
  getLinkClasses = () => `btn btn-secondary m-1
  ${this.props.cartItems === 0 ? 'disabled' : ''}`
  render() {
    return (
      <React.Fragment>
        <div
          className='col bg-dark text-white'
          style={{
            background: 'linear-gradient(180deg, #08203E 0%, #557C93 100%)'
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
            <Link className='btn btn-primary m-1' to='/shop'>
              Continue Shopping
            </Link>
            <Link className={this.getLinkClasses()} to='/shop/checkout'>
              Checkout
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
