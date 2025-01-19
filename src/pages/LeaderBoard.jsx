import React from 'react'
import data from '../../data.json'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

const LeaderBoard = () => {
  const sortedData = data.leaderboard.sort((a, b) => b.total_points - a.total_points)

  return (
    <div className='bg-neutral-100'>
        <Navbar />
        
        <div>
        <h1 className="text-5xl lg:text-6xl mt-32 font-oi text-center text-yellow-700">Leader Board</h1>
        </div>
        <div className='bg-neutral-100 py-10 mt-24 px-24 h-96 overflow-y-scroll'>
        {sortedData.map((user, index) => (
            <div key={index} className={`flex justify-between p-4 bg-white mb-2 rounded-xl shadow-lg ${index !== sortedData.length - 1 ? 'mb-4' : ''}`}>
            <span>{index + 1}</span>
            <span>{user.user_name}</span>
            <span>{user.total_points}</span>
            </div>
        ))}
        </div>

        <Footer />
    </div>
  )
}

export default LeaderBoard
