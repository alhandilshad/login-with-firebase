import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './signUp';
import SignIn from './signIn';
import Home from './Home';
import ViewPosts from './viewPosts';
import NewPost from './newPost';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/viewPosts' element={<ViewPosts />} />
        <Route path='/newPost' element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;