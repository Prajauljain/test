// Batching ==> Jab bht saare function state change karne wale hote haii aur same time pr trigger ho tb batching hojaati hai means saare state change funtion 
//  ko ek saath maan liya jaata haii
import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

