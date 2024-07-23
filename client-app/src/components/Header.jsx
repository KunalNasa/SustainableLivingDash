import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex z-10 sticky bg-purple-400 justify-center top-0 font-bold'>
      <button className='m-2 p-1'><Link to="/"><FaUserCircle size={50}/></Link></button>
      <ul className='flex w-full z-10 gap-5 items-center justify-center p-3 m-1'>
        <li><NavLink className={({ isActive }) =>
          isActive ? 'text-gray-100 ' : 'black'
        } to= "/tips">TIPS & RESOURCES</NavLink></li>
        <li><NavLink className={({ isActive }) =>
          isActive ? 'text-gray-100 ' : 'black'
        } to= "/">HOME</NavLink> </li>
        <li><NavLink className={({ isActive }) =>
          isActive ? 'text-gray-100' : 'black'
        } to="/carbon">CARBON FOOTPRINTS</NavLink></li>
      </ul>
      <button className='m-2 p-1'><NavLink className={({ isActive }) =>
          isActive ? 'text-gray-100' : 'black'
        } to="/profile"><FaUserCircle size={50}/></NavLink></button>
    </div>
  )
}

export default Header
