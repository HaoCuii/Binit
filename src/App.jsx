import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/landing' element={<Landing />} />  
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
