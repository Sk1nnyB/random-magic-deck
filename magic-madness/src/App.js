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
          <Route  path='/magic-madness/' index element={<Home />} />
          <Route  path='/magic-madness/decks' element={<Decks />} />
          <Route  path='/magic-madness/random-effect' element={<RandomEffect/>} />
          <Route  path='/magic-madness/mafia' element={<Mafia />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
