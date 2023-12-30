import React, { useState } from 'react';
import QRCodeGenerator from './assets/pages/QRCodeGenerator';
import Topbar from './assets/components/Topbar';
import './App.css'

function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  return (
    <> 
      <Topbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <QRCodeGenerator isDarkMode={isDarkMode}/>
    </>
  )
}

export default App
