import React from 'react'

const BGColor = ({ setBGColor }) => {
  return (
    <div className='grid grid-cols-4 h-full w-full'>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('red')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-red-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('orange')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-orange-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('yellow')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-yellow-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('green')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-green-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('blue')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-blue-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('cyan')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-cyan-300'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('purple')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-purple-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('pink')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-pink-200'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('lime')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-lime-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('fuchsia')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-fuchsia-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('white')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-white'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setBGColor('black')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-10 h-10 rounded-md bg-black'></div>
          </button> 
        </div>
    </div>
  )
}

export default BGColor