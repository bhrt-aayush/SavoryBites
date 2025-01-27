import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {/* Check if food_list and cartItems are valid */}
        {food_list.length > 0 && Object.keys(cartItems).length > 0 ? (
          food_list.map((item) => {
            const quantity = cartItems[item._id]; // Get quantity from cartItems
            if (quantity > 0) {
              return (
                <div key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={`${url}/images/${item.image}`} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{quantity}</p>
                    <p>${item.price * quantity}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cross"
                      role="button"
                      aria-label={`Remove ${item.name}`}
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button
            onClick={() => navigate('/order')}
            disabled={getTotalCartAmount() === 0}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-suggestion">
          <div>
            <p>If you have a suggestion, enter it here</p>
            <div className="cart-suggestion-input">
              <input type="text" placeholder="Suggestion" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
