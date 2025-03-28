import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import StoreContextProvider from './context/StoreContext';
import Checkout from './pages/Confirm/Confirm';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  // const [showSignup, setShowSignup] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <> </>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <StoreContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/placeorder' element={<PlaceOrder />} />
            <Route path='/order' element={<Checkout />} />
          </Routes>
        </StoreContextProvider>
      </div>
      <Footer />
    </>

  );
};

export default App;
