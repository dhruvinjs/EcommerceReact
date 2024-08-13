import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {HomePage} from './Components/Home';
import Cart from './Components/Cart';
import SignIn from './Components/SIgnIn';
import SignUp from './Components/SignUp';
import Checkout from './Components/CheckOut';
import { Upiform } from './Components/Upiform';
import DummyPayment from './Components/DummyPayment';
import PaymentSuccess from './Components/PaymentSuccess';






function App() {

  return (    
  <>
 <BrowserRouter>
      <Routes>
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path="/SignIN" element={<SignIn />} />
        <Route path='/' element={<SignUp/>}/>
        <Route path="/Products" element={<HomePage />} />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Upi' element={<Upiform/>}/>
        <Route path='/Dummy' element={<DummyPayment/>}/>
        <Route path='/PaymentSuccess' element={<PaymentSuccess/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
