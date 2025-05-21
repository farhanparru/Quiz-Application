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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-teal-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Luxury decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-400 rounded-full hidden sm:block"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-blue-400 rotate-45 hidden sm:block"></div>
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-xl overflow-hidden border border-blue-400 border-opacity-30 relative mx-2"
      >
        {/* Premium header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full pattern-dots pattern-opacity-50 pattern-size-4 pattern-blue-400"></div>
          </div>
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-extrabold text-white mb-1 flex items-center justify-center"
          >
            <FaStar className="mr-2 text-yellow-300" /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Premium Knowledge Challenge
            </span>
            <FaStar className="ml-2 text-yellow-300" />
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm text-blue-100 font-medium"
          >
            Sharpen Your Mind in Style
          </motion.p>
        </div>

        <div className="p-4 sm:p-6">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <motion.h1 variants={item} className="text-xl sm:text-2xl font-bold text-center text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
                Challenge Guidelines
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-gray-300 leading-relaxed text-center text-xs sm:text-sm max-w-2xl mx-auto">
              Experience our premium knowledge challenge designed to entertain and educate. 
              Follow these guidelines for an optimal experience.
            </motion.p>

            <motion.ul variants={container} className="space-y-3 mt-4">
              <motion.li variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-blue-400 hover:bg-opacity-70 transition-all">
                <FaClock className="text-blue-400 text-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Time Allocation</h3>
                  <p className="text-xs text-gray-300">
                    <span className="text-blue-300 font-bold">10 minutes</span> to complete all questions.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-blue-400 hover:bg-opacity-70 transition-all">
                <FaQuestionCircle className="text-blue-400 text-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Question Format</h3>
                  <p className="text-xs text-gray-300">
                    <span className="text-blue-300 font-bold">20 questions</span> across diverse domains.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-blue-400 hover:bg-opacity-70 transition-all">
                <FaLightbulb className="text-blue-400 text-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Answer Selection</h3>
                  <p className="text-xs text-gray-300">
                    <span className="text-blue-300 font-bold">4 options</span> per question.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-blue-400 hover:bg-opacity-70 transition-all">
                <FaBrain className="text-blue-400 text-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Cognitive Approach</h3>
                  <p className="text-xs text-gray-300">
                    Engage your <span className="text-blue-300 font-bold">critical thinking</span>.
                  </p>
                </div>
              </motion.li>

              <motion.li variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-blue-400 hover:bg-opacity-70 transition-all">
                <FaSmile className="text-blue-400 text-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Mindset</h3>
                  <p className="text-xs text-gray-300">
                    Maintain a <span className="text-blue-300 font-bold">positive attitude</span>.
                  </p>
                </div>
              </motion.li>
            </motion.ul>

            <motion.div variants={item} className="mt-6 text-center">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-lg transition-all group w-full sm:w-auto"
                onClick={() => navigate('/QuestionPage')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center justify-center space-x-2">
                  <FaStar className="text-yellow-300" />
                  <span>Begin Challenge</span>
                </span>
              </motion.button>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-gray-400 mt-3 text-xs"
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