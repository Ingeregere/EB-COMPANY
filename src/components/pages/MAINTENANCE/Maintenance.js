import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Maintenance() {
  return (
    <>

          <HeroSection {...homeObjTwo} />
          <HeroSection {...homeObjOne} />
         <HeroSection {...homeObjThree} />
          <HeroSection {...homeObjFour} />
    </>
  );
}

export default Maintenance;
