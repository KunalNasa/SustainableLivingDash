import React from 'react'

const UserData = ({updateReloadState, props }) => {
    const { username, email, id } = props
    return (
        <div className='InfoContainer'>
            <div className='UserContainer flex flex-col items-center justify-center h-[90vh] w-full'>
                <div className=' w-[80%] sm:w-[40%] p-5 m-10 shadow-2xl border rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center flex-col h-auto'>
                        <h1 className='w-full p-4 mb-4 text-center text-3xl font-semibold '>Welcome {username} 👋 </h1>
                        <h1 className='text-left hover:cursor-not-allowed border break-all rounded-lg bg-white p-1 px-3 m-2 w-[80%]'>username : {username} </h1>
                        <h1 className='hover:cursor-not-allowed text-left border break-all rounded-lg bg-white p-1 px-3 m-2 w-[80%]'>email : {email}</h1>
                        <h1 className='hover:cursor-not-allowed text-left border break-all rounded-lg bg-white p-1 px-3 m-2 w-[80%]'>user_id : {id}</h1>
                        <button onClick={() => {localStorage.clear() 
                        updateReloadState()}} className='w-52 border rounded-lg bg-red-400 transform hover:scale-105 transition duration-300 shadow-xl ease-in-out p-2 mt-7 font-bold m-3'>LogOut</button>
                </div>
            </div>
        </div>
    )
}

export default UserData
