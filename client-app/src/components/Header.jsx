import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex z-10 sticky bg-purple-400 justify-center top-0 font-bold'>
      <button className='m-2 p-1'><Link to="/"><FaUserCircle size={50}/></Link></button>
      <ul className='flex w-full z-10 gap-5 items-center justify-center p-3 m-1'>
        <li><Link to= "/tips">TIPS & RESOURCES</Link></li>
        <li><Link to= "/">HOME</Link> </li>
        <li><Link to="/carbon">CARBON FOOTPRINTS</Link></li>
      </ul>
      <button className='m-2 p-1'><Link to="/profile"><FaUserCircle size={50}/></Link></button>
    </div>
  )
}

export default Header
