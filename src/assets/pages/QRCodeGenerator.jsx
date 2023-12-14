import React, { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

const QRCodeGenerator = () => {
  const [link, setLink] = useState('');

  const handleInputChange = (event) => {
    setLink(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className='flex flex-col items-center space-y-20'>
        <QRCodeSVG value={link} size="256" />
        <input placeholder='Paste a link to convert' value={link} type="text" onChange={handleInputChange}/>
    </div>
  )
}

export default QRCodeGenerator