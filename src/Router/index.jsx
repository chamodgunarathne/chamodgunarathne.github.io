import { useRoutes } from "react-router-dom";
import React from "react";
import TopLayout from "../Layouts/TopMenu";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Achievements from "../components/Acievements";
import Blog from "../components/Blog";
import ContactMe from "../components/ContactMe";

function Router() {
    const routes = [
      {
        path: "",
        element: (
          <TopLayout footer>
            <Home/>
            <AboutMe/>  
            <Achievements/>
            <Projects/>
            <Blog/>
<ContactMe/>
          </TopLayout>
        ),
      },
    ];
  
    return useRoutes(routes);
  }
  
  export default Router;