import React, { useState } from 'react';
import { RandomEffectButton } from './Button';
import '../App.css';
import './RandomEffectSection.css';
import effects from '../data/effects.js';
import effectsimg from '../images/effects/no-effect-card.jpg'

const RandomEffectSection = () => {
  const [randomEffect, setRandomString] = useState('');
  const [effectImage, setEffectImage] = useState(effectsimg);

  const generateRandomEffect= () => {
    const randomIndex = Math.floor(Math.random() * effects.length);
    setRandomString(effects[randomIndex].effect);
    setEffectImage(effects[randomIndex].image);
  };

  return (
    <div className='random-effect-container'>
      <video src='/videos/effect_background_remastered.mp4' autoPlay loop muted />
      <div class="box filter-box">
        <h3>Filters:</h3>
        <p>Coming soon...</p>
        <div className="btn">
          <RandomEffectButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={generateRandomEffect}>Generate Random Effect:</RandomEffectButton>
        </div>
      </div>

    <div class="box random-effect-box">
      <div class="text-container">
        <h2>Random Effect:</h2>
        <p>{randomEffect}</p>
      </div>
      <div class="image-container">
        <img src={effectImage} alt="Effect Image"></img>
      </div>
    </div>
  </div>
  );
};

export default RandomEffectSection;