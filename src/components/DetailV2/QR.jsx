import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import React, { useState, useEffect } from 'react';

export default function QR({ shortenedUrl, slug }) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const downloadQR = () => {
    const canvas = document.getElementById('qrcode');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${slug}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="md:h-[480px] md:w-[504px] lg:w-[312px] 3xl:w-[504px] w-full pt-11 pb-[72px] flex flex-col space-y-6 md:space-y-14 items-center bg-white rounded">
      {isMobile ? (
        <QRCode id="qrcode" value={shortenedUrl} size={240} />
      ) : (
        <QRCode id="qrcode" value={shortenedUrl} size={264} />
      )}
      <button
        type="button"
        onClick={downloadQR}
        className="w-[164px] h-11 text-white font-normal text-base bg-gdscBlue-300 hover:bg-shorten-btn-hover transition-all duration-300 ease-out rounded"
      >
        Export as PNG
      </button>
    </div>
  );
}
QR.propTypes = {
  shortenedUrl: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
