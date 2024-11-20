import React from "react";
import logo from '../assets/logo_rc.png';
import { FaCoffee } from 'react-icons/fa';

const Menus = [
    {
        id: 1,
        name: "Home", 
        link: "/#",  // Assuming the Home link should lead to the top of the page.
    },
    {
        id: 2,
        name: "Productos",
        link: "/#services"  // Update this as needed to match the ID of the services section.
    },
    {
        id: 3,
        name: "Nosotros",
        link: "/#banner"  // Changed as per your request to scroll to the banner section.
    }
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-20">
      <div className="container py-5">
        <div className="flex justify-between items-center gap-4">
          {/* Logo section, now a button */}
          <button onClick={() => window.scrollTo(0, 0)} className="flex items-center">
            <img src={logo} alt="Richi Coffee Logo" className="h-10 w-auto"/>
          </button>
          {/* Menu items */}
          <div className="flex items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((menu, index) => (
                <li key={index}>
                  <a href={menu.link} className="text-xl hover:text-opacity-100 py-4 px-4 text-white hover:bg-primary/30 rounded-md duration-200">
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Order button */}
            <button className="bg-primary/70 hover:bg-primary/90 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
              Order <FaCoffee className="text-xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
