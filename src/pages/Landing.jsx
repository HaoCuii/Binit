import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/home'
import Stats from '../components/Stats'
import LeaderBoard from '../components/LeaderBoard'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <section id='home'><Home /></section>
        <section id='stats'><Stats /></section>
        <section id='leaderboard'><LeaderBoard /></section>
      
    </div>
  )
}

export default Landing
