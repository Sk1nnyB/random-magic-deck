import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Decks from './components/pages/Decks';
import RandomEffect from './components/pages/RandomEffect';
import Mafia from './components/pages/Mafia';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route  path='/' exact element={<Home />} />
          <Route  path='/decks' element={<Decks />} />
          <Route  path='/random-effect' element={<RandomEffect/>} />
          <Route  path='/mafia' element={<Mafia />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
