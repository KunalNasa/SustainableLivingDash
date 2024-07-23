import React from 'react'
import FeaturedTips from './FeaturedTips'
import GlobalStats from './GlobalStats'
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const container = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center '>
    <div className='w-3/4 p-8'>
      <h1 className='text-8xl font-serif'>Sustainable Living DashBoard</h1>       
      <p className='text-xl font-serif mt-4'>Welcome to your Sustainable Living Dashboard! Our mission is to help you adopt more eco-friendly habits and make informed decisions to reduce your environmental impact. Explore our tips, resources, and tools designed to support your journey towards a sustainable lifestyle.</p>
    </div>
    <div className='w-full flex items-center justify-center'>
      <FeaturedTips/>
    </div>
    <div>
      <GlobalStats/>
      <button className='sticky text-5xl bg-black text-white px-1 py-1 rounded-full' style={{ position: 'fixed', bottom: '5rem', right: '1rem' }}><NavLink to="https://github.com/KunalNasa/SustainableLivingDash" target='_blank'><FaGithub /></NavLink></button>
    </div>
  </div>
  )
}

export default container
