// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaClock, FaQuestionCircle, FaListOl } from 'react-icons/fa';

function QuizInstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">📚 Quiz Instructions</h2>

        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-700">How to Play the Game</h1>
          <p className="text-gray-600 leading-relaxed">
            Ensure you read these instructions carefully before starting the quiz.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <FaClock className="text-blue-600 text-xl" />
              <span className="text-lg text-gray-700">The game lasts for <strong>15 minutes</strong> and ends when time is up.</span>
            </li>

            <li className="flex items-center space-x-4">
              <FaQuestionCircle className="text-green-600 text-xl" />
              <span className="text-lg text-gray-700">Each game consists of <strong>15 questions</strong>.</span>
            </li>

            <li className="flex items-center space-x-4">
              <FaListOl className="text-purple-600 text-xl" />
              <span className="text-lg text-gray-700">Each question has <strong>4 options</strong> to choose from.</span>
            </li>
          </ul>

          <div className="mt-8 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition duration-300">
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizInstruction;
