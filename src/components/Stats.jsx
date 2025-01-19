import React from 'react'
import { RiDeleteBin7Line } from "react-icons/ri"
import GarbageChart from './GarbageChart'
import StatCard from './StatCard'
import data from '../../data.json'

const Stats = () => {
  const totalBins = data.CharlieDavis[0].Recycle + data.CharlieDavis[0].Compost + data.CharlieDavis[0].Garbage + data.CharlieDavis[0].Glass

  return (
    <div>
        <div className='border-b border-neutral-600'>
            <div className='flex flex-col items-center bg-neutral-200 p-10'>
                <div className='rounded-md shadow-lg bg-green-300 w-full p-6 flex justify-between'>
                    <div>
                        <h2 className='text-xl'>Your Total Bins:</h2>
                        <h2 className='text-5xl'>{totalBins}</h2>
                    </div>

                    <div className='flex items-center'>
                        <RiDeleteBin7Line size={50} />
                    </div>
                </div>

                <div className='rounded-md shadow-lg bg-green-300 w-full p-6 flex justify-center mt-10'>
                    <GarbageChart />
                </div>

                <div className='flex flex-wrap justify-between gap-6 mt-10 w-full'>
                    <StatCard Name='CO2 Savings:' Data='500' Description='You have recycled 500 plastic items' />
                    <StatCard Name='Landfill Savings:' Data='300' Description='You have recycled 300 paper items' />
                    <StatCard Name='Energy Savings:' Data='500' Description='You have recycled 500 plastic items' />
                    <StatCard Name='Air stuff' Data='300' Description='You have recycled 300 paper items' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats
