"use client";
import Image from 'next/image';
import Logo from '../../assets/viloxLogo.png';
import { MobileView } from './MobileView';

const Navbar = () => {

  return (
    <div className="navbar container-fluid flex lg:px-14 px-5 py-4 justify-between items-center fixed bg-white w-full right-0 left-0 top-0 shadow-md"
    style={{zIndex: '999'}}
    >
      <a href="#">
          <Image src={Logo} alt="Vilox Logo" className='mobileViewLogo' />
      </a>
     < ul className='lg:flex gap-10 m-0 p-0 justify-end items-center hidden' >
         <li className='list-none'>
           <a href="/"
           className='font-normal'>
             Home
           </a>
         </li>
           <a href="#whyUs"
           className='font-normal'>
             Why use Vilox
           </a>
         <li className='list-none'>
           <a href="#about"
           className='font-normal'>
            About Vilox
           </a>
         </li>
         <li className='list-none'>
           <a href="#faq"
           className='font-normal'
             style={{color: 'rgb(15, 15, 15);'}}
           >
            FAQs
           </a>
         </li>
         <li className='list-none'>
           <a href="#contact"
           className='font-normal'
           style={{color: 'rgb(15, 15, 15);'}}
           >
             Contact us
           </a>
         </li>
           <button className="px-6 py-3 rounded"
           style={{border: '2px solid rgb(15, 15, 15)'}}
           >Download App</button>
       </ul>
   <MobileView />
     
    </div>
  );
}

export default Navbar;
