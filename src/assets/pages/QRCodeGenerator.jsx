import React, { useState, useRef, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";
import BGColor from "../components/BGColor";
import FGColor from "../components/FGColor";
import SizeSelector from "../components/SizeSelector";

const QRCodeGenerator = ({ isDarkMode }) => {
  // State variables
  const [link, setLink] = useState("https://github.com/KoiByteDev");
  const [size, setSize] = useState(192);
  const [bgcolor, setBGColor] = useState("white");
  const [fgcolor, setFGColor] = useState("black");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Ref for QR code container
  const qrCodeRef = useRef(null);

  // Effect for handling window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Event handler for input change
  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  // Event handler for download button click
  const handleDownloadClick = () => {
    if (qrCodeRef.current) {
      html2canvas(qrCodeRef.current)
        .then((canvas) => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL();
          link.download = "qrcode.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) =>
          console.error("Error generating QR code image", error)
        );
    }
  };

  return (
    <div className={`w-full h-full flex items-center justify-center ${isDarkMode ? "" : "lmSub"}`}>
      <div className={`MainContainer flex md:flex-row flex-col items-center h-5/6 w-5/6 md:pl-16 p-6 md:space-x-10 ${isDarkMode ? "" : "lmMain lmShadow"}`}>
        {/* Input area */}
        <textarea
          className={`TextInput md:w-3/6 w-full md:h-5/6 h-1/6 resize-none md:text-xl text-md p-2 ${isDarkMode ? "" : "lmSub lmShadow"}`}
          placeholder="Enter your link or text here to convert"
          onChange={handleInputChange}
        />

        <div className="flex flex-col justify-between md:w-3/6 h-full">
          {/* QR code and download button */}
          <div className="w-full pb-10 h-3/5 md:h-1/2 flex md:flex-row flex-col items-center justify-center md:space-x-10">
            <div className="flex items-center justify-center w-72 h-72">
              <div className={`QRCode ${isDarkMode ? "" : "lmShadow"}`} ref={qrCodeRef}>
                <QRCodeSVG value={link} size={size} bgColor={bgcolor} fgColor={fgcolor} />
              </div>
            </div>
            <button
              className={`DownloadButton rounded-lg pl-3 h-10 flex flex-row items-center space-x-3 ${isDarkMode ? "" : "lmShadow"} transition ease-in-out duration-300`}
              onClick={handleDownloadClick}
            >
              <p className="text-black font-bold">Download Me!</p>
              <i className="material-icons p-2 rounded-r-lg">download</i>
            </button>
          </div>

          {/* Editor section */}
          <div className={`Editor flex md:flex-col flex-row w-full h-2/5 md:h-1/2 ${isDarkMode ? "" : "lmShadow"}`}>
            {screenWidth >= 768 && (
              <div className={`Size font-bold w-full h-1/3 p-2 ${isDarkMode ? "" : "lmMain"}`}>
                <p className={`w-full h-2/6 text-center ${isDarkMode ? "" : "lmText"}`}>Size</p>
                <SizeSelector setSize={setSize} />
              </div>
            )}
            <div className="flex flex-row w-full md:h-2/3">
              {/* Background Color */}
              <div className={`BGColor flex flex-col w-1/2 h-full p-2 text-center text-white font-bold ${isDarkMode ? "" : "lmSub lmText"} transition ease-in-out duration-300`}>
                <p>Background Color</p>
                <BGColor setBGColor={setBGColor}></BGColor>
              </div>
              
              {/* Foreground Color */}
              <div className={`FGColor flex flex-col w-1/2 h-full p-2 text-center text-white font-bold ${isDarkMode ? "" : "lmSub lmText"} transition ease-in-out duration-300`}>
                <p>Foreground Color</p>
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
