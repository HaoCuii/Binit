import React from 'react';
import recycle from '../assets/recycle.jpg'; // Ensure the path is correct

const About = () => {
  return (
    <div className='bg-neutral-100 py-24 px-10 flex flex-col md:flex-row gap-10 items-center'>
      <div className='lg:w-[47%] bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-full flex flex-col gap-6 p-10'>
        <h1 className='text-4xl font-semibold text-emerald-500'>About Us</h1>
        <p className='text-lg text-gray-700'>
          We are Binit! A waste management platform with the mission of changing the world one bin at a time. Founded in 2025 by a group of two higherschoolers, Binit makes recycling and waste management fun and rewarding.
        </p>
        <p className='text-lg text-gray-700'>
          Our platform uses AI to recognize waste and sort it into the correct bins. Users can earn points for recycling, composting, and reducing waste, and climb the leaderboard to compete with friends and family. Users can also track their environmental impact such as CO2 emissions saved and much more!
        </p>
      </div>

      <div className='lg:w-[47%] sm:w-full mt-4 md:mt-0 rounded-xl shadow-2xl overflow-hidden'>
        <img src={recycle} alt="Recycling bins" className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default About;

