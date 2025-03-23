// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaRocketchat } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">Get in <span className="text-purple-400">Touch</span></h1>
      <p className="text-lg mb-12 text-center max-w-2xl">Reach out to us for any technical support or queries. Let s create a seamless quiz experience together!</p>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 p-3 bg-gray-700 rounded-lg focus:outline-none" />
              <input type="text" placeholder="Last Name" className="w-1/2 p-3 bg-gray-700 rounded-lg focus:outline-none" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none"></textarea>
            <button type="submit" className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">Send Message 🚀</button>
          </form>
        </div>

        {/* Chat Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center">
          <FaRocketchat className="text-6xl text-purple-400 mb-6" />
          <h2 className="text-2xl font-semibold mb-4">Live Chat Support</h2>
          <p className="text-center mb-6">Need quick help? Our support team is available to assist you in real-time.</p>
          <button className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">Start Chat 💬</button>
        </div>
      </div>

      <p className="mt-16 text-sm text-gray-400"> Every query takes us one step closer to perfecting the MasterQuiz experience."</p>
    </div>
  );
};

export default Support;