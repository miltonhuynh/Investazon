import React, { useEffect, useState } from 'react'
import Header from './Header';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from "react-router-dom"
import "./Payment.css"
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer';
import axios from 'axios';



function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeded, setSucceded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })
    }
    getClientSecret()
  }, [basket])


  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    // const payload = await stripe
  }

  const handleChange = e => {
    // changed event to e
    setDisabled(e.empty)
    setError(e.error ? e.error.message : "")
  }

  return (
    <>
      <Header />
      <div id="paymentPage">
        <div className="paymentContainer">
          <h1>
            Checkout (
            <Link to="/checkout">{basket?.length} items</Link>
            )
          </h1>
          <div className="paymentSection">
            <div className="paymentTitle">
              <h3>Delivery Address</h3>
            </div>
            <div className="paymentAddress">
              <p>{user?.email}</p>
              <p>123 Test St.</p>
              <p>Test Angeles, TS</p>
            </div>
          </div>
          <div className="paymentSection">
            <div className="paymentTitle">
              <h3>Review items and delivery</h3>
            </div>
            <div className="paymentItems">
              {basket.map(item => (
                <CheckoutProduct
                  company={item.company}
                  ticker={item.ticker}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          </div>
          <div className="paymentSection">
            <div className="paymentTitle">
              <h3>Payment Method</h3>
            </div>
            <div className="paymentDetails">
              {/* Stripe */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="paymentPriceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>Order Total: {value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment