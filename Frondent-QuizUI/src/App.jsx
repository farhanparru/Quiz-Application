// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quizinstrection from './components/Quiz/Quizinstrection';
import LoginPage from './components/Authentication/Login';
import Signup from './components/Authentication/Signup'
import Normal from './components/Quiz/NormalquizInstrecti'
import NormalQuiz from './components/Authentication/NormalLogin'
import NormalQuizSignup from './components/Authentication/NormalSignup'
import QuizPaymnet from './components/payment/QuizPaymnet';
import Question from './components/Questions/Question';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/CashPrize/Instruction" element={<Quizinstrection/>}/>
        <Route path='/play/NormalQuiz/Instruction' element={<Normal/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/NormalQuizlogin' element={<NormalQuiz/>}/>
        <Route path='/Payment/cash' element={<QuizPaymnet/>}/>
        <Route path='/Normalsign' element={<NormalQuizSignup/>} />
        <Route path='/QuestionPage' element={<Question/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>    
    </Router>
  );
}

export default App;
