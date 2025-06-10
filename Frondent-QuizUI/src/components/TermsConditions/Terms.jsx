import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/quizmaster-logo.png" // Replace with your logo path
              alt="Quizmaster Logo"
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Hero Image */}
          <div className="h-48 bg-blue-600 flex items-center justify-center">
            <img 
              src="/terms-hero.jpg" // Replace with your image path
              alt="Terms and Conditions"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <div className="p-8 sm:p-10">
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Quizmaster</h2>
              <p className="text-gray-600 mb-6">
                These Terms and Conditions outline the rules and regulations for the use of Quizmaster s Website and services.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/quiz-icon.png" // Replace with your icon path
                    alt="Quiz Icon"
                    className="h-12 w-12"
                  />
                </div>
                <p className="text-gray-600">
                  By accessing this website and using our services, you accept these terms and conditions in full.
                </p>
              </div>
            </section>

            {/* Terms Sections */}
            <section className="space-y-10">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Intellectual Property Rights</h3>
                <p className="text-gray-600">
                  Unless otherwise stated, Quizmaster and/or its licensors own the intellectual property rights for all material on Quizmaster. All intellectual property rights are reserved.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. User Responsibilities</h3>
                <p className="text-gray-600 mb-4">
                  As a user of our platform, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Republish material from Quizmaster without permission</li>
                  <li>Sell, rent or sub-license material from Quizmaster</li>
                  <li>Use our services in any way that is damaging to the platform</li>
                  <li>Engage in any data mining or similar extraction methods</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Quiz Content</h3>
                <div className="flex flex-col md:flex-row gap-6 items-start mb-4">
                  <img 
                    src="/quiz-content.jpg" // Replace with your image path
                    alt="Quiz Content"
                    className="w-full md:w-1/3 rounded-lg shadow-md"
                  />
                  <p className="text-gray-600 flex-1">
                    All quiz content is provided for educational and entertainment purposes only. While we strive for accuracy, we do not guarantee that all information is complete or correct. Users participate in quizzes at their own discretion.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Privacy Policy</h3>
                <p className="text-gray-600">
                  Your privacy is important to us. Please review our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>, which explains how we collect, use, and protect your personal information.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Modifications</h3>
                <p className="text-gray-600">
                  Quizmaster reserves the right to modify these terms at any time. We'll notify you of any changes by posting the new Terms and Conditions on this page.
                </p>
              </div>
            </section>

            {/* Acceptance Section */}
            <section className="mt-12 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <div className="mr-4 hidden sm:block">
                  <img 
                    src="/accept-terms.png" // Replace with your icon path
                    alt="Accept Terms"
                    className="h-16 w-16"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Acceptance of Terms</h3>
                  <p className="text-gray-600">
                    By using our website and services, you signify your acceptance of these terms. If you do not agree to these terms, please do not use our website.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Quizmaster. All rights reserved.</p>
          <p className="mt-2">Contact us at <a href="mailto:support@quizmaster.com" className="text-blue-600 hover:underline">support@quizmaster.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Terms;