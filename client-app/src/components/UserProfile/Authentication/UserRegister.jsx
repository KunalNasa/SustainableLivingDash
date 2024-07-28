//in LS data is stored in key value pair where key and value both
// are strings
import React, { useEffect } from 'react'
import axios from 'axios'
import { loginURL, infoURL, registerURL } from '../../../helpers/ImportantRoutes'
import { useState } from 'react'
import UserLogin from './UserLogin'
const UserRegister = ({updateReloadState}) => {
    const [email, setemail] = useState("")
    const [UserName, setUserName] = useState("")
    const [register, setregister] = useState(false)
    const [password, setpassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const createUser = await axios.post(registerURL, {
                username: UserName, email : email, password : password 
            })
            console.log(createUser);

            const getData = await axios.post(loginURL,{email : email, password: password});
            const token = getData.data
            localStorage.setItem("Authorization", "Bearer " + token.accessToken)
            setemail("");
            setpassword("");
            setUserName("");
            updateReloadState();
            
        } catch (error) {
            alert("Email already in use")
        }
    }

  return (
    <> {register ? <UserLogin/>:
    <div className='Login-Container h-auto'>
    <div className='flex h-[90vh] w-full shadow-lg items-center justify-center flex-col'>
        <form onSubmit={handleSubmit} className='flex bg-gradient-to-r from-slate-100 to-slate-200 w-[40%] p-8 shadow-xl border rounded-xl  items-center flex-col' action="">
        <h3 className='font-bold mb-5 text-green-600 text-2xl'>User Registration</h3>
            <label className='text-left text-green-600 font-serif w-full p-1' htmlFor="">username</label>
            <input className='w-full p-2 m-1 h-9 placeholder:text-gray-500 border rounded-md' value={UserName} onChange={(e) => setUserName(e.target.value)} id='username' required placeholder='Enter Your username' type="text" />
            <label className='text-left text-green-600 font-serif w-full p-1' htmlFor="">email</label>
            <input className='w-full p-2 m-1 h-9 placeholder:text-gray-500 border rounded-md' value={email} onChange={(e) => setemail(e.target.value)} id='email' required type="text" placeholder='Enter your Email'/>
            <label className='text-left text-green-600 font-serif w-full p-1' htmlFor="">password</label>
            <input className='w-full p-2 m-1 h-9 placeholder:text-gray-500 border rounded-md' onChange={(e) => setpassword(e.target.value)} value={password} id='password' required type="password" placeholder='Enter your password'/>
            <button className='border rounded-lg p-2 m-2 bg-green-500 mt-6 transition duration-150 ease-in-out transform hover:scale-105 text-lg w-40 shadow-md font-bold' type='submit'>Register</button>
        </form>
        <div>
        <p>Already have an account? <button className='text-blue-600' onClick={() => {setregister(!register)}}>Login</button></p>
    </div>
    </div>
    
</div>}
    </>
  )
}

export default UserRegister
