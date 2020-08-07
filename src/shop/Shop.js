import React, { Component } from 'react'
import { CategoryNavigation } from './CategoryNavigation'
import { ProductList } from './ProductList'
import { CartSummary } from './CartSummary'
import { ProductPageConnector } from './ProductPageConnector'
import { PaginationControls } from '../PaginationControls'

const ProductPages = ProductPageConnector(PaginationControls)

export class Shop extends Component {
  handleAddToCart = (...args) => {
    this.props.addToCart(...args)
    this.props.history.push('/shop/cart')
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div
            className='col bg-dark text-white'
            style={{
              background: 'linear-gradient(180deg, #08023e 0%, #222aaa 100%)'
            }}>
            <div className='navbar-brand'>SPORTS STORE</div>
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
    )
  }
}
