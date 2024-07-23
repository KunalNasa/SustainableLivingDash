import React, { useState } from 'react';

const TipsContainer = ({ data }) => {    
    // Initialize the toggles state as an empty object
    const [toggles, setToggles] = useState({});

    // Function to handle toggle
    const handleToggle = (id) => {
        setToggles((prevToggles) => ({
            ...prevToggles,
            [id]: !prevToggles[id] // Toggle the boolean value for the specific id
        }));
    };

    return (
        <div className='TipsContainer p-5 m-5 flex flex-col items-center justify-center'>
            <h2 className='text-4xl font-serif'>Essential Tips for a Sustainable Lifestyle</h2>
            <p className='text-lg w-3/4 text-center m-2 p-5 font-serif'>Embracing a sustainable lifestyle is crucial for protecting our planet and ensuring a better future for generations to come. Making mindful choices in our daily lives can significantly reduce our environmental impact. From energy conservation and water-saving techniques to supporting local agriculture and opting for eco-friendly products, there are many ways to contribute to a more sustainable world. The following tips provide practical advice on how to integrate sustainability into various aspects of your life. By adopting these practices, you can make a positive impact on the environment and promote a healthier, more sustainable lifestyle.</p>
            <div className='cardContainer p-7 m-5 max-w-[75vw] items-center justify-center flex-wrap overflow-auto flex no-scrollbar max-h-[60vh]'>
                {data.map((item) => (
                    <button
                        onClick={() => handleToggle(item._id)} 
                        key={item._id} 
                        className="cards transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl overflow-y-auto no-scrollbar w-[25%] m-5 bg-purple-400 h-64 p-2 text-center shadow-lg border rounded-3xl"
                    >
                        {toggles[item._id] ? (
                            <p className='text-xl font-serif p-3'>
                            {item.content}
                        </p>
                        ) : (
                            <h1 className='text-3xl font-bold p-2'>
                                {item.title}
                            </h1>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TipsContainer;
