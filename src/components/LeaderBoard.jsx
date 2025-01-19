import React from 'react'
import data from '../../data.json'

const LeaderBoard = () => {
  const sortedData = data.leaderboard.sort((a, b) => b.total_points - a.total_points)

  return (
    <div>
        <div>
            <h1 className='text-3xl text-center py-10 bg-neutral-200'>Leaderboard</h1>
        </div>
        <div className='bg-neutral-200 p-10 h-96 overflow-y-scroll'>
        {sortedData.map((user, index) => (
            <div key={index} className='flex justify-between p-4 bg-white mb-2 rounded-md shadow-md'>
            <span>{index + 1}</span>
            <span>{user.user_name}</span>
            <span>{user.total_points}</span>
            </div>
        ))}
        </div>
    </div>
  )
}

export default LeaderBoard
