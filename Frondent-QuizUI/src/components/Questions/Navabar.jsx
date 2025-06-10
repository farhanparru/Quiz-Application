// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FaHandsHelping, FaDoorOpen, FaFileContract, FaShieldAlt, FaBars, FaTimes, FaTrophy, FaHome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-teal-900 shadow-xl py-2' : 'bg-gradient-to-r from-teal-900 to-teal-700 py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo with Animation */}
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex items-center space-x-2"
        >
          <FaTrophy className="text-2xl text-yellow-400" />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            Quiz Master
          </h1>
        </motion.div>

        {/* Desktop Menu Items */}
        <ul className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <a href={item.link} className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors duration-300 py-2 px-3 rounded-lg">
                <span className="text-yellow-400 group-hover:rotate-12 transition-transform duration-300">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FaTimes className="text-2xl text-yellow-400" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </motion.div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-gradient-to-b from-teal-900 to-teal-700 lg:hidden z-40 pt-20 px-6"
            >
              <ul className="space-y-8">
                <motion.li
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <a 
                    href="/" 
                    className="flex items-center space-x-4 text-2xl text-white hover:text-yellow-300 py-4 border-b border-teal-600"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaHome className="text-yellow-400" />
                    <span>Home</span>
                  </a>
                </motion.li>
                
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <a 
                      href={item.link} 
                      className="flex items-center space-x-4 text-2xl text-white hover:text-yellow-300 py-4 border-b border-teal-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="text-2xl" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const menuItems = [
  { text: 'Technical Support', link: '/technical-support', icon: <FaHandsHelping /> },
  { text: 'Quit Quiz', link: '#quit-quiz', icon: <FaDoorOpen /> },
  { text: 'Terms & Conditions', link: '/Termscondition', icon: <FaFileContract /> },
  { text: 'Privacy Policy', link: '#privacy-policy', icon: <FaShieldAlt /> },
];

export default Navbar;