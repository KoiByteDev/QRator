import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Topbar = ({ isDarkMode, setDarkMode }) => {

  const handleModeChange = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`topbar w-full h-16 bg-white flex flex-row ${isDarkMode? '' : 'lmShadow'}`}>
      <div className={`w-1/2 h-full flex justify-center items-center text-white text-3xl font-bold ${isDarkMode? '' : 'lmMain lmText'} transition ease-in-out duration-300`}>
        <p>QRator</p>
      </div>
      <div className={`w-1/2 h-full flex flex-row items-center justify-end space-x-5 pr-40 ${isDarkMode? '' : 'lmMain'} transition ease-in-out duration-300`}>
      <button
        className={`icon w-10 h-10 rounded-lg text-2xl ${isDarkMode? '' : 'lmShadow'}`}
        onClick={() => window.open("https://github.com/KoiByteDev", "_blank")}
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
        <button
          className={`icon w-10 h-10 rounded-lg text-2xl ${isDarkMode? '' : 'lmShadow'}`} 
          onClick={handleModeChange}
        >
          <FontAwesomeIcon className="modeIcon" icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
