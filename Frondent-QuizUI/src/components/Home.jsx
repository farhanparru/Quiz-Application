// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import background from "../assets/Images/did-you-know-idea-concept-template-with-light-bulb-design_1017-53689.jpg"; // Ensure the correct path

const Home = () => {

   const navigate = useNavigate()


  return (
    <>
      <Helmet>
        <title>Quiz App - Home</title>
      </Helmet>

      <div
        className="w-full h-screen bg-cover bg-center flex justify-center items-center relative px-4 md:px-8"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-70"></div>

        <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg p-6 md:p-12 rounded-xl text-center shadow-2xl border border-gray-500 w-full max-w-sm sm:max-w-md md:max-w-lg">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-black font-extrabold text-2xl md:text-3xl">Q</span>
            </div>
          </div>

          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 tracking-widest drop-shadow-lg">
            InstaQuiz
          </h1>

          <div className="space-y-4 md:space-y-6">
            <button className="w-full neon-button bg-green-500 py-3 rounded-xl text-lg md:text-xl font-bold shadow-lg hover:scale-105 transition-all duration-300" onClick={() => navigate('/play/Instruction')}>
              🎮 Play
            </button>

            <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-1/2 neon-button bg-red-500 py-3 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition-all duration-300" onClick={() => navigate('/Login')}>
                🔑 Login
              </button>
              <button className="w-full sm:w-1/2 neon-button bg-blue-500 py-3 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition-all duration-300" onClick={() => navigate('/Signup')}>
                📝 Signup
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .neon-button {
            position: relative;
            color: white;
            overflow: hidden;
          }
          .neon-button::before {
            content: '';
            position: absolute;
            top: -100%;
            left: -100%;
            width: 300%;
            height: 300%;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 10%, rgba(255,255,255,0) 80%);
            transition: all 0.4s;
          }
          .neon-button:hover::before {
            top: 0;
            left: 0;
          }
        `}
      </style>
    </>
  );
};

export default Home;
