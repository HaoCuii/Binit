import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/Home'
import Stats from './Stats'
import LeaderBoard from './LeaderBoard'
import Footer from '../components/Footer'
import About from '../components/About'
import Features from '../components/Features'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <div className='max-w-7xl mx-auto'>
          <Home />
          <About />
          <Features />
        </div>
        <Footer />

    </div>
  )
}

export default Landing
