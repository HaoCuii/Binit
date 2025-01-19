import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/home'
import Stats from '../components/Stats'
import LeaderBoard from '../components/LeaderBoard'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Stats />
        <LeaderBoard />
    </div>
  )
}

export default Landing
