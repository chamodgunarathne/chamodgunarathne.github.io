import React from 'react';
import Logo from "../../assests/Logo_W.png";
import { Link as ScrollLink } from 'react-scroll';
import CVDown from "../../components/CVDown";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen z-50 bg-gray-900 text-white">
      <div className="px-5 xl:px-12 py-6 flex justify-between items-center">
        <ScrollLink to="home" smooth className="text-3xl font-bold font-heading">
          <img src={Logo} alt="Logo" width="80px" height="50px" />
        </ScrollLink>
        {/* Responsive Navbar Toggle */}
        {/* <div className="block xl:hidden">
          <button className="text-white hover:text-blue-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div> */}
        {/* Nav Links - Hidden on mobile by default */}
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 cursor-pointer">
          <li>
            <ScrollLink to="home" smooth className="hover:text-blue-600">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth className="hover:text-blue-600">
              About Me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="achievements" smooth className="hover:text-blue-600">
              Achievements
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth className="hover:text-blue-600">
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="blog" smooth className="hover:text-blue-600">
              Blog
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth className="hover:text-blue-600">
              Contact Me
            </ScrollLink>
          </li>
        </ul>
        {/* CV Download Button - Hidden on mobile by default */}
        <div className=" md:block bg-blue-500 p-3 rounded-xl font-semibold font-heading cursor-pointer hover:scale-110">
          <a>
            <CVDown />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
