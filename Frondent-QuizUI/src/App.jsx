// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quizinstrection from './components/Quiz/Quizinstrection';
import LoginPage from './components/Authentication/Login';
import Signup from './components/Authentication/Signup'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/Instruction" element={<Quizinstrection/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>    
    </Router>
  );
}

export default App;
