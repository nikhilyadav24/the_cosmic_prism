import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useState } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[clamp(250px,86vw,1800px)] flex items-center justify-between py-2 font-medium px-6 rounded-full mt-4 bg-white/10 backdrop-blur-md z-50 shadow-md text-white">
      <NavLink to="/" className="flex flex-col items-center gap-1">
      <img src={assets.logo} id="logo" alt="logo" className="w-32" />
      </NavLink>

      <ul className="hidden md:flex gap-5 text-sm text-white">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer "/>
        <div className="group relative">
          <Link to="/login">
            <img src={assets.profile_icon} alt="" className="w-5 cursor-pointer"/>
          </Link> 
        </div>
          <Link to="/cart" className="relative ">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5 " />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        {/* visibility toggle on off */}
        <img src={assets.menu_icon} alt="" className="w-5 cursor-pointer md:hidden " onClick={() => setVisible(!visible)}/>
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute z-10 top-0 right-0 bottom-0 overflow-hidden bg-green-500 rounded-[30px] backdrop-blur-md ${visible ? 'w-full h-[60vh] top-0 left-0 ' : 'w-0'}`} >
        <div className="flex flex-col text-gray-600 ">
          <div onClick={() => {setVisible(false)}} className="flex items-center gap-4 p-10 cursor-pointer">
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p className="font-semibold">Back</p>
          </div>

          <NavLink onClick={() => {setVisible(false)}} className="py-4 pl-10 " to="/">
            {' '}
            HOME{' '}
          </NavLink>
          <NavLink onClick={() => {setVisible(false)}} className="py-4 pl-10 " to="/collection">
            {' '}
            COLLECTION{' '}
          </NavLink>
          <NavLink onClick={() => {setVisible(false)}} className="py-4 pl-10 " to="/about">
            {' '}
            ABOUT{' '}
          </NavLink>
          <NavLink onClick={() => {setVisible(false)}} className="py-4 pl-10 " to="/contact">
            {' '}
            CONTACT{' '}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




//Notes
// useState – to manage state
// The useState hook lets you add reactive state to a functional component.

// useEffect – to handle side effects
// The useEffect hook lets you run code after rendering, like fetching data, setting up subscriptions, timers, etc.

// ex - 
// import React, { useState, useEffect } from 'react';

// function WatchCount() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Count changed: ${count}`);
//   }, [count]); // runs whenever `count` changes

//   return <button onClick={() => setCount(count + 1)}>Increase</button>;
// }
