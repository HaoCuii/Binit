import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Features = () => {
  return (
    <div className='bg-neutral-100 grid lg:grid-cols-2  sm:grid-cols-1 gap-4 p-4'>
      <div className='bg-neutral-100 p-10 flex gap-2'>
        <div className='flex items-center justify-center bg-green-500 rounded-full w-8 h-8 p-2'>
          <FaCheck className='text-white text-sm' />
        </div>
        <div>
          <h1 className='text-xl font-semibold'>Feature 1</h1>
          <p>
            A small description of this feature. It could be short or it could
            be long. It just needs to be a certain length.
          </p>
        </div>
      </div>

      <div className='bg-neutral-100 p-10 flex gap-2'>
        <div className='flex items-center justify-center bg-green-500 rounded-full w-8 h-8 p-2'>
          <FaCheck className='text-white text-sm' />
        </div>
        <div>
          <h1 className='text-xl font-semibold'>Feature 2</h1>
          <p>
            Another small description of this feature. It’s informative and concise.
          </p>
        </div>
      </div>

      <div className='bg-neutral-100 p-10 flex gap-2'>
        <div className='flex items-center justify-center bg-green-500 rounded-full w-8 h-8 p-2'>
          <FaCheck className='text-white text-sm' />
        </div>
        <div>
          <h1 className='text-xl font-semibold'>Feature 3</h1>
          <p>
            Description for the third feature. It’s detailed yet brief.
          </p>
        </div>
      </div>

      <div className='bg-neutral-100 p-10 flex gap-2'>
        <div className='flex items-center justify-center bg-green-500 rounded-full w-8 h-8 p-2'>
          <FaCheck className='text-white text-sm' />
        </div>
        <div>
          <h1 className='text-xl font-semibold'>Feature 4</h1>
          <p>
            A description for the last feature. Short and to the point.
          </p>
        </div>
      </div>
    </div>

  );

};

export default Features;
