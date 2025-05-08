// src/components/QuizPayment.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const QuizPayment = () => {
  const entryFee = 75; // Easily updatable value
  const totalUsers = 100;
  const totalCollected = entryFee * totalUsers; // ₹7,500
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardFlip, setCardFlip] = useState(false);

  const prizes = [
    { position: '🥇 1st Prize', amount: '₹3,000' },
    { position: '🥈 2nd Prize', amount: '₹2,000' },
    { position: '🥉 3rd Prize', amount: '₹1,000' },
    { position: '🏅 Consolation (5)', amount: '₹200 each' }
  ];

  const banks = [
    { name: 'HDFC Bank', logo: 'https://logo.clearbit.com/hdfcbank.com' },
    { name: 'ICICI Bank', logo: 'https://logo.clearbit.com/icicibank.com' },
    { name: 'SBI', logo: 'https://logo.clearbit.com/sbi.co.in' },
    { name: 'Axis Bank', logo: 'https://logo.clearbit.com/axisbank.com' }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden font-sans bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 bg-white shadow-2xl rounded-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden backdrop-blur-lg bg-opacity-90 border border-white/20">
        {/* Left - Order Summary */}
        <div className="bg-gradient-to-b from-indigo-50 to-white p-8">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-indigo-100 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight leading-snug">
              Quiz Entry Summary
            </h1>
          </div>

          <div className="bg-white/80 rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Prize Pool Distribution
            </h3>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              {prizes.map((prize, index) => (
                <li key={index} className="flex justify-between py-1.5 px-2 rounded hover:bg-gray-50">
                  <span>{prize.position}</span> 
                  <span className="font-medium">{prize.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-700">Payment Summary</h3>
              <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">100 participants</span>
            </div>
            
            <div className="space-y-2 text-gray-600 text-sm">
              <div className="flex justify-between py-1.5 px-2">
                <span>Entry Fee</span> 
                <span>₹{entryFee}</span>
              </div>
              <div className="flex justify-between py-1.5 px-2 font-medium text-indigo-600">
                <span>Total Collected</span> 
                <span>₹{totalCollected}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-200">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 border border-indigo-100 rounded-lg text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Invoice
              </a>
            </div>
          </div>
        </div>

        {/* Right - Payment Form */}
        <div className="p-8 bg-white">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-indigo-100 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <button
              className={`flex-1 py-3 px-4 border rounded-xl font-medium min-w-[130px] transition flex items-center justify-center ${
                paymentMethod === 'card'
                  ? 'border-indigo-500 text-indigo-600 bg-indigo-50 shadow-sm'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Card
            </button>
            <button
              className={`flex-1 py-3 px-4 border rounded-xl font-medium min-w-[130px] transition flex items-center justify-center ${
                paymentMethod === 'bank'
                  ? 'border-indigo-500 text-indigo-600 bg-indigo-50 shadow-sm'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setPaymentMethod('bank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              Bank
            </button>
            <button
              className={`flex-1 py-3 px-4 border rounded-xl font-medium min-w-[130px] transition flex items-center justify-center ${
                paymentMethod === 'upi'
                  ? 'border-indigo-500 text-indigo-600 bg-indigo-50 shadow-sm'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setPaymentMethod('upi')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.5 10.5h-3a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v6a.5.5 0 01-.5.5zm7 0h-3a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v6a.5.5 0 01-.5.5zm7 0h-3a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v6a.5.5 0 01-.5.5zm-14 7h-3a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v6a.5.5 0 01-.5.5zm7 0h-3a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v6a.5.5 0 01-.5.5zm7 0h-3a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v6a.5.5 0 01-.5.5z" />
              </svg>
              UPI
            </button>
          </div>

          {paymentMethod === 'card' && (
            <div className="space-y-6">
              {/* Credit Card UI */}
              <div 
                className={`relative h-44 rounded-xl shadow-md overflow-hidden transition-all duration-500 transform ${cardFlip ? 'rotate-y-180' : ''}`}
                onClick={() => setCardFlip(!cardFlip)}
              >
                {/* Card Front */}
                <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 p-5 rounded-xl text-white transition-all duration-300 ${cardFlip ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-xs opacity-80 mb-1">Card Number</p>
                      <p className="text-lg tracking-widest">•••• •••• •••• 4242</p>
                    </div>
                    <div className="bg-white/20 p-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 28 28" fill="currentColor">
                        <path d="M11.5 15a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2zm4 0a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2zm4 0a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-80 mb-1">Card Holder</p>
                      <p className="text-sm">John Doe</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-80 mb-1">Expires</p>
                      <p className="text-sm">12/25</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs opacity-80 mb-1">CVC</p>
                      <p className="text-sm">•••</p>
                    </div>
                  </div>
                </div>
                
                {/* Card Back */}
                <div className={`absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 p-5 rounded-xl text-white transition-all duration-300 ${cardFlip ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="h-8 bg-black mt-4 mb-6"></div>
                  <div className="bg-white/90 p-2 rounded text-right">
                    <p className="text-gray-900 text-sm font-mono">•••</p>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">
                    <div className="text-xs opacity-70">
                      <p>Customer Service: 1800 123 4567</p>
                    </div>
                    <div className="text-xs opacity-70">
                      <p>VISA</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="•••"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                        onFocus={() => setCardFlip(true)}
                        onBlur={() => setCardFlip(false)}
                      />
                      <div className="absolute right-3 top-3 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input id="save-card" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="save-card" className="ml-2 block text-sm text-gray-700">Save card for future payments</label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  Pay ₹{entryFee}
                </button>
              </form>
            </div>
          )}

          {paymentMethod === 'bank' && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h3 className="font-medium text-gray-700 mb-3">Select Bank</h3>
                <div className="grid grid-cols-2 gap-3">
                  {banks.map((bank, index) => (
                    <button 
                      key={index}
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50/50 transition"
                    >
                      <img src={bank.logo} alt={bank.name} className="h-6 w-6 object-contain mr-2" />
                      <span className="text-sm font-medium text-gray-700">{bank.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                  <input
                    type="text"
                    placeholder="1234567890"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code</label>
                  <input
                    type="text"
                    placeholder="ABCD0123456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  Pay ₹{entryFee} via Bank Transfer
                </button>
              </form>
            </div>
          )}

          {paymentMethod === 'upi' && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="mx-auto w-24 h-24 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-700 mb-1">Pay via UPI</h3>
                <p className="text-sm text-gray-500 mb-4">Scan the QR code or enter your UPI ID</p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button className="py-2 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50/50 transition">
                    <img src="https://logo.clearbit.com/phonepe.com" alt="PhonePe" className="h-6 mx-auto" />
                  </button>
                  <button className="py-2 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50/50 transition">
                    <img src="https://logo.clearbit.com/gpay.google.com" alt="GPay" className="h-6 mx-auto" />
                  </button>
                  <button className="py-2 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50/50 transition">
                    <img src="https://logo.clearbit.com/paytm.com" alt="Paytm" className="h-6 mx-auto" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                  <input
                    type="text"
                    placeholder="username@upi"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="button"
                  className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  Verify & Pay ₹{entryFee}
                </button>
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Your payment is secured with 256-bit SSL encryption. 
              <a href="#" className="text-indigo-600 hover:underline ml-1">Learn more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPayment;