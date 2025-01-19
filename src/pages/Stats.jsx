import React from 'react'
import { RiDeleteBin7Line } from "react-icons/ri"
import GarbageChart from '../components/GarbageChart'
import StatCard from '../components/StatCard'
import data from '../../data.json'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

const Stats = () => {
  const totalBins = data.CharlieDavis[0].Recycle + data.CharlieDavis[0].Compost + data.CharlieDavis[0].Garbage + data.CharlieDavis[0].Glass

  return (
    <div>
        <Navbar />
        <div>
          <h1 className="text-5xl lg:text-6xl mt-32 font-oi text-center text-yellow-700">
            Your{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
              Stats
            </span>
          </h1>
        </div>
        <div className=' border-neutral-600'>
            <div className='flex flex-col items-center bg-neutral-100 p-10'>
                <div className='rounded-3xl shadow-lg bg-white w-full p-6 flex justify-center'>
                    <div>
                      <h2 className='text-xl font-medium'>Your Total Bins:</h2>
                      <div className='flex justify-center'>
                            <h2 className='text-6xl text-green-500'>{totalBins}</h2>
                            <RiDeleteBin7Line size={60} className='text-green-500' />
                      </div>
                        
                    </div>
                </div>

                <div className='rounded-3xl shadow-lg bg-white w-full p-6 flex justify-center mt-10'>
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

        <Footer />
    </div>
  )
}

export default Stats
