import React from 'react'
import Header from './Header';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from "react-router-dom"
import "./Payment.css"


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

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
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment