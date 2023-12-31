import React, { useEffect, useState } from "react";
import backgroundImage from '../../assests/Background_3.jpg';
import Profile from "../../assests/Profile.jpg";

const Index = () => {
    const divStyle = {
        height: '100vh',
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
      
  const wordsArray = ["a Software Engineering Enthusiast", "a Freelancer", "a Machine Learning Enthusiast", "a Passionate Learner", "a Cloud Computing Enthusiast", "an UI Designer" , "a Fullstack Developer","a Graphic Designer"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const originalText = wordsArray[currentWordIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      let currentIndex = 0;
      const typingIntervalId = setInterval(() => {
        setDisplayedText(originalText.substring(0, currentIndex + 1));
        currentIndex += 1;
        if (currentIndex === originalText.length) {
          clearInterval(typingIntervalId);
        }
      }, 100);

      setTimeout(() => {
        setDisplayedText("");
        clearInterval(typingIntervalId);

        // Move to the next word in the array
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
      }, originalText.length * 100 + 1000);
    }, 3000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [currentWordIndex, wordsArray]);

  return (
    <div style={divStyle} id="home">
      <div className="flex items-center justify-center h-screen w-full text-white">
        <div className="flex flex-col items-center justify-center w-1/2 text-center">
          <div className="text-6xl uppercase tracking-wider font-bold">
          <span className="text-blue-500 px-2">Chamod</span> Gunarathna
          </div>
          <br />
          <div className="text-left text-3xl tracking-wider font-semibold">
            I'm <span className="text-blue-500"> {displayedText}</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="text-center">
            <img
              src={Profile}
              alt="Profile"
              style={{
                borderRadius: '50%',
                width: '500px',
                height: '500px',
                border: '25px solid #2563EB', // Specify your desired border styles
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
