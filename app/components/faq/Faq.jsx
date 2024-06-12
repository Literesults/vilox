"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import FaqImg from '../../assets/FaqImg.png';
import { FaAngleUp } from 'react-icons/fa';

const Faq = () => {
  return (
    <div className='my-4 lg:my-32 flex justify-center flex-col items-center relative' id='faq'>
      <h2
        className='font-bold text-center text-3xl'
        style={{ color: 'rgba(15, 15, 15, 1)' }}
        data-aos="fade-up"
      >
        Frequently Asked Questions (FAQs)
      </h2>
      <p
        className='text-xl font-normal text-center leading-4 my-3'
        style={{ color: 'rgba(55, 55, 55, 1)' }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Any questions? We’ve got you.
      </p>

      <div className="lg:grid grid-cols-2 my-11" style={{ gap: '120px' }}>
        <div className="gridContent" data-aos="zoom-out">
          <Image src={FaqImg} alt="FAQ Image" />
        </div>
        <div className="gridContent mt-18 relative">
          <ul className="relative p-6 lg:p-1" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
