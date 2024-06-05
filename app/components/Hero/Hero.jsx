import React from 'react'
import Image from 'next/image';
import HeroImg from '../../assets/heroInfo.png'
import GooglePlay from '../../assets/googleButton.png'
import AppStore from '../../assets/appStoreButton.png'

 const Hero = () => {
  return (
    <div className="hero container w-full flex flex-col p-6 lg:pt-16  lg:p-44 text-center overflow-hidden" 
    >
       <div className="textInfo">
       <h1 className="font-bold lg:text-7xl text-center py-4 text-4xl" 
        style={{color: '#0F0F0F',
        }}>
          Easily trade your Gift Cards & Cryptocurrencies with Vilox
        </h1>     
        <p
        className="font-normal lg:text-2xl text-1xl text-center"
         style={{
            color: '#373737',
            lineHeight: '32px'
         }}
        >
        Exchange can never go wrong with Vilox. We buy all kinds of gift card and Cryptocurrencies available.
        </p>
        <div className="buttonDivs flex my-10 justify-center space-x-6 items-center" >
           <a href="">
           <Image src={GooglePlay} alt="" />
           </a>
           <a href="">
           <Image src={AppStore} alt="" />
           </a>
        </div>
       </div>
       <div className="imgInfo flex justify-center" >
        <Image src={HeroImg}  />
       </div>
    </div>
  )
}

export default Hero