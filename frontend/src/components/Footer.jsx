import React from 'react'
import { assets } from '../assets/assets'
import logo from '../assets/DOCSLOT-logo.png';

const Footer = () => {
  return (
    <div className='md:mx-10'>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         
          {/*----- Left Section-----*/}
         <div>
            <img className='mb-5 w-40' src={logo} alt="docs logo"style={{ height: '60px' }}  />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Docslot helps you find trusted doctors and book appointment easily/ Your health, our priority- anytime.anywhere.</p>
         </div>
        
         {/*----- Center Section-----*/}
         <div>
             <p className='text-xl font-medium mb-5'>Company</p>
             <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
             </ul>
         </div>

         {/*----- Right Section-----*/}
         <div>
             <p className='text-xl font-medium mb-5'>Get in touch</p>
             <ul className='flex flex-col gap-2 text-gray-600'>
                <li>838928392</li>
                <li>rushikeshkadam09@gmail.com</li>
             </ul>
         </div>
        </div> 

        {/*------Copyright Text------*/}
      <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2025@ Docslot- All Right Reserved.</p>  
      </div> 
    </div>
  )
}

export default Footer