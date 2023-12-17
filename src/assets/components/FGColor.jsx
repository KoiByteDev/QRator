import React from 'react'

const FGColor = ({ setFGColor }) => {
  return (
    <div className='grid grid-cols-4 h-full w-full'>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('red')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-red-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('orange')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-orange-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('yellow')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-yellow-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('green')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-green-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('blue')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-blue-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('cyan')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-cyan-300'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('purple')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-purple-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('pink')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-pink-200'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('lime')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-lime-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('indigo')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-indigo-600'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('fuchsia')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-fuchsia-500'></div>
          </button> 
        </div>
        <div className='flex items-center justify-center'>
          <button 
            onClick={() => setFGColor('red')}
            className='flex items-center justify-center w-10 h-10 rounded-md outline bg-slate-100 outline-black'
            >
            <div className='w-8 h-8 rounded-md bg-red-500'></div>
          </button> 
        </div>
    </div>
  )
}

export default FGColor