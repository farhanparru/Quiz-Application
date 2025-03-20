// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import correctSound from '../../assets/tunetank.com_correct-answer-bells.wav';

const Question = () => {
  const question = "What has to be broken before you can use it?";
  const options = ["A: Glass", "B: Code", "C: Egg", "D: Promise"];
  const correctAnswer = "C: Egg";

  const [selected, setSelected] = useState(null);

  // Play Correct Sound
  const playCorrectSound = () => {
    const audio = new Audio(correctSound);
    audio.play();
  };

  // Handle Answer Click
  const handleAnswerClick = (option) => {
    setSelected(option);
    if (option === correctAnswer) playCorrectSound();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="max-w-4xl w-full p-6 rounded-3xl border-4 border-yellow-500 shadow-lg">

        {/* Quiz Title */}
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          🎯 Funny Quiz Time!
        </motion.h1>

        {/* Question */}
        <motion.div
          className="p-6 mb-8 border-4 border-yellow-500 rounded-xl text-center text-2xl"
          initial={{ y: -20 }}
          animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 1.5 } }}
        >
          {question}
        </motion.div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-6">
          {options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleAnswerClick(option)}
              className={`p-4 border-4 rounded-xl text-xl transition-all bg-black hover:bg-yellow-500 hover:text-black ${
                selected === option && option === correctAnswer
                  ? "border-green-500 animate-pulse"
                  : "border-yellow-500"
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Question;
