import './home.scss';
import React, { useState } from 'react'
import carouselImages from '../../assets/carousel/carouselImages';

export default function Home() {

  return (
    <div className='carousel-con mb-8'>
      <div className='py-10 flex justify-center items-center flex-col'>
        <h1 className='w-2/3 font-bold text-center text-amber-800 text-4xl'>Transform Your Space with Timeless Elegance</h1>
        <p className='pt-5 w-3/6 text-center text-lg'>Experience limitless design possibilities with versatile stretch ceiling solutions, available in over 70 colours and
          textures for a truly customized and captivating interior.</p>
      </div>
    </div>
  );
}
