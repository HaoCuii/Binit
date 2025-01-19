import React from 'react'
import { CiCloudOn } from "react-icons/ci";
import { CiBag1 } from "react-icons/ci";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { FaWind } from "react-icons/fa6";


const StatCard = ({ Name, Data, Description }) => {
  return (
    <div className='rounded-3xl shadow-lg bg-white w-[47%] px-6 py-8 flex justify-between'>
        <div className='flex items-start flex-col gap-2'>
          {Name === 'CO2 Savings:' && (
            <div className='bg-purple-300 rounded-full p-2'>
              <CiCloudOn size={30} className='text-white' />
            </div>
          )}
          {Name === 'Landfill Savings:' && (
            <div className='bg-orange-300 rounded-full p-2'>
              <CiBag1 size={30} className='text-white' />
            </div>
          )}
          {Name === 'Energy Savings:' && (
            <div className='bg-red-300 rounded-full p-2'>
              <MdOutlineEnergySavingsLeaf size={30} className='text-white' />
            </div>
          )}
          {Name === 'Air stuff' && (
            <div className='bg-blue-300 rounded-full p-2'>
              <FaWind size={30} className='text-white' />
            </div>
          )}
          <div>
              <h2 className='text-md font-semibold'>{Name}</h2>
              <h2 className='text-xl'>{Data} kilograms</h2>
          </div>
        </div>
    </div>
  )
}

export default StatCard
