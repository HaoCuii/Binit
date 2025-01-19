import React from 'react';
import recycle from '../assets/recycle.jpg'; // Ensure the path is correct

const About = () => {
  return (
    <div className='bg-neutral-100 py-24 px-10 flex flex-col md:flex-row gap-10 items-center'>
      <div className='lg:w-[47%] bg-white shadow-2xl rounded-xl sm:w-full flex flex-col gap-6 p-10'>
        <h1 className='text-4xl font-semibold text-emerald-500'>About Us</h1>
        <p className='text-lg text-gray-700'>
          Welcome to Binit! We are dedicated to transforming your waste management journey with smart technology. Our mission is to help you track, earn, and make a difference - one bin at a time. Join us in our effort to create a cleaner, greener future.
        </p>
        <p className='text-lg text-gray-700'>
          Our innovative platform uses AI to sort your waste, rewards you for proper waste management, and provides detailed analytics to monitor your environmental impact. Together, we can make a significant impact on our planet.
        </p>
      </div>

      <div className='lg:w-[47%] sm:w-full mt-4 md:mt-0 rounded-xl shadow-2xl overflow-hidden'>
        <img src={recycle} alt="Recycling bins" className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default About;

