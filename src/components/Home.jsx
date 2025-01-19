import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center bg-neutral-200 border-b border-neutral-600">
            <h1 className="text-4xl font-semibold mt-32">Welcome to 
            <span className='bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text'> Binit</span>
                </h1>
            <p className="text-lg mt-6 ml-10 mr-10 text-center">Just take a photo of your garbage and we'll identify what type it is</p>
            <button className="mt-10 bg-gradient-to-r from-green-400 to-green-500 text-white px-8
            py-2 rounded-md mb-32">Binitfy!</button>
        </div>
    </div>
  )
}

export default Home
