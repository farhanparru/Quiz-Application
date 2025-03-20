// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDinersClub } from 'react-icons/fa';

const QuizPayment = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 shadow-xl rounded-xl overflow-hidden">
        {/* Payment Form */}
        <div className="p-8">
          <h2 className="text-4xl font-bold text-white mb-6">Secure Checkout</h2>
          
          <div className="space-y-6">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Card number</label>
              <div className="flex items-center bg-gray-700 p-3 rounded-lg">
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="flex-1 bg-transparent outline-none text-white"
                />
                <div className="flex space-x-2 text-white">
                  <FaCcVisa size={32} />
                  <FaCcMastercard size={32} />
                  <FaCcAmex size={32} />
                  <FaCcDinersClub size={32} />
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="text-gray-400 text-sm mb-2 block">Expiration</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-gray-700 p-3 rounded-lg text-white outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-400 text-sm mb-2 block">CVC</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full bg-gray-700 p-3 rounded-lg text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Country</label>
              <select className="w-full bg-gray-700 p-3 rounded-lg text-white outline-none">
                <option>United States</option>
                <option>India</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>
            </div>

            <button className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg">
              Pay $10 Entry Fee
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="p-8 bg-teal-700 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-6">Cash Prize Quiz Entry</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Entry Fee</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between">
                <span>First Prize</span>
                <span>$3000</span>
              </div>
              <div className="flex justify-between">
                <span>Second Prize</span>
                <span>$2000</span>
              </div>
              <div className="flex justify-between">
                <span>Third Prize</span>
                <span>$1000</span>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-400 pt-4 flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>$10.00</span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold">Support</h4>
            <p>+01 653 235 211 (International)</p>
            <p>support@quizapp.com (Email)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPayment;