import React from 'react';
import HeroImg from '../../assets/header.jpeg'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero' id="hero">
      <div className='mask'>
         <img className='intro-img' src={HeroImg} alt="IntroImg" />
     </div>
      <div className='content'>
        <h1 className="content-title" style={{ color: 'white' }}>FLORENT RICHARD</h1>
        <h2 className='text-xl max-sm:text-sm text-white'>CHANTEUR - MUSICIEN - COMPOSITEUR</h2>
      </div>
    </div>
  );
};


export default Hero;
