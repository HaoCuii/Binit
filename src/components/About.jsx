import React from 'react'
import recycle from '../assets/recycle.jpg' // Ensure the path is correct

const About = () => {
  return (
    <div className='bg-neutral-100 py-24 px-10 flex flex-col md:flex-row gap-10 align-center'>
      <div className='lg:w-[47%] bg-white shadow-2xl rounded-xl sm:w-full flex flex-col gap-6 p-10'>
        <h1 className='text-4xl font-semibold text-green-400'>About us</h1>
        <p className='text-lg'>
          This is a little paragraph about us. I want to make it a certain length 
          This is a little paragraph about us. I want to make it a certain length
          This is a little paragraph about us. I want to make it a certain length 
          This is a little paragraph about us. I want to make it a certain length 
          This is a little paragraph about us. I want to make it a certain length there for it will become
        </p>
      </div>

      <div className='lg:w-[47%] sm:w-full mt-4 md:mt-0 rounded-xl shadow-2xl overflow-hidden '>
        <img src={recycle} alt="trash bins" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default About

