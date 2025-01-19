import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/Home'
import Stats from './Stats'
import LeaderBoard from './LeaderBoard'
import Footer from '../components/Footer'
import About from '../components/About'
import Features from '../components/Features'

const Landing = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className='bg-neutral-100'>
        <div className='max-w-7xl mx-auto'>
          <Home />
          <About />
          
        </div>
        <Footer />

    </div>
  )
}

export default Landing
