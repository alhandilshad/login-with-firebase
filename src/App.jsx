import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './signUp';
import SignIn from './signIn';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;