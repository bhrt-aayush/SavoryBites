import React, { useContext, useState } from 'react'
import './LoginPopup.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Login');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { login, register } = useContext(StoreContext);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            if (currentState === 'Login') {
                const result = await login(formData.email, formData.password);
                if (result.success) {
                    setShowLogin(false);
                } else {
                    setError(result.message);
                }
            } else {
                const result = await register(formData.name, formData.email, formData.password);
                if (result.success) {
                    setShowLogin(false);
                } else {
                    setError(result.message);
                }
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    }
    
    return (
        <div className='login-popup'>
            <form onSubmit={handleSubmit} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                
                <div className="login-popup-inputs">
                    {currentState === 'Sign Up' && (
                        <input 
                            name='name' 
                            onChange={onChangeHandler} 
                            value={formData.name} 
                            type="text" 
                            placeholder='Your name' 
                            required 
                        />
                    )}
                    <input 
                        name='email' 
                        onChange={onChangeHandler} 
                        value={formData.email} 
                        type="email" 
                        placeholder='Your email' 
                        required 
                    />
                    <input 
                        name='password' 
                        onChange={onChangeHandler} 
                        value={formData.password} 
                        type="password" 
                        placeholder='Password' 
                        required 
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type='submit' className="submit-btn">
                    {currentState === 'Sign Up' ? 'Create account' : 'Login'}
                </button>
                
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                
                {currentState === 'Login' ? (
                    <p>Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;