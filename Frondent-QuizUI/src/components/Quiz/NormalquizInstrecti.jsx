// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaClock, FaQuestionCircle, FaLightbulb, FaSmile, FaStar, FaBrain } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function NormalQuizInstruction() {
  const navigate = useNavigate();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-teal-800 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Luxury decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-blue-400 rotate-45"></div>
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-3xl overflow-hidden border border-blue-400 border-opacity-30 relative mx-2 md:mx-0"
      >
        {/* Premium header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 md:p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 hidden md:block">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-400 pattern-dots pattern-opacity-50 pattern-size-6 pattern-blue-400"></div>
          </div>
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-2 flex flex-col md:flex-row items-center justify-center"
          >
            <FaStar className="md:mr-4 mb-2 md:mb-0 text-yellow-300" /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Premium Knowledge Challenge
            </span>
            <FaStar className="md:ml-4 mt-2 md:mt-0 text-yellow-300" />
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-lg text-blue-100 font-medium"
          >
            Sharpen Your Mind in Style
          </motion.p>
        </div>

        <div className="p-5 md:p-8 lg:p-10">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6 md:space-y-8"
          >
            <motion.h1 variants={item} className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
                Challenge Guidelines
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-gray-300 leading-relaxed text-center text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
              Experience our premium knowledge challenge designed to entertain and educate. 
              Follow these guidelines for an optimal experience.
            </motion.p>

            <motion.ul variants={container} className="space-y-4 md:space-y-5 mt-6 md:mt-10">
              <motion.li variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-5 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-blue-400 hover:bg-opacity-70 transition-all">
                <FaClock className="text-blue-400 text-xl md:text-2xl lg:text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">Time Allocation</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    Each challenge lasts for <span className="text-blue-300 font-bold">10 minutes</span> - 
                    carefully manage your time for optimal performance.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-5 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-blue-400 hover:bg-opacity-70 transition-all">
                <FaQuestionCircle className="text-blue-400 text-xl md:text-2xl lg:text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">Question Format</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    You ll encounter <span className="text-blue-300 font-bold">20 carefully curated questions</span> 
                    across diverse intellectual domains.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-5 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-blue-400 hover:bg-opacity-70 transition-all">
                <FaLightbulb className="text-blue-400 text-xl md:text-2xl lg:text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">Answer Selection</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    Each question presents <span className="text-blue-300 font-bold">4 plausible options</span> - 
                    select the most accurate response.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-5 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-blue-400 hover:bg-opacity-70 transition-all">
                <FaBrain className="text-blue-400 text-xl md:text-2xl lg:text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">Cognitive Approach</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    Engage your <span className="text-blue-300 font-bold">critical thinking skills</span> - 
                    this is about mental exercise as much as knowledge.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-5 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-blue-400 hover:bg-opacity-70 transition-all">
                <FaSmile className="text-blue-400 text-xl md:text-2xl lg:text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">Mindset</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    Maintain a <span className="text-blue-300 font-bold">positive, relaxed attitude</span> - 
                    intellectual growth comes from enjoyment.
                  </p>
                </div>
              </motion.li>
            </motion.ul>

            <motion.div variants={item} className="mt-8 md:mt-12 text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-bold shadow-lg transition-all group w-full md:w-auto"
                onClick={() => navigate('/QuestionPage')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center justify-center space-x-2 md:space-x-3">
                  <FaStar className="text-yellow-300" />
                  <span>Begin Intellectual Challenge</span>
                </span>
              </motion.button>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-gray-400 mt-4 md:mt-6 text-xs md:text-sm"
              >
                Embrace the joy of learning with our premium experience
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default NormalQuizInstruction;