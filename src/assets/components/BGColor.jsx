import React from 'react'

const BGColor = ({ setBGColor }) => {
  return (
    <div className='grid grid-cols-4 h-full w-full'>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('red')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-red-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('orange')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-orange-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('yellow')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-yellow-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('green')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-green-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('blue')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-blue-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('cyan')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-cyan-300'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('purple')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-purple-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('pink')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-pink-200'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('lime')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-lime-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('fuchsia')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-fuchsia-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('white')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-white'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('black')}
            className='Color flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-7 md:w-10 h-7 md:h-10 rounded-sm md:rounded-md bg-black'></div>
          </button> 
        </div>
    </div>
  )
}

export default BGColor