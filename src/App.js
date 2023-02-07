import './App.css';
import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NewPage from './pages/NewPage/NewPage';
import TrendingPage from './pages/TrendingPage/TrendingPage';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='new' element={<NewPage />} />
          <Route path='trending' element={<TrendingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
