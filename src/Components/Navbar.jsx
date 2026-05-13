import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import userIcon from '../assets/user.png';

const Navbar = () => {
 
  const links = (
    <>
      <li>
        <NavLink className={"font-bold text-xl"} to="/">Home</NavLink>
      </li>

      <li>
        <NavLink className={"font-bold text-xl"} to="/my-profile">My Profile</NavLink>
      </li>
    </>
  );


  return (
    <div className='mt-5'>
      <div className="navbar shadow-sm rounded-sm bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>


            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content absolute bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow  ">
              {links}
            </ul>
          </div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-1 px-3">
         
              <div className='login-btn flex items-center gap-1'>

                <img
                  className='w-7 md:w-[40px] h-7 md:w-[40px]  rounded-full'
                  // src={`${user ?user.photoURL:userIcon}`} 
                  src={userIcon}
                  alt="User"
                />
                      <Link
                        to='/auth/login'
                        className='btn border-0 bg-sky-700 text-white px-3 md:px-6 text-xs md:text-base'
                      >
                        Login
                      </Link>

                      <Link
                        to='/auth/signup'
                        className='btn border-0 bg-sky-700 text-white px-3 md:px-6 text-xs md:text-base'
                      >
                        Sign Up
                      </Link>
                 
                    <button
                    //   onClick={handleLogOut}
                      className='btn border-0 bg-red-600 text-white px-6'
                    >
                      Logout
                    </button>


              </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;