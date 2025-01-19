import React from 'react';

const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-neutral-200'>
      <div className='bg-white p-10 rounded-md shadow-lg'>
        <h1 className='text-3xl text-center'>Sign Up</h1>
        <form className='flex flex-col gap-4 mt-6'>
          <input type='text' placeholder='Username' className='p-2 border border-neutral-600 rounded-md' />
          <input type='password' placeholder='Password' className='p-2 border border-neutral-600 rounded-md' />
            <input type='password' placeholder='Confirm Password' className='p-2 border border-neutral-600 rounded-md' />
          <button className='bg-primary-500 text-white p-2 rounded-md'>Sign Up</button>
        </form>
        <div className='w-full flex justify-center mt-0'>
          <button className='border border-neutral-600 rounded-md py-2 px-3
          bg-green-400 hover:bg-green-200'>Signup!</button>
        </div>
        <p className='text-center mt-4'>Already have an account? <a href='/login' className='text-primary-500'>Login</a></p>
        
      </div>
    </div>
  );
};

export default SignUp;
