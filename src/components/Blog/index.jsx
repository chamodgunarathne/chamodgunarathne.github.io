import React, { useState, useEffect} from "react";

const Index = () => {
    const divStyle = {
        height: '100vh', // 100% of the viewport height
        width: '100%',   // 100% of the viewport width
        backgroundColor: '#111827', // Replace with the actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // Add any additional styling as needed
      };
      const [displayedText, setDisplayedText] = useState("");
  const originalText = "Coming Soon ...";

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
      }, originalText.length * 100 + 1000); 
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);
    return ( 
       <div id="blog" style={divStyle} >
      <div className="text-5xl font-bold uppercase tracking-widest flex justify-center m-4 text-white p-10">
        Blog
       </div>
       <div className="flex text-xl tracking-wider justify-center text-white">
        </div>
       <div className=" flex p-10 m-10 space-x-12 pt-24 justify-center items-center text-slate-700 text-4xl md:text-6xl font-bold tracking-widest">
       {displayedText}
       </div>

    </div>
    );
};

export default Index;