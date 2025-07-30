import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import logo from '../assets/DOCSLOT-logo.png'; // Assuming you have a logo image in your assets
const Navbar = () => {

  const navigate = useNavigate();

  const [showmenu , setShowMenu] = React.useState(false);
  const [token , setToken] = useState(true)

  return (
    <div className='flex items-center justify-between p-4 bg-white shadow-md'>
        <img onClick={()=>navigate('/')} src={logo} alt="docs logo" style={{ height: '60px' }} />
      <ul className='hidden md:flex items-center gap-6 text-bold-90'>
        <NavLink to="/">
        <li className='py-1'>Home</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/doctors">
        <li className='py-1'>All Doctor</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/about">
        <li className='py-1'>About</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/contact">
        <li className='py-1'>Contact</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        { 
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
               <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
               <img className='w-2.5' src={assets.dropdown_icon} alt="" />
               <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-stone-100 rouned flex flex-col  gap-4 p-4'>
                    <p onClick={()=>navigate('my-profile')} className='hover:text-blue-600 cursor pointer'>My Profile</p>
                    <p onClick={()=>navigate('my-appointment')} className='hover:text-blue-600 cursor pointer'>My Appointment</p>
                    <p onClick={() => { setToken(false)}} className='hover:text-blue-600 cursor pointer'>Logout</p>
                  </div>
               </div>
            </div>
            : <button onClick={()=>navigate('/login')} className='bg-blue-400 text-white px-6  py-3 rounded-full font le'>Create account</button> 
        }
        </div>
    </div>
  );
};

export default Navbar;
