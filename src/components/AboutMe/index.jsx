import React from "react";
import backgroundImage from '../../assests/Background_2.jpg';
import Profile from "../../assests/Profile.jpg";
import Logo_UWU from "../../assests/logo_uwu.png";

const Index = () => {
    const divStyle = {
        height: '100vh', // 100% of the viewport height
        width: '100%',   // 100% of the viewport width
        backgroundImage: `url(${backgroundImage})`, // Replace with the actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // Add any additional styling as needed
      };

    return ( 
       <div id="about" >
       <div className="text-5xl font-bold uppercase tracking-wider flex justify-center m-4">
        About Me
       </div>
       <div className="flex text-xl tracking-wider justify-center">
       Reveal the core of my identity and explore the driving forces behind my journey.
       </div>
       <div className="flex bg-slate-200 rounded-lg m-10 p-4 shadow-xl">
  {/* First Column (25% width) */}
  <div className="w-1/4 border-8 border-slate-400 rounded-2xl m-8">
    <img src={Profile} alt="Profile" className="border-8 rounded-xl "/>
  </div>

  {/* Second Column (75% width) */}
  <div className="w-3/4 pl-4 bg-slate-100 rounded-2xl p-10 m-4 shadow-2xl leading-7 tracking-wider">
    {/* Content for the second column goes here */}
    <p className="pr-8 pl-8">
      Hello, I'm Chamod Dilpa Gunarathna, currently pursuing my undergraduate degree in BSc. (Hons) Computer Science and Technology at Uva Wellassa University of Sri Lanka. My academic journey reflects my commitment to excellence in the field of software engineering. I am passionate about exploring all facets of software engineering, with a particular interest in cutting-edge technologies such as artificial intelligence.
    </p><br/>

    <p className="pr-8 pl-8">
      Driven by curiosity and a desire to innovate, I actively seek opportunities to expand my knowledge and skills in the dynamic world of technology. My academic pursuits and hands-on experiences have equipped me with a solid foundation in computer science, laying the groundwork for a fulfilling career in software engineering.
    </p><br/>

    <p className="pr-8 pl-8">
      I am excited about the endless possibilities that technology offers and am dedicated to contributing to its evolution. My journey is fueled by a passion for problem-solving, creativity, and a relentless pursuit of knowledge. I am open to collaboration, always eager to learn, and ready to make a positive impact in the ever-evolving landscape of software engineering.
    </p>
  </div>

</div>

<div className="flex bg-slate-200 rounded-lg m-10 p-8 shadow-xl items-center tracking-wider">
Interested In &nbsp;  :  &nbsp;&nbsp; <div className="bg-blue-400 p-2 rounded-xl font-medium shadow-xl">
    Software Development
                    </div> 
                    &nbsp;&nbsp; <div className="bg-blue-400 p-2 rounded-xl font-medium shadow-xl">
    Cloud Computing
                    </div>
                    &nbsp;&nbsp; <div className="bg-blue-400 p-2 rounded-xl font-medium shadow-xl">
    Mobile Development
                    </div>
                    &nbsp;&nbsp; <div className="bg-blue-400 p-2 rounded-xl font-medium shadow-xl">
    Artificial Intelligence
                    </div>
                    &nbsp;&nbsp; <div className="bg-blue-400 p-2 rounded-xl font-medium shadow-xl">
    Machine Learning
                    </div>
  </div>  

  <div className="flex bg-slate-200 rounded-lg m-10 p-8 shadow-xl items-center tracking-wider">
<div className="w-3/4 pl-4 bg-slate-100 rounded-2xl p-10 m-4 shadow-2xl leading-7 tracking-wider pl-10">
Undergraduate in BSc(Hons). in Computer Science and Technology Degree Program
Uva Wellassa University of Sri Lanka
<br/>2020 SEP - PRESENT
<br/>
<span className="font-semibold">Cumulative GPA : 3.88</span>
</div>
<div className=" flex w-1/4 justify-center ">
<img src={Logo_UWU} alt="Profile" className="border-8 rounded-xl "/>
</div>
  </div>

    </div>
    );
};

export default Index;