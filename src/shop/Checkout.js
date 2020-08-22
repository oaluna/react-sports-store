import React, { Component } from 'react'
import { ValidatedForm } from '../forms/ValidatedForm'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../theme'

export class Checkout extends Component {
  constructor(props) {
    super(props)
    this.defaultAttrs = { type: 'text', required: true }
    this.formModel = [
      { label: 'Name' },
      { label: 'Email', attrs: { type: 'email' } },
      { label: 'Address' },
      { label: 'City' },
      { label: 'Zip/Postal Code', name: 'zip' },
      { label: 'Country' }
    ]
  }

  handleSubmit = (formData) => {
    const order = {
      ...formData,
      products: this.props.cart.map((item) => ({
        quantity: item.quantity,
        product_id: item.product.id
      }))
    }
    this.props.placeOrder(order)
    this.props.clearCart()
    this.props.history.push('/shop/thanks')
  }

  handleCancel = () => {
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
              <div
                className='navbar-brand'
                style={{ fontFamily: 'Bungee Inline' }}>
                <h1
                  className='font-weight-bold'
                  style={{
                    color: `${theme.palette.secondary.main}`,
                    textShadow: '1px 1px 4px yellow',
                    fontFamily: 'Bungee Inline'
                  }}>
                  SPORTS STORE
                </h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col m-2 text-white'>
              <ValidatedForm
                formModel={this.formModel}
                defaultAttrs={this.defaultAttrs}
                submitCallback={this.handleSubmit}
                cancelCallback={this.handleCancel}
                submitText='Place Order'
                cancelText='Return to Cart'
              />
            </div>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}
