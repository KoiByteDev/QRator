import React from 'react';

const SizeSelector = ({ setSize }) => {
  return (
    <div className='flex justify-center space-x-16 h-2/3'>
      <div className='flex flex-col items-center justify-between h-full text-white'>
        <button
          className='flex justify-center items-center w-full h-full'
          value='128'
          onClick={() => setSize(128)}
        >
          <div className='w-3 h-3 bg-black border-white border-2'></div>
        </button>
        <p>Small</p>
      </div>
      <div className='flex flex-col items-center justify-between h-full text-white'>
        <button
          className='flex justify-center items-center w-full h-full'
          value='192'
          onClick={() => setSize(192)}
        >
          <div className='w-5 h-5 bg-black border-white border-2'></div>
        </button>
        <p>Medium</p>
      </div>
      <div className='flex flex-col items-center justify-between h-full text-white'>
        <button
          className='flex justify-center items-center w-full h-full'
          value='256'
          onClick={() => setSize(256)}
        >
          <div className='w-7 h-7 bg-black border-white border-2'></div>
        </button>
        <p>Large</p>
      </div>
    </div>
  );
};

export default SizeSelector;
