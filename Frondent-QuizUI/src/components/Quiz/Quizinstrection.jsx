// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaMoneyBillWave, FaClock, FaCheckCircle, FaGift, FaTrophy, FaExclamationCircle, FaGem, FaCoins } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function CashPrizeQuizInstruction() {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-teal-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Luxury decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-gold rounded-full hidden sm:block"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-gold rotate-45 hidden sm:block"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-gold rounded-full hidden sm:block"></div>
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-xl overflow-hidden border border-gold border-opacity-30 relative mx-2"
      >
        {/* Luxury header */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full pattern-dots pattern-opacity-50 pattern-size-4 pattern-gold"></div>
          </div>
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-extrabold text-white mb-1 flex items-center justify-center"
          >
            <FaGem className="mr-2 text-white" /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
              Premium Cash Prize Quiz
            </span>
            <FaGem className="ml-2 text-white" />
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm text-yellow-100 font-medium"
          >
            Your Exclusive Path to Grand Rewards
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                How To Win Big
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-gray-300 leading-relaxed text-center text-xs sm:text-sm max-w-2xl mx-auto">
              Participate in our exclusive cash prize competition and stand a chance to win magnificent rewards. 
              Follow these golden rules to maximize your winning potential.
            </motion.p>

            <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <motion.div variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-yellow-500 hover:bg-opacity-70 transition-all">
                <FaClock className="text-yellow-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Time Challenge</h3>
                  <p className="text-xs text-gray-300">
                    <span className="text-yellow-400 font-bold">20 minutes</span> to complete all questions. 
                    Clock starts when you begin!
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-yellow-500 hover:bg-opacity-70 transition-all">
                <FaMoneyBillWave className="text-yellow-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Cash Rewards</h3>
                  <p className="text-xs text-gray-300">
                    Each correct answer increases your <span className="text-yellow-400 font-bold">prize money</span>.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-yellow-500 hover:bg-opacity-70 transition-all">
                <FaCheckCircle className="text-yellow-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Complete All</h3>
                  <p className="text-xs text-gray-300">
                    Answer all <span className="text-yellow-400 font-bold">25 questions</span> for grand prize eligibility.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-yellow-500 hover:bg-opacity-70 transition-all">
                <FaGift className="text-yellow-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Exclusive Bonuses</h3>
                  <p className="text-xs text-gray-300">
                    Top scorers get <span className="text-yellow-400 font-bold">special bonuses</span>!
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-yellow-500 hover:bg-opacity-70 transition-all">
                <FaTrophy className="text-yellow-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Grand Prizes</h3>
                  <p className="text-xs text-gray-300">
                    <span className="text-yellow-400 font-bold">1st: ₹5000</span>, 
                    <span className="text-yellow-400 font-bold"> 2nd: ₹3000</span>, 
                    <span className="text-yellow-400 font-bold"> 3rd: ₹2000</span>
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex items-start space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border-l-2 border-red-500 hover:bg-opacity-70 transition-all">
                <FaExclamationCircle className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">Important Notice</h3>
                  <p className="text-xs text-gray-300">
                    <span className="text-red-400 font-bold">Entry fee is non-refundable</span>.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="mt-6 text-center">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-lg transition-all group w-full sm:w-auto"
                onClick={() => navigate('/CashQueston')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center justify-center space-x-2">
                  <FaCoins className="text-white" />
                  <span>Start Premium Quiz</span>
                </span>
              </motion.button>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-gray-400 mt-3 text-xs"
              >
                By proceeding, you agree to our Terms and Conditions
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default CashPrizeQuizInstruction;