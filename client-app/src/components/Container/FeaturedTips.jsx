import React, { useRef } from 'react'
import Featuring from '../../resources/Featuring'

const FeaturedTips = () => {
    return (
        <div className='Container w-3/4 p-5 m-5 flex flex-col items-center justify-center'>
            <h2 className='text-4xl font-serif'>Featured Tips</h2>
            <div className='cardContainer  p-5 m-5 max-w-[75vw] overflow-x-auto flex no-scrollbar h-auto'>
                {Featuring.map((item) => (
                    <div key={item.title} className="cards transform hover:scale-105 transition hover:ease-in-out hover:duration-500 hover:shadow-2xl overflow-y-auto no-scrollbar min-w-[33%] max-w-[35%] m-5 bg-purple-400 h-64 p-2 text-center shadow-lg border rounded-3xl">
                        <h1 className='text-2xl font-bold p-2'>
                            {item.title}
                        </h1>
                        <p className='text-lg p-3'>
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedTips
