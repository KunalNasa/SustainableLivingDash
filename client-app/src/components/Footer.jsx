import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center bg-purple-400 p-5 md:p-10'>
      <h4 className='text-lg md:text-2xl font-mono text-center mb-5'>
        Contribute to our site at 
        <Link className='text-blue-600 ml-1' to="https://github.com/KunalNasa/SustainableLivingDash" target='_blank'>
          GitHub
        </Link> 
        or click the GitHub logo on the home page.
      </h4>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 p-2">
        <div className='flex flex-col'>
          <h4 className='text-lg md:text-xl font-bold my-2'>Technologies</h4>
          <ul className='list-disc ml-4'>
            <li><Link className='text-blue-500 hover:underline' to="https://react.dev/" target='_blank'>React</Link></li>
            <li><Link className='text-blue-500 hover:underline' to="https://tailwindcss.com/" target='_blank'>Tailwind</Link></li>
            <li><Link className='text-blue-500 hover:underline' to="https://vitejs.dev/" target='_blank'>Vite</Link></li>
            <li><Link className='text-blue-500 hover:underline' to="https://www.mongodb.com/" target='_blank'>MongoDB</Link></li>
            <li><Link className='text-blue-500 hover:underline' to="https://nodejs.org/en" target='_blank'>Node</Link></li>
            <li><Link className='text-blue-500 hover:underline' to="https://expressjs.com/" target='_blank'>Express</Link></li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h4 className='text-lg md:text-xl font-bold my-2'>Core Team Members</h4>
          <ul className='list-disc ml-4'>
            <li><Link className='text-blue-500 hover:underline' to="https://github.com/git-charanjeet" target='_blank'>Charanjeet</Link></li>
            <li><Link className='text-blue-500 hover:underline' to="https://github.com/KunalNasa" target='_blank'>Kunal Nasa</Link></li>
            <li><Link className='text-blue-500 hover:underline' to="https://www.mongodb.com/" target='_blank'>Anurag Singh</Link></li>
            <li><Link className='text-blue-500 hover:underline' to="https://github.com/vatsdivyansh" target='_blank'>Divyansh Vats</Link></li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h4 className='text-lg md:text-xl font-bold my-2'>Technologies</h4>
          <ul className='list-disc ml-4'>
            <li><Link className='text-blue-500 hover:underline'>React</Link></li>
            <li><Link className='text-blue-500 hover:underline'>Tailwind</Link></li>
            <li><Link className='text-blue-500 hover:underline'>Vite</Link></li>
            <li><Link className='text-blue-500 hover:underline'>MongoDB</Link></li>
            <li><Link className='text-blue-500 hover:underline'>Node</Link></li>
            <li><Link className='text-blue-500 hover:underline'>Express</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
