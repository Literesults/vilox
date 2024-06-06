import { useState } from 'react';


export const MobileView = () => {
    const [navbarHide, navbarOpen] = useState(false);
    const  menu= () =>{
        navbarOpen(!navbarHide)
      }

    return (
        <>
      <button className='lg:hidden block' onClick={menu}>Menu</button>
            {navbarHide && (
                <ul className='lg:flex gap-10 m-0 p-0 justify-end items-center mobileView' >
                    <li className='list-none'>
                        <a href="#"
                            className='font-normal'>
                            Home
                        </a>
                    </li>
                    <li className='list-none'>
                        <a href="#whyUs"
                            className='font-normal'>
                            Why use Vilox
                        </a>
                    </li>
                    <li className='list-none'>
                        <a href="#about"
                            className='font-normal'>
                            About Vilox
                        </a>
                    </li>
                    <li className='list-none'>
                        <a href="#faq"
                            className='font-normal'
                            style={{ color: 'rgb(15, 15, 15);' }}
                        >
                            FAQs
                        </a>
                    </li>
                    <li className='list-none'>
                        <a href="#contact"
                            className='font-normal'
                            style={{ color: 'rgb(15, 15, 15);' }}
                        >
                            Contact us
                        </a>
                    </li>
                    <button className="px-6 py-3 rounded"
                        style={{ border: '2px solid rgb(15, 15, 15)' }}
                    >Download App</button>
                </ul>
            )
            }</>
    )
}
