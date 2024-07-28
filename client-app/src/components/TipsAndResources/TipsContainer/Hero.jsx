import React from 'react'
import TipsContainer from './TipsResourceContainer/TipsContainer'
import { TipsURL, ResourceURL } from '../../../helpers/ImportantRoutes'
import Footer from "../../Footer"

import { useState, useEffect } from 'react'
import axios from 'axios'
import ResourceContainer from './TipsResourceContainer/ResourceContainer'

const Hero = () => {
  const [data, setdata] = useState([]);
  const [resourceData, setresourceData] = useState([])
  const fetchData = async () => {
    const getData = await axios.get(TipsURL)
    setdata(getData.data);
  }
  const fetchResource = async () => {
    const getResource = await axios.get(ResourceURL);
    setresourceData(getResource.data);
  }
  useEffect(() => {
    fetchData();  
    fetchResource();  
  }, [])
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='Tips-Resource-Container p-8 w-3/4'>
      <h1 className='text-5xl sm:text-8xl text-green-500 font-serif'>Guide to Sustainable Practices</h1>       
      <p className='text-xl text-green-800 text-center font-serif mt-4'> Welcome to the Sustainable Living Tips & Resources section! Here, you'll find a wealth of information and practical advice to help you make eco-friendly choices in your everyday life. Whether you're just starting your sustainability journey or looking to deepen your commitment to the environment, our curated tips, comprehensive guides, and interactive tools are designed to support you every step of the way. Explore the sections below to discover how small changes can make a big impact and join us in creating a greener, more sustainable future.</p>
      </div>
      <div className='flex items-center flex-col justify-center'>
        <TipsContainer data = {data}/>
        <ResourceContainer data = {resourceData}/>
      </div>
        <Footer/>
    </div>
  )
}

export default Hero
