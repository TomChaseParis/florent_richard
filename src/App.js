import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Mentions from './components/mentions/Mentions';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exactly path='/' element={<Home />} />
        <Route path='/mentions' element={<Mentions />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
