import React, { useContext } from 'react'
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form  className="place-order">
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName'  type="text" placeholder='First Name'/>
          <input required name='lastName'   type="text" placeholder='Last Name'/>
        </div>
        <input required name='email'  type="email" placeholder='Email address'/>
        <input required name='street' type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input required name='city'   type="text" placeholder='City'/>
          <input required name='state' type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input required name='zipcode'  type="text" placeholder='Zip code'/>
          </div>
        <input required name='phone' type="text" placeholder='Phone' />
       </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
            <p>Subtotal</p>
            <p>रु{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>रु{getTotalCartAmount()===0?0:50}</p>
            </div>
            <div className="cart-total-details">
            <b>Total:</b>
            <b>रु{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder