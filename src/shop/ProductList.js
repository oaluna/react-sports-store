import React, { Component } from 'react'

export class ProductList extends Component {
  render() {
    if (this.props.products == null || this.props.products.length === 0) {
      return <h5 className='p-2'>No Products</h5>
    }
    return this.props.products.map((p) => (
      <div className='card m-1 p-1 bg-light' key={p.id}>
        <h4>
          {p.name}
          <span
            className='badge badge-pill float-right'
            style={{
              background: 'radial-gradient(circle, #fffffa 0%, #fff000 100%)'
            }}>
            ${p.price.toFixed(2)}
          </span>
        </h4>
        <div className='card-text bg-white p-1'>
          {p.description}
          <button
            className='btn btn-sm text-white float-right'
            style={{
              background: 'radial-gradient(circle, #557c93 0%,  #08023e 100%)'
            }}
            onClick={() => this.props.addToCart(p)}>
            Add To Cart
          </button>
        </div>
      </div>
    ))
  }
}
