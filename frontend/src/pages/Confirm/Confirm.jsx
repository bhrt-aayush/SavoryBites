import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Confirm.css';

const Checkout = () => {
    const { userInfo, getTotalCartAmount, cartItems, food_list } = useContext(StoreContext);

    return (
        <div className="checkout-container">
            <h2>Order Summary</h2>

            <div className="checkout-delivery-info">
                <h3>Delivery Information</h3>
                <p><b>Name:</b> {userInfo.firstName} {userInfo.lastName}</p>
                <p><b>Email:</b> {userInfo.email}</p>
                <p><b>Address:</b> {userInfo.street}, {userInfo.city}, {userInfo.zipcode}</p>
                <p><b>Phone:</b> {userInfo.phone}</p>
                <p><b>Suggestion:</b> {userInfo.suggestion}</p>
            </div>

            <div className="checkout-payment-summary">
                <h3>Payment Summary</h3>
                <p><b>Subtotal:</b> रु{getTotalCartAmount()}</p>
                <p><b>Delivery Fee:</b> रु{getTotalCartAmount() === 0 ? 0 : 50}</p>
                <p><b>Total:</b> रु{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</p>
            </div>

            <div className="checkout-cart-items">
                <div className="cart-items-header">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Description</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                <br />
                <hr />

                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className="cart-items-header cart-items-row">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>रु{item.price}</p>
                                    <p>{item.description}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>रु{item.price * cartItems[item._id]}</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            <button className="checkout-confirm-btn">Confirm Order</button>
        </div>
    );
};

export default Checkout;
