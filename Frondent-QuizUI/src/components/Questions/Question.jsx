// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight ,FaArrowLeft} from "react-icons/fa";
import correctSound from '../../assets/tunetank.com_correct-answer-bells.wav';
import wrongSound from '../../assets/wrong-answer-21-199825.mp3';
import normalQuestion from '../../DummayQuestions/Normal.json'

const Question = () => {
  const questions = normalQuestion;
    
  

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
    setSelected(null); // Reset the selected answer to null (no answer selected).
    setTimeLeft(60); // Reset the timer to 60 seconds.
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length); // Move to the next question.
  };


const handlePrevQuestion = () => {
  if (currentQuestionIndex > 0) { // Check if the current question is not the first one.
    setSelected(null); // Reset the selected answer to null.
    setTimeLeft(60); // Reset the timer to 60 seconds.
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1); // Move to the previous question.
  }
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
      {/* Navigation Buttons */}
          <div className="flex justify-end p-4 space-x-4">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-300 text-xl disabled:opacity-50"
            >
              <FaArrowLeft size={24} />
              <span>Back Question</span>
            </button>
    
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
              className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-300 text-xl disabled:opacity-50"
            >
              <span>Next Question ({currentQuestionIndex + 1}/{questions.length})</span>
              <FaArrowRight size={24} />
            </button>
          </div>

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

          <div
            className="p-6 mb-8 border-4 border-yellow-500 rounded-xl text-center text-2xl"
           
          >
            {questions[currentQuestionIndex].question}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <motion.button
                key={index}
             
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

     
    </div>
  );
};

export default Question;