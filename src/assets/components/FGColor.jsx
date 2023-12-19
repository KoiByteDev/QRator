import React from 'react'

const FGColor = ({ setFGColor }) => {
  return (
    <div className='grid grid-cols-4 h-full w-full'>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('red')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-red-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('orange')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-orange-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('yellow')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-yellow-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('green')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-green-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('blue')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-blue-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('cyan')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-cyan-300'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('purple')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-purple-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('pink')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-pink-200'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('lime')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-lime-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('fuchsia')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-fuchsia-500'></div>
          </button> 
        </div>
       
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('white')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-white'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('black')}
            className='Color flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-black'></div>
          </button> 
        </div>
    </div>
  )
}

export default FGColor