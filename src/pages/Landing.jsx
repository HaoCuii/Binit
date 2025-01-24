import React from 'react'
import Home from '../components/Home'
import Footer from '../components/Footer'
import About from '../components/About'

const Landing = () => {
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
