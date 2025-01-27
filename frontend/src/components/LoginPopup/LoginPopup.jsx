import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/frontend_assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Login');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
        setShowLogin(false);
    };

    return (
        <div className='login-popup'>
            <form onSubmit={handleSubmit} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img 
                        onClick={() => setShowLogin(false)} 
                        src={assets.cross_icon} 
                        alt="Close" 
                        className="close-icon"
                    />
                </div>
                
                <div className="login-popup-inputs">
                    {currentState === 'Sign Up' && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="submit-btn">
                    {currentState === 'Login' ? 'Login' : 'Create Account'}
                </button>

                <div className="terms-checkbox">
                    <input type="checkbox" required id="terms" />
                    <label htmlFor="terms">
                        I agree to the terms and privacy policy
                    </label>
                </div>

                <div className="state-toggle">
                    {currentState === 'Login' ? (
                        <p>
                            Don't have an account?{' '}
                            <span onClick={() => setCurrentState('Sign Up')}>
                                Sign Up
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{' '}
                            <span onClick={() => setCurrentState('Login')}>
                                Login
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;