import React from 'react';

const SizeSelector = ({ changeSize }) => {
  return (
    <div className='flex justify-center space-x-16 h-2/3'>
      <div className='flex flex-col items-center justify-between h-full'>
        <button
          className='flex justify-center items-center w-full h-full'
          value='128'
          onClick={() => changeSize(128)}
        >
          <div className='w-2 h-2 bg-black'></div>
        </button>
        <p>Small</p>
      </div>
      <div className='flex flex-col items-center justify-between h-full'>
        <button
          className='flex justify-center items-center w-full h-full'
          value='192'
          onClick={() => changeSize(192)}
        >
          <div className='w-4 h-4 bg-black'></div>
        </button>
        <p>Medium</p>
      </div>
      <div className='flex flex-col items-center justify-between h-full'>
        <button
          className='flex justify-center items-center w-full h-full'
          value='256'
          onClick={() => changeSize(256)}
        >
          <div className='w-6 h-6 bg-black'></div>
        </button>
        <p>Large</p>
      </div>
    </div>
  );
};

export default SizeSelector;
