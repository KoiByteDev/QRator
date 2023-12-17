import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import BGColor from '../components/BGColor';
import FGColor from '../components/FGColor';
import SizeSelector from '../components/SizeSelector';

const QRCodeGenerator = () => {
  const [link, setLink] = useState('https://github.com/KoiByteDev');
  const [size, setSize] = useState(192);
  const [bgcolor, setBGColor] = useState('white');
  const [fgcolor, setFGColor] = useState('black')

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div 
      className='w-full h-full flex items-center justify-center'
      >
        <div className='flex flex-row items-center h-5/6 w-5/6 pl-16 p-6 space-x-10 bg-slate-500'>
          <input 
            className='w-3/6 h-5/6'
            placeholder='Paste a link to convert' 
            type="text" 
            onChange={handleInputChange}
          />
          <div className='flex flex-col w-3/6 h-full'>
            <div className='QRCode w-full h-1/2 flex items-center justify-center'>
              <QRCodeSVG 
                value={link} 
                size={size} 
                bgColor={bgcolor}
                fgColor={fgcolor}
              />
            </div>
            <div className='Editor flex flex-col w-full h-1/2 bg-slate-200'>
              <div className='Size font-bold w-full h-1/3 p-2 bg-slate-300'>
                <p className='w-full h-2/6 text-center'>Size</p>
                <SizeSelector setSize={setSize}/>
              </div>
              <div className='flex flex-row w-full h-2/3'>
                <div className='BGColor flex flex-col w-1/2 h-full p-2 text-center'>
                  <p>Background Color</p>
                  <BGColor setBGColor={setBGColor}></BGColor>
                </div>
                <div className='FGColor flex flex-col w-1/2 h-full p-2 text-center'>
                  <p>Foreground Color</p>
                  <p></p>
                  <FGColor setFGColor={setFGColor}></FGColor>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default QRCodeGenerator