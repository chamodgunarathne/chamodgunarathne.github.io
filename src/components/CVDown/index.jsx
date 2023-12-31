import React from 'react';
import CV from '../../assests/CV/Chamod.pdf';  // Replace with the actual path to your CV

const DownloadCVButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Chamod_Gunarathna_CV.pdf';  // Replace with your desired file name
    link.click();
  };

  return (
    <button onClick={handleDownload} >
      Download CV
    </button>
  );
};

export default DownloadCVButton;
