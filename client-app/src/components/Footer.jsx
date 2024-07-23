import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center Footer-Container bg-purple-400 p-10'>
        <h4 className='text-2xl font-mono'>Contribute to our site at <Link className='text-blue-600' to= "https://github.com/KunalNasa/SustainableLivingDash" target='_blank' >Github</Link> or click the GitHub logo on home page.</h4>
        <div className="grid grid-cols-3 gap-44 p-2">
            <div className='flex flex-col'>
                <h4 className='text-xl font-bold my-2'>Technologies</h4>
                <ul>
                    <li><Link to= "https://react.dev/" target='_blank' >React</Link></li>
                    <li><Link to= "https://tailwindcss.com/" target='_blank'>Tailwind</Link></li>
                    <li><Link to= "https://vitejs.dev/" target='_blank'>Vite</Link></li>
                    <li><Link to= "https://www.mongodb.com/" target='_blank'>MongoDB</Link></li>
                    <li><Link to= "https://nodejs.org/en" target='_blank'>Node</Link></li>
                    <li><Link to= "https://expressjs.com/" target='_blank'>Express</Link></li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <h4 className='text-xl font-bold my-2'>Core Team Members</h4>
                <ul>
                    <li><Link to= "https://github.com/git-charanjeet" target='_blank'>Charanjeet</Link></li>
                    <li><Link to= "https://github.com/KunalNasa" target='_blank'>Kunal Nasa</Link></li>
                    <li><Link to= "https://www.mongodb.com/" target='_blank'>Anurag Singh</Link></li>
                    <li><Link to= "https://github.com/vatsdivyansh" target='_blank'>Divyansh Vats</Link></li>

                </ul>
            </div>
            <div className='flex flex-col'>
                <h4 className='text-xl font-bold my-2'>Technologies</h4>
                <ul>
                    <li><Link>React</Link></li>
                    <li><Link>Tailwind</Link></li>
                    <li><Link>Vite</Link></li>
                    <li><Link>MongoDB</Link></li>
                    <li><Link>Node</Link></li>
                    <li><Link>Express</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
