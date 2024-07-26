import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row z-10 sticky bg-purple-400 justify-center top-0 font-bold'>
      <div className='flex items-center justify-between w-full p-3'>
        <button className='p-1 md:m-2'>
          <Link to="/"><FaUserCircle size={40} /></Link>
        </button>
        <ul className='flex flex-col md:flex-row w-full md:gap-5 gap-3 items-center justify-center p-3'>
          <li><NavLink className={({ isActive }) =>
            isActive ? 'text-gray-100' : 'text-black'
          } to="/tips">TIPS & RESOURCES</NavLink></li>
          <li><NavLink className={({ isActive }) =>
            isActive ? 'text-gray-100' : 'text-black'
          } to="/">HOME</NavLink></li>
          <li><NavLink className={({ isActive }) =>
            isActive ? 'text-gray-100' : 'text-black'
          } to="/carbon">CARBON FOOTPRINTS</NavLink></li>
        </ul>
        <button className='p-1 md:m-2'>
          <NavLink className={({ isActive }) =>
            isActive ? 'text-gray-100' : 'text-black'
          } to="/profile"><FaUserCircle size={40} /></NavLink>
        </button>
      </div>
    </div>
  )
}

export default Header
