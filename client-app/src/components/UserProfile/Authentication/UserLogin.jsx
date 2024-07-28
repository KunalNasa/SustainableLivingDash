//in LS data is stored in key value pair where key and value both
// are strings
import React, { useEffect } from 'react'
import axios from 'axios'
import { loginURL, infoURL } from '../../../helpers/ImportantRoutes'

import { useState } from 'react'
import UserRegister from './UserRegister'
const UserLogin = ({updateReloadState}) => {
    const [email, setemail] = useState("")
    const [register, setregister] = useState(false)
    const [password, setpassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const getData = await axios.post(loginURL,{email : email, password: password});
            const token = getData.data
            localStorage.setItem("Authorization", "Bearer " + token.accessToken)
            setemail("");
            setpassword("");
            updateReloadState();
            
        } catch (error) {
            alert("Invalid Cred")
        }
    }

    
  return (
    <> {register ? <UserRegister updateReloadState = {updateReloadState}/>:
    <div className='Login-Container h-auto'>
    <div className='flex h-[90vh] w-full items-center justify-center flex-col'>
        <form onSubmit={handleSubmit}className='flex bg-gradient-to-r from-slate-100 to-slate-200 w-[40%] p-8 shadow-xl border rounded-xl  items-center flex-col' action="">
        <h3 className='font-bold text-green-600 mb-5 text-2xl'>User Login</h3>
            <label className='text-left text-green-600 font-serif w-full p-1' htmlFor="">email</label>
            <input className='w-full p-2 m-1 h-9 placeholder:text-gray-500 border rounded-md' value={email} onChange={(e) => setemail(e.target.value)} id='email' required type="text" placeholder='Enter your Email'/>
            <label className='text-left text-green-600 mt-1 font-serif w-full p-1' htmlFor="">password</label>
            <input className='w-full p-2 m-1 h-9 placeholder:text-gray-500 border rounded-md' onChange={(e) => setpassword(e.target.value)} value={password} id='password' required type="password" placeholder='Enter your password'/>
            <button className='border rounded-lg p-2 m-2 mt-6 bg-green-500 transition duration-300 ease-in-out transform hover:scale-105 text-lg w-40 shadow-md font-bold' type='submit'>Login</button>
        </form>
        <div>
        <p> Don't have an account? <button className='text-blue-600' onClick={() => {setregister(!register)}}>register</button></p>
    </div>
    </div>

</div>}
    </>
  )
}

export default UserLogin
