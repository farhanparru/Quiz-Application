// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaClock, FaQuestionCircle, FaLightbulb, FaSmile } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function NormalQuizInstruction() {

 const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-900 to-teal-500 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">🎯 Normal Quiz Instructions</h2>

        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-700">Get Ready to Test Your Knowledge!</h1>
          <p className="text-gray-600 leading-relaxed text-center md:text-left">
            Welcome to the Normal Quiz! Play for fun, challenge yourself, and improve your knowledge. Follow these instructions to get started.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <FaClock className="text-blue-600 text-xl" />
              <span className="text-lg text-gray-700">Each quiz lasts for <strong>10 minutes</strong> – take your time and enjoy the challenge!</span>
            </li>

            <li className="flex items-center space-x-4">
              <FaQuestionCircle className="text-blue-600 text-xl" />
              <span className="text-lg text-gray-700">You ll get <strong>20 questions</strong> covering a variety of fun topics.</span>
            </li>

            <li className="flex items-center space-x-4">
              <FaLightbulb className="text-blue-600 text-xl" />
              <span className="text-lg text-gray-700">Each question has <strong>4 options</strong>. Choose the best answer!</span>
            </li>

            <li className="flex items-center space-x-4">
              <FaSmile className="text-blue-600 text-xl" />
              <span className="text-lg text-gray-700">Relax and have fun – it’s all about learning and enjoying the process!</span>
            </li>
          </ul>

          <div className="mt-8 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition duration-300"
               onClick={() => navigate('/QuestionPage')}>
              Start Normal Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NormalQuizInstruction;