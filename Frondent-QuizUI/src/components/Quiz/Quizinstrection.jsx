// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaMoneyBillWave, FaClock, FaCheckCircle, FaGift, FaTrophy, FaExclamationCircle } from 'react-icons/fa';

function CashPrizeQuizInstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-900 to-teal-500 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-8 animate-pulse">
          💰 Cash Prize Quiz Instructions
        </h2>

        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Your Path to Big Wins!</h1>
          <p className="text-gray-600 leading-relaxed text-center">
            Complete the quiz successfully and grab your share of exciting cash rewards! Follow the rules below to get started.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <FaClock className="text-yellow-600 text-3xl" />
              <span className="text-lg text-gray-800">
                You have <strong>20 minutes</strong> to complete the quiz.
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <FaMoneyBillWave className="text-yellow-600 text-3xl" />
              <span className="text-lg text-gray-800">
                Each correct answer boosts your <strong>cash prize</strong>.
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <FaCheckCircle className="text-yellow-600 text-3xl" />
              <span className="text-lg text-gray-800">
                Answer <strong>25 questions</strong> to win the grand prize.
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <FaGift className="text-yellow-600 text-3xl" />
              <span className="text-lg text-gray-800">
                Top scorers receive <strong>exclusive bonuses!</strong>
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <FaTrophy className="text-yellow-600 text-3xl" />
              <span className="text-lg text-gray-800">
                1st Prize: <strong>₹3000</strong>, 2nd Prize: <strong>₹2000</strong>, 3rd Prize: <strong>₹1000</strong>.
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <FaExclamationCircle className="text-red-600 text-3xl" />
              <span className="text-lg text-gray-800">
                Entry fee is <strong>non-refundable</strong>.
              </span>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg transition-transform transform hover:scale-105">
              🚀 Start Cash Prize Quiz
            </button>

            <p className="text-gray-700 mt-6">Register now and begin your winning journey!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashPrizeQuizInstruction;