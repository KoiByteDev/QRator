import React, { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

import BGColor from '../components/BGColor';
import FGColor from '../components/FGColor';

const QRCodeGenerator = () => {
  const [link, setLink] = useState('');

  const handleInputChange = (event) => {
    setLink(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div 
      className='w-full h-full flex items-center justify-center'
      >
        <div className='flex flex-row items-center h-5/6 w-5/6 pl-16 p-6 space-x-10 bg-slate-500'>
          <input 
            className='w-3/6 h-5/6'
            placeholder='Paste a link to convert' 
            value={link} 
            type="text" 
            onChange={handleInputChange}
          />
          <div className='flex flex-col w-3/6 h-full'>
            <div className='QRCode w-full h-1/2 flex items-center justify-center'>
              <QRCodeSVG 
                value={link} 
                size="192" 
              />
            </div>
            <div className='Editor flex flex-col w-full h-1/2 bg-slate-200'>
              <div className='Size font-bold w-full h-1/3 p-2 bg-slate-300'>
                <p className='w-full h-2/6 text-center'>Size</p>
                <div className='flex justify-center space-x-16 h-2/3'>
                  <div className='flex flex-col items-center justify-between h-full'>
                    <button className='flex justify-center items-center w-full h-full'>
                      <div className='w-2 h-2 bg-black'></div>
                    </button>
                    <p>Small</p>
                  </div>
                  <div className='flex flex-col items-center justify-between h-full'>
                    <button className='flex justify-center items-center w-full h-full'>
                      <div className='w-4 h-4 bg-black'></div>
                    </button>
                    <p>Medium</p>
                  </div>
                  <div className='flex flex-col items-center justify-between h-full'>
                    <button className='flex justify-center items-center w-full h-full'>
                      <div className='w-6 h-6 bg-black'></div>
                    </button>
                    <p>Large</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-row w-full h-2/3'>
                <div className='BGColor flex flex-col w-1/2 h-full p-2 text-center'>
                  <p>Background Color</p>
                  <BGColor></BGColor>
                </div>
                <div className='FGColor flex flex-col w-1/2 h-full p-2 text-center'>
                  <p>Foreground Color</p>
                  <FGColor></FGColor>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default QRCodeGenerator