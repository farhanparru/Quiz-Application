// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaUser, FaLock ,FaUsers} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const NormalLogin = () => {
    const navigate = useNavigate()

    return (
      <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-teal-900 to-teal-500">
        
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-white p-8">
          <div className="mb-8">
            <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-16 h-16 bg-teal-300 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">LOGO</h1>
          <p className="max-w-md text-center leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
  
   
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl w-full max-w-md">
            <h2 className="text-3xl font-semibold text-teal-600 mb-8 text-center">Welcome</h2>
            <div className="flex justify-center mb-6">
              <FaUsers className="text-teal-600 text-6xl" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center border-2 rounded-md p-2">
                <FaUser className="text-teal-600 mr-3" />
                <input
                  type="text"
                  placeholder="User Name / ID"
                  className="w-full outline-none"
                />
              </div>
  
              <div className="flex items-center border-2 rounded-md p-2">
                <FaLock className="text-teal-600 mr-3" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none"
                />
              </div>
  
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Stay signed in</span>
                </label>
                <a href="#" className="text-teal-600 hover:underline">Forgot User ID or Password?</a>
              </div>
  
              <button className="w-full bg-teal-600 text-white py-2 rounded-md
               hover:bg-teal-700 transition"  onClick={() => navigate('/play/NormalQuiz/Instruction')}>
                LOGIN
              </button>
  
              <p className="text-center text-sm mt-4">
                Not registered yet? <a href="/Signup" className="text-teal-600 hover:underline">Create your account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default NormalLogin
