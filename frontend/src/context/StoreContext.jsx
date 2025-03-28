import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [userInfo, setUserInfo] = useState({}); // Store user info

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0,
        }));
    };

    const getTotalCartAmount = () => {
        return Object.entries(cartItems).reduce((total, [id, qty]) => {
            const item = food_list.find((product) => product._id === id);
            return item ? total + item.price * qty : total;
        }, 0);
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        userInfo,
        setUserInfo, // Function to update user info
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
