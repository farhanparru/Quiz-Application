import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt ,FaTrophy} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer columns data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Premium Quizzes", url: "/quizzes" },
        { name: "Leaderboard", url: "/leaderboard" },
        { name: "Rewards", url: "/rewards" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", url: "/support" },
        { name: "Terms of Service", url: "/terms" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "FAQs", url: "/faqs" },
        { name: "Contact Us", url: "/contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Our Story", url: "/story" },
        { name: "Careers", url: "/careers" },
        { name: "Partners", url: "/partners" },
        { name: "Press", url: "/press" },
        { name: "Blog", url: "/blog" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaYoutube />, url: "#" }
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: "+971 4 123 4567" },
    { icon: <FaEnvelope />, text: "info@quizmaster.ae" },
    { icon: <FaMapMarkerAlt />, text: "Dubai Marina, Dubai, UAE" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-gold rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border-2 border-gold rotate-45"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 p-2 rounded-lg">
                <FaTrophy className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                Quiz Master
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The premier destination for luxury quiz experiences in Dubai. Challenge your mind in style.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="text-gray-300 hover:text-yellow-400 text-xl transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer links columns */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-white border-b-2 border-yellow-500 pb-2 inline-block">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.url}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white border-b-2 border-yellow-500 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="text-yellow-400 mt-1">{item.icon}</span>
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-lg font-medium text-white mb-3">Subscribe to Updates</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
                />
                <motion.button
                  className="bg-gradient-to-r from-yellow-600 to-yellow-700 px-4 py-2 rounded-r-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            © {currentYear} Quiz Master. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex space-x-6"
          >
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Cookies
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;