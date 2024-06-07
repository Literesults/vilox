"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import FaqImg from '../../assets/FaqImg.png';
import FaqChips from '@component/organisms/FaqChips';

const Faq = () => {
  return (
    <div className='my-4 lg:my-32 flex justify-center flex-col items-center relative' id='faq'>
      <h2
        className='font-bold text-center text-3xl'
        style={{ color: 'rgba(15, 15, 15, 1)' }}
      >
        Frequently Asked Questions (FAQs)
      </h2>
      <p
        className='text-xl font-normal text-center leading-4 my-3'
        style={{ color: 'rgba(55, 55, 55, 1)' }}
      >
        Any questions? We’ve got you.
      </p>

      <div className="lg:grid grid-cols-2 my-11"
        style={{ gap: '120px' }}
      >
        <div className="gridContent">
          <Image src={FaqImg} alt="FAQ Image" />
        </div>
        <div className="gridContent mt-18 relative">
          <ul className="relative p-6 lg:p-1"
            style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}
          >
            <FaqChips title="What is Vilox about?" content="
                    Vilox has been in business for a few years now, though we have been working offline. Judging from comments, we are rated one of the best exchange platforms.
                    We buy gift cards of all kinds, give you the best exchange rate, fast payment, very secure, and offer good customer service.
                " />
            <FaqChips title="What is Vilox about?" content="
                    Vilox has been in business for a few years now, though we have been working offline. Judging from comments, we are rated one of the best exchange platforms.
                    We buy gift cards of all kinds, give you the best exchange rate, fast payment, very secure, and offer good customer service.
                " />
            <FaqChips title="What is Vilox about?" content="
                    Vilox has been in business for a few years now, though we have been working offline. Judging from comments, we are rated one of the best exchange platforms.
                    We buy gift cards of all kinds, give you the best exchange rate, fast payment, very secure, and offer good customer service.
                " />
            <FaqChips title="What is Vilox about?" content="
                    Vilox has been in business for a few years now, though we have been working offline. Judging from comments, we are rated one of the best exchange platforms.
                    We buy gift cards of all kinds, give you the best exchange rate, fast payment, very secure, and offer good customer service.
                " />
            <FaqChips title="What is Vilox about?" content="
                    Vilox has been in business for a few years now, though we have been working offline. Judging from comments, we are rated one of the best exchange platforms.
                    We buy gift cards of all kinds, give you the best exchange rate, fast payment, very secure, and offer good customer service.
                " />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
