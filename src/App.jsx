import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import LeaderBoard from './pages/LeaderBoard'
import Stats from './pages/Stats'
import Home from './components/Home'
import Navbar from './components/navbar' // Import Navbar

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(true)

  return (
    <div>
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> {/* Pass setLoggedIn */}
        <Routes>
          <Route index element={<Landing loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path='/landing' element={<Landing loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />  
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='/home' element={<Home loggedIn={loggedIn} />} />

          {loggedIn ? (
            <Route path='/stats' element={<Stats />} />
          ) : (
            <Route path='/stats' element={<Navigate to='/login' />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
