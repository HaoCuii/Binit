import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import LeaderBoard from './pages/LeaderBoard'
import Stats from './pages/Stats'

const App = () => {

    const [loggedIn, setLoggedIn] = React.useState(true)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/landing' element={<Landing />} />  
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />

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
