// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLifeRing, FaSignOutAlt, FaArrowRight } from 'react-icons/fa';
import correctSound from '../../assets/tunetank.com_correct-answer-bells.wav';
import wrongSound from '../../assets/wrong-answer-21-199825.mp3';

const Question = () => {
  const questions = [
    {
      question: "What has to be broken before you can use it?",
      options: ["A: Glass", "B: Code", "C: Egg", "D: Promise"],
      correctAnswer: "C: Egg",
    },
    {
      question: "I speak without a mouth and hear without ears. What am I?",
      options: ["A: Echo", "B: Shadow", "C: Dream", "D: Mirror"],
      correctAnswer: "A: Echo",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);

  const playCorrectSound = () => {
    const audio = new Audio(correctSound);
    audio.play();
  };

  const playWrongSound = () => {
    const audio = new Audio(wrongSound);
    audio.play();
  };

  const handleAnswerClick = (option) => {
    if (selected) return;
    setSelected(option);
    option === questions[currentQuestionIndex].correctAnswer
      ? playCorrectSound()
      : playWrongSound();
  };

  const handleNextQuestion = () => {
    setSelected(null);
    setTimeLeft(60);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const emojis = ["😀", "😊", "😐", "😟", "😱", "🔥"];
  const currentEmoji = emojis[Math.floor(timeLeft / 10)];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 bg-black shadow-md">
        <button className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-300">
          <FaLifeRing size={24} />
          <span>Technical Support</span>
        </button>

        <button className="flex items-center space-x-2 text-red-500 hover:text-red-300">
          <FaSignOutAlt size={24} />
          <span>Quit Quiz</span>
        </button>
      </nav>

      {/* Quiz Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full p-6 rounded-3xl border-4 border-yellow-500 shadow-lg">
          <motion.h1
            className="text-4xl font-bold text-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            🎯 Funny Quiz Time!
          </motion.h1>

          <motion.div
            className="text-6xl text-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {currentEmoji} {timeLeft}s
          </motion.div>

          <motion.div
            className="p-6 mb-8 border-4 border-yellow-500 rounded-xl text-center text-2xl"
            initial={{ y: -20 }}
            animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 1.5 } }}
          >
            {questions[currentQuestionIndex].question}
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleAnswerClick(option)}
                className={`p-4 border-4 rounded-xl text-xl transition-all bg-black hover:bg-yellow-500 hover:text-black ${
                  selected === option
                    ? option === questions[currentQuestionIndex].correctAnswer
                      ? "border-green-500 animate-pulse"
                      : "border-red-500 animate-shake"
                    : "border-yellow-500"
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Next Question Button */}
      <div className="flex justify-center p-4">
        <button
          onClick={handleNextQuestion}
          className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-300 text-xl"
        >
          <span>Next Question</span>
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Question;