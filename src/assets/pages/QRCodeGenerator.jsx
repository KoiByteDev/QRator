import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import BGColor from '../components/BGColor';
import FGColor from '../components/FGColor';
import SizeSelector from '../components/SizeSelector';
import html2canvas from 'html2canvas';

const QRCodeGenerator = () => {
  const [link, setLink] = useState('https://github.com/KoiByteDev');
  const [size, setSize] = useState(192);
  const [bgcolor, setBGColor] = useState('white');
  const [fgcolor, setFGColor] = useState('black');
  const qrCodeRef = useRef(null);

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  const handleDownloadClick = () => {
    if (qrCodeRef.current) {
      html2canvas(qrCodeRef.current)
        .then((canvas) => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL();
          link.download = 'qrcode.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => console.error('Error generating QR code image', error));
    }
  };

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='MainContainer flex flex-row items-center h-5/6 w-5/6 pl-16 p-6 space-x-10'>
        <textarea
          className='TextInput w-3/6 h-5/6 resize-none text-2xl p-2 text-white'
          placeholder='Enter your link or text here to convert'
          onChange={handleInputChange}
        />
        <div className='flex flex-col w-3/6 h-full'>
          <div className='w-full h-1/2 flex flex-row items-center justify-center space-x-10'>
            <div className='flex items-center justify-center w-72 h-72'>
              <div className='QRCode' ref={qrCodeRef}>
              <QRCodeSVG
                value={link}
                size={size}
                bgColor={bgcolor}
                fgColor={fgcolor}
              />
              </div>
            </div>
            <button 
              className='DownloadButton bg-white rounded-lg pl-3 h-10 flex flex-row items-center space-x-3'
              onClick={handleDownloadClick}
            >
              <p className='text-black font-bold'>
                Download Me!
              </p>
              <i className="material-icons p-2 rounded-r-lg">download</i>
            </button>
          </div>
          <div className='Editor flex flex-col w-full h-1/2'>
            <div className='Size font-bold w-full h-1/3 p-2'>
              <p className='w-full h-2/6 text-center text-white'>Size</p>
              <SizeSelector setSize={setSize} />
            </div>
            <div className='flex flex-row w-full h-2/3'>
              <div className='BGColor flex flex-col w-1/2 h-full p-2 text-center text-white font-bold'>
                <p>Background Color</p>
                <BGColor setBGColor={setBGColor}></BGColor>
              </div>
              <div className='FGColor flex flex-col w-1/2 h-full p-2 text-center text-white font-bold'>
                <p>Foreground Color</p>
                <p></p>
                <FGColor setFGColor={setFGColor}></FGColor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
