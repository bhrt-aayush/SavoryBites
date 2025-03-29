import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets.js";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(null);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);

    const addToCart = (itemId) => {
        if (!token) {
            setShowLoginPrompt(true);
            return;
        }
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

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/api/user/login', { email, password });
            const { token } = response.data;
            setToken(token);
            localStorage.setItem('token', token);
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
    };

    const register = async (name, email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/api/user/register', { name, email, password });
            const { token } = response.data;
            setToken(token);
            localStorage.setItem('token', token);
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Registration failed' };
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        userInfo,
        setUserInfo,
        token,
        login,
        register,
        logout,
        user,
        showLoginPrompt,
        setShowLoginPrompt
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
