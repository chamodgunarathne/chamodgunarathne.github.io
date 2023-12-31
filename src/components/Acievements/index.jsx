import React from "react";
import backgroundImage from '../../assests/Background_2.jpg';
import Profile from "../../assests/Profile.jpg";
import Logo_UWU from "../../assests/logo_uwu.png";
import AchievementCard from "../AcivementCard";
import Sem1 from "../../assests/sem1.jpg";
import Sem2 from "../../assests/sem2.jpg";
import AWS from "../../assests/AWS.jpeg";
import ReactBasic from "../../assests/ReactBasic.jpeg";

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

    return ( 
       <div id="achievements" style={divStyle} >
      <div className="text-5xl font-bold uppercase tracking-widest flex justify-center m-4 text-white p-10">
        Achievements
       </div>
       <div className="flex text-xl tracking-wider justify-center text-white">
       In essence, acknowledging and celebrating one's achievements and successes can significantly enhance the overall quality and fulfillment of one's life journey.
       </div>
       <div className=" flex p-10 m-10 space-x-12 pt-24">
        <AchievementCard 
        imageUrl={Sem1}
        title="Deans List ( Year 01 Semester 01)"
        description="I have got selected for dean's lis in my first year first semester by obtaining 4.00 semester GPA."
        />
        
        <AchievementCard 
        imageUrl={Sem2}
        title="Deans List ( Year 01 Semester 02)"
        description="I have got selected for dean's lis in my first year first semester by obtaining 3.96 semester GPA."
        />

<AchievementCard 
        imageUrl={AWS}
        title="AWS Knowledge: Cloud Essentials"
        description="Issued by Amazon Web Services Training and Certification"
        />

<AchievementCard 
        imageUrl={ReactBasic}
        title="React Basics"
        description="Issued by coursera "
        />
       </div>

    </div>
    );
};

export default Index;