import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const ResourceContainer = ({data}) => {
  return (
    <div className='TipsContainer p-5 m-5 flex flex-col items-center justify-center'>
            <h2 className='text-4xl text-green-500 text-center font-serif'>Top Sustainable Resources for Eco-Friendly Living</h2>
            <p className='text-lg text-green-800 w-3/4 text-center m-2 p-5 font-serif'>In today's world, sustainability is more important than ever. With growing concerns about climate change, pollution, and resource depletion, adopting sustainable practices can make a significant difference. Whether you're looking to reduce your energy consumption, conserve water, support local farmers, or find eco-friendly products, there are numerous resources available to help you on your journey. Below, we've compiled a list of some of the best resources to guide you toward a more sustainable and environmentally conscious lifestyle. These websites and programs offer valuable information, tips, and tools to help you make greener choices and contribute to a healthier planet.</p>
            <div className='cardContainer p-1 m-5 max-w-[75vw] items-center justify-center flex-wrap overflow-auto flex no-scrollbar max-h-[40vh]'>
                {data.map((item) => (
                    <button
                        className="cards mx-2 my-5 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl overflow-y-auto no-scrollbar w-[80%] sm:w-[30%] bg-gradient-to-r from-slate-100 to-slate-200 h-32 text-center shadow-lg border rounded-3xl"
                    >
                        <NavLink to={item.URL} target='blank' rel="noopener noreferrer">
                            <h1 className='text-3xl text-green-500 underline font-bold p-2'>
                                {item.title}
                            </h1>
                            <p className='text-xl text-green-800 font-serif p-3'>
                            {item.description}
                            </p>
                            </NavLink>
                    </button>
                ))}
            </div>
        </div>
  )
}

export default ResourceContainer
