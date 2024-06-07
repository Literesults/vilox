
import Image from 'next/image';
import HeroImg from '../../assets/heroInfo.png'
import GooglePlay from '../../assets/googleButton.png'
import AppStore from '../../assets/appStoreButton.png'


 const Hero = () => {
  
  return (
    <div className="hero container w-full flex flex-col p-6 lg:pt-16  lg:p-44 text-center overflow-hidden mx-auto" 
    >
       <div className="textInfo pt-10">
       <h1 className="font-bold lg:text-7xl text-center py-4 text-4xl"
      data-aos="zoom-in"
        style={{color: '#0F0F0F',
        }}>
         
          Easily trade your Gift Cards & Cryptocurrencies with Vilox
        </h1>     
        <p
        data-aos="fade-up" 
        className="font-normal lg:text-2xl text-1xl text-center"
         style={{
            color: '#373737',
            lineHeight: 'normal'
         }}
        >
        Exchange can never go wrong with Vilox. We buy all kinds of gift card and Cryptocurrencies available.
        </p>
        <div className="buttonDivs flex my-10 justify-center space-x-6 items-center" data-aos="fade-up" data-aos-delay="300" >
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