/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaHandsHelping, FaDoorOpen, FaFileContract, FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-teal-900 to-teal-500 text-gold p-4 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 animate-pulse">
           Quiz Master
        </h1>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-gold text-3xl transition-transform transform hover:scale-125">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items */}
        <ul className={`md:flex md:space-x-8 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto from-teal-900 to-teal-500 md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 transition-transform transform ${isOpen ? 'block' : 'hidden'}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-3 text-lg font-semibold hover:text-yellow-400 transition-transform transform hover:scale-110">
              <span className="animate-3d-spin">{item.icon}</span>
              <a href={item.link} className="hover:underline">{item.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }

        .animate-3d-spin:hover {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </nav>
  );
};

const menuItems = [
  { text: 'Technical Support', link: '#technical-support', icon: <FaHandsHelping /> },
  { text: 'Quit Quiz', link: '#quit-quiz', icon: <FaDoorOpen /> },
  { text: 'Terms & Conditions', link: '#terms', icon: <FaFileContract /> },
  { text: 'Privacy Policy', link: '#privacy-policy', icon: <FaShieldAlt /> },
];

export default Navbar;
