import './home.scss';
import React, { useState } from 'react'
import HeadBg from '../../assets/images/bg-patch.png'
import Swiper from '../../components/Swiper';
import CustomSwiper from '../../components/Swiper';
import SectionWrapper from '../../components/SectionWrapper';

export default function Home() {

  return (
    <div>
      <div className='flex justify-between items-center'>
        <img src={HeadBg} className='w-1/4 opacity-75 h-52 object-cover' />
        <div>
          <h1 className='font-bold text-center text-amber-800 text-4xl'>Transform Your Space with Timeless Elegance</h1>
          <p className='pt-5 text-center text-lg'>Experience limitless design possibilities with versatile stretch ceiling solutions, available in over 70 colours and
            textures for a truly customized and captivating interior.</p>
        </div>
        <img src={HeadBg} className='w-1/4 opacity-75 h-52 object-cover' />
      </div>
      <div className='flex justify-center flex-col mt-5 client-bg px-20 py-10 gap-2'>
        <span className='text-amber-800 tracking-widest text-center'>OUR CLIENTS</span>
        <h2 className='text-center text'>Who are we working with</h2>
        <div className='flex justify-center places-box gap-2 flex-wrap px-24'>
          <span>Corporates<sub>20+</sub></span><span>Mall<sub>15+</sub></span><span>Resturants<sub>15+</sub></span><span>Hotels<sub>15+</sub></span><span>Residents<sub>15+</sub></span><span>Hospitals<sub>15+</sub></span>
        </div>
        </div>
      <div className='flex justify-center flex-col gap-5'>
        <h1 className='font-bold text-center text-amber-800 text-4xl mt-5 underline underline-offset-8'>Our Work</h1>
        <SectionWrapper>
          <CustomSwiper />
        </SectionWrapper>
      </div>
    </div>
  );
}
