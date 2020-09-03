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
                  className='font-weight-normal'
                  style={{
                    color: `${theme.palette.secondary.main}`,
                    textShadow: '1px 1px 3px yellow',
                    fontFamily: 'Bungee Inline'
                  }}>
                  LUNA'S SPORTS STORE
                </h1>
              </div>
            </div>
          </div>
          <div className='row'>
          <div className='container bg-warning mt-3' style={{boxShadow: '1px 1px 20px #000'}}>
               <h3>Almost there! Just fill out your delivery info and we will ship your product to you as soon as possible!</h3>
              </div> 
            <div className='col m-5 text-white'>
              <div
                className='container m-auto bg-success w-50'
                style={{ boxShadow: '1px 1px 20px #000' }}>
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
        </div>
      </ThemeProvider>
    )
  }
}
