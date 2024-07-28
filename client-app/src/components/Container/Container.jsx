import React from 'react'
import FeaturedTips from './FeaturedTips'
import GlobalStats from './GlobalStats'
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Container = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center px-4'>
      <div className='w-full md:w-3/4 p-4 md:p-8'>
        <h1 className='text-xl text-green-500 md:text-6xl lg:text-8xl font-serif text-center'>Sustainable Living Dashboard</h1>
        <p className='text-base text-green-800 md:text-lg lg:text-xl font-serif mt-4 text-center'>
          Welcome to your Sustainable Living Dashboard! Our mission is to help you adopt more eco-friendly habits and make informed decisions to reduce your environmental impact. Explore our tips, resources, and tools designed to support your journey towards a sustainable lifestyle.
        </p>
      </div>
      <div className='w-full flex items-center justify-center mb-8'>
        <FeaturedTips />
      </div>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-4xl text-green-500 font-serif'>Quick Stats</h2>
        <GlobalStats />
        <button 
          className='text-3xl md:text-4xl lg:text-5xl bg-black text-white px-2 py-2 rounded-full fixed bottom-4 right-4'
          style={{ position: 'fixed' }}
        >
          <NavLink to="https://github.com/KunalNasa/SustainableLivingDash" target='_blank'>
            <FaGithub />
          </NavLink>
        </button>
      </div>
    </div>
  )
}

export default Container
