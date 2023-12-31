import React from "react";
import ProjectCard from "../../components/ProjectCard";
import Medicare from "../../assests/Medicare.jpg";
import Pharma from "../../assests/Pharma.jpg";
import Unix from "../../assests/Unix.jpg";
import Iot from "../../assests/Iot.jpeg";
import Grand from "../../assests/Grand.jpeg";
import Donor_Hub from "../../assests/Donor_Hub.jpeg";

const Index = () => {
    
    return ( 
       <div id="projects"  >
      <div className="text-5xl font-bold uppercase tracking-widest flex justify-center m-4  p-10">
Projects       </div>
       <div className="flex text-xl tracking-wider justify-center ">
       Explore a compilation of my university, personal, volunteer, and freelance projects listed below.
       </div>
<div className=" flex  m-10 space-x-12 ">

<ProjectCard
        imageSrc={Grand}
        title="A Modern Web Based Ordering and Reservation System For Restaurant"
        description="Crafted and sustained web applications, ensuring optimization for responsive design."
        link="https://github.com/gitgunawardhana/grand-cafe"
     /> 

<ProjectCard
        imageSrc={Pharma}
        title="Pharma EX - Availability Checker for Medicines"
        description="Availability checker for medicines with alternative suggestion, Sales rep and pharmacist interfaces , admin panel for controlling the system. "
        link="https://github.com/chamodgunarathne/Pharma_EX"
     /> 

<ProjectCard
        imageSrc={Unix}
        title="Unix Store - E-Commerce solution for laptop store"
        description="Full-featured E-Commerce laptop store with PC Assemble functionality and many other features. Also includes admin panel to manage the store.  "
        link="https://github.com/chamodgunarathne/Unix_Store"
     /> 

<ProjectCard
        imageSrc={Donor_Hub}
        title="Donor-Hub - (Donatation Platiform)"
        description="Donation platform for both donors and donees can seamlessly integrate with the system and fullfill their requirements with the ease of developed system. "
        link="https://github.com/chamodgunarathne/DonorHub"
     /> 
     
</div>
<div className=" flex m-10 space-x-12 ">
<ProjectCard
        imageSrc={Medicare}
        title="Medicare - Blood Donation Web App"
        description="Blood Donation system with user registration and donor search option. Also includes admin panel for managing the site content."
        link="https://github.com/chamodgunarathne/Blood_Bank"
     />
     
<ProjectCard
        imageSrc={Medicare}
        title="Admin Panel For USER and sales handling"
        description="Self-Learning project in Spring Boot CRUD operations using MVC architecture.  Admin panel to control user and sales operations."
        link="https://github.com/chamodgunarathne/Sping-First-App"
     />

<ProjectCard
        imageSrc={Iot}
        title="IoT Based Weather Station with AWS and Real-Time Grafana Dashboard"
        description="AWS IoT Core, Amazon Timestream, Grafana dashboard are using to achieve the objectives."
        link=""
     /> 

</div>
       
    </div>
    );
};

export default Index;