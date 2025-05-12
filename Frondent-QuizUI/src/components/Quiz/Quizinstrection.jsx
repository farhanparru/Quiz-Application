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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-teal-900 flex items-center justify-center p-4 md:p-19 relative overflow-hidden">
      {/* Luxury decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-gold rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-gold rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-gold rounded-full"></div>
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-3xl overflow-hidden border border-gold border-opacity-30 relative mx-2 md:mx-0"
      >
        {/* Luxury header - adjusted for mobile */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-4 md:p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 hidden md:block">
            <div className="absolute top-0 left-0 w-full h-full bg-gold pattern-dots pattern-opacity-50 pattern-size-6 pattern-gold"></div>
          </div>
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 flex flex-col md:flex-row items-center justify-center"
          >
            <FaGem className="md:mr-4 mb-2 md:mb-0 text-white" /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
              Premium Cash Prize Quiz
            </span>
            <FaGem className="md:ml-4 mt-2 md:mt-0 text-white" />
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-xl text-yellow-100 font-medium"
          >
            Your Exclusive Path to Grand Rewards
          </motion.p>
        </div>

        <div className="p-4 md:p-8 lg:p-12">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6 md:space-y-10"
          >
            <motion.h1 variants={item} className="text-2xl md:text-3xl font-bold text-center text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                How To Win Big
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-gray-300 leading-relaxed text-center text-sm md:text-lg max-w-3xl mx-auto">
              Participate in our exclusive cash prize competition and stand a chance to win magnificent rewards. 
              Follow these golden rules to maximize your winning potential.
            </motion.p>

            <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-12">
              <motion.div variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-yellow-500 hover:bg-opacity-70 transition-all">
                <FaClock className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Time Challenge</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    You have <span className="text-yellow-400 font-bold">20 minutes</span> to complete all questions. 
                    The clock starts when you begin!
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-yellow-500 hover:bg-opacity-70 transition-all">
                <FaMoneyBillWave className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Cash Rewards</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    Each correct answer increases your <span className="text-yellow-400 font-bold">prize money</span>. 
                    More correct answers = bigger payout!
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-yellow-500 hover:bg-opacity-70 transition-all">
                <FaCheckCircle className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Complete All Questions</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    Answer all <span className="text-yellow-400 font-bold">25 questions</span> to be eligible 
                    for the grand prize.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-yellow-500 hover:bg-opacity-70 transition-all">
                <FaGift className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Exclusive Bonuses</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    Top scorers receive <span className="text-yellow-400 font-bold">special bonuses</span> 
                    beyond the cash prizes!
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-yellow-500 hover:bg-opacity-70 transition-all">
                <FaTrophy className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Grand Prizes</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    <span className="text-yellow-400 font-bold">1st Prize: ₹5000</span>, 
                    <span className="text-yellow-400 font-bold"> 2nd Prize: ₹3000</span>, 
                    <span className="text-yellow-400 font-bold"> 3rd Prize: ₹2000</span>
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 bg-gray-800 bg-opacity-50 rounded-xl border-l-4 border-red-500 hover:bg-opacity-70 transition-all">
                <FaExclamationCircle className="text-red-500 text-2xl md:text-3xl lg:text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Important Notice</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300">
                    The <span className="text-red-400 font-bold">entry fee is non-refundable</span>. 
                    Please ensure you re ready before starting.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="mt-8 md:mt-16 text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-6 py-3 md:px-12 md:py-5 rounded-full text-base md:text-xl font-bold shadow-lg transition-all group w-full md:w-auto"
                onClick={() => navigate('/CashQueston')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center justify-center space-x-2 md:space-x-3">
                  <FaCoins className="text-white" />
                  <span>Start Premium Quiz</span>
                </span>
              </motion.button>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-gray-400 mt-4 md:mt-6 text-xs md:text-lg"
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