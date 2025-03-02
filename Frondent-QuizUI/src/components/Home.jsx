// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet";
import background from "../assets/Images/did-you-know-idea-concept-template-with-light-bulb-design_1017-53689.jpg"; // Ensure the correct path

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Quiz App - Home</title>
      </Helmet>

 
      <div
        className="w-full h-screen bg-cover bg-center flex justify-center items-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
      
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-70"></div>

     
        <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg p-12 rounded-2xl text-center shadow-2xl border border-gray-500 w-96">
        
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-black font-extrabold text-3xl">Q</span>
            </div>
          </div>

     
          <h1 className="text-white text-5xl font-extrabold mb-8 tracking-widest drop-shadow-lg">
            InstaQuiz
          </h1>

       
          <div className="space-y-6">
         <button className="w-full neon-button bg-green-500 py-3 rounded-xl text-xl font-bold shadow-lg hover:scale-105 transition-all duration-300">
              🎮 Play
            </button>


            <div className="flex justify-between space-x-4">
              <button className="w-1/2 neon-button bg-red-500 py-3 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition-all duration-300">
                🔑 Login
              </button>
              <button className="w-1/2 neon-button bg-blue-500 py-3 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition-all duration-300">
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
