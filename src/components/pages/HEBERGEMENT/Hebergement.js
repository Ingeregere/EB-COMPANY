import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Hebergement() {
  return (
    <>
          <HeroSection {...homeObjThree} />
          <HeroSection {...homeObjOne} />
          <HeroSection {...homeObjTwo} />
          <HeroSection {...homeObjFour} />
    </>
  );
}

export default Hebergement;
