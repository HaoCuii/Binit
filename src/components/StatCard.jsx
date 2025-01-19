import React from 'react'

const StatCard = ({ Name, Data, Description }) => {
  return (
    <div className='rounded-md shadow-lg bg-green-300 w-[47%] p-6 flex justify-between'>
        <div>
            <h2 className='text-xl'>{Name}</h2>
            <h2 className='text-5xl'>{Data}</h2>
            <p>{Description}</p>
        </div>
    </div>
  )
}

export default StatCard
