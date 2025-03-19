// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaUser, FaLock, FaEnvelope,FaUserPlus } from 'react-icons/fa';


const NormalSignup = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-teal-900 to-teal-500">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-white p-8">
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center">
            <FaUserPlus className="text-white text-6xl" />
          </div>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">LOGO</h1>
        <p className="max-w-md text-center leading-relaxed">
          Create an account and join our community today. Enjoy exclusive features and benefits with just a few clicks.
        </p>
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-semibold text-teal-600 mb-8 text-center">Sign Up</h2>
          <div className="space-y-6">
            <div className="flex items-center border-2 rounded-md p-2">
              <FaUser className="text-teal-600 mr-3" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border-2 rounded-md p-2">
              <FaEnvelope className="text-teal-600 mr-3" />
              <input
                type="email"
                placeholder="Email Address"
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

            <div className="flex items-center border-2 rounded-md p-2">
              <FaLock className="text-teal-600 mr-3" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full outline-none"
              />
            </div>

            <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition">
              SIGN UP
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account? <a href="/NormalQuizlogin" className="text-teal-600 hover:underline">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalSignup
