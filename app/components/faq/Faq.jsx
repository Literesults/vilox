"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import FaqImg from '../../assets/FaqImg.png';
import { FaAngleUp } from 'react-icons/fa';

const Faq = () => {
  const [hideContent, displayContent] = useState(false);
  const [hideContent1, displayContent1] = useState(false);
  const [hideContent2, displayContent2] = useState(false);
  const [hideContent3, displayContent3] = useState(false);
  const [hideContent4, displayContent4] = useState(false);

  const toggleContent = () => {
    displayContent(!hideContent);
  };
  const toggleContent1 = () => {
    displayContent1(!hideContent1);
  };
  const toggleContent2 = () => {
    displayContent2(!hideContent2);
  };
  const toggleContent3 = () => {
    displayContent3(!hideContent3);
  };
  const toggleContent4 = () => {
    displayContent4(!hideContent4);
  };

  return (
    <div className='my-4 lg:my-32 flex justify-center flex-col items-center relative' id='faq'>
      <h2
        className='font-bold text-center text-3xl text-linkColor'

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
        <div className="gridContent" data-aos="fade-out">
          <Image src={FaqImg} alt="FAQ Image" />
        </div>
        <div className="gridContent mt-18 relative">
          <ul className="relative p-6 lg:p-1" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            <div data-aos="fade-in">
              <li
                className='flex text-linkColor font-[600] text-[16px] cursor-pointer'
             
                
                onClick={toggleContent}
              >
                <span> What is Vilox about?</span>
                <span>
                  <FaAngleUp className='text-end' />
                </span>
              </li>
              {hideContent && (
                <div className="dropdown top-10">
                  Vilox has been in business for a few years now, though we have been working offline. Judging from comments, we are rated one of the best exchange platforms.
                  We buy gift cards of all kinds, give you the best exchange rate, fast payment, very secure, and offer good customer service.
                </div>
              )}
            </div>
            <div data-aos="fade-out" data-aos-delay="100">
              <li className='text-linkColor font-[600] text-[16px] cursor-pointer'
              
                onClick={toggleContent1}
              >
                How do I download the Vilox app?
              </li>
              {hideContent1 && (
                <div className="dropdown top-10">
                  Vilox has been in business for a few years now, though we have been working offline. Judging from comments, we are rated one of the best exchange platforms.
                  We buy gift cards of all kinds, give you the best exchange rate, fast payment, very secure, and offer good customer service.
                </div>
              )}
            </div>
            <div className="" data-aos="fade-out" data-aos-delay="200">
              <li
                className='text-linkColor font-[600] text-[16px] cursor-pointer'
                onClick={toggleContent2}
              >
                What is Vilox gift card rate?
              </li>
              {hideContent2 && (
                <div className="dropdown">
                  Vilox has been in business for a few years now, though we have been working offline. Judging from comments, we are rated one of the best exchange platforms.
                  We buy gift cards of all kinds, give you the best exchange rate, fast payment, very secure, and offer good customer service.
                </div>
              )}
            </div>
            <div data-aos="fade-down" data-aos-delay="300">
              <li
               className='text-linkColor font-[600] text-[16px] cursor-pointer'
                onClick={toggleContent3}
              >
                Which cryptocurrency does Vilox buy?
              </li>
              {hideContent3 && (
                <div className="dropdown top-3">
                  Vilox has been in business for a few years now, though we have been working offline. Judging from comments, we are rated one of the best exchange platforms.
                  We buy gift cards of all kinds, give you the best exchange rate, fast payment, very secure, and offer good customer service.
                </div>
              )}
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <li
              className='text-linkColor font-[600] text-[16px] cursor-pointer'
                onClick={toggleContent4}
              >
                Does Vilox Sell Cryptocurrency to users?
              </li>
              {hideContent4 && (
                <div className="dropdown top-3">
                  Vilox has been in business for a few years now, though we have been working offline. Judging from comments, we are rated one of the best exchange platforms.
                  We buy gift cards of all kinds, give you the best exchange rate, fast payment, very secure, and offer good customer service.
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
