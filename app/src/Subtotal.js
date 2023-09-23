import React from 'react'
import "./Checkout.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider" 
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {

  const navigate = useNavigate();
  const [{ basket }] = useStateValue();


  return (
    <div id="subtotal">
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({ basket.length } items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal