import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import UserData from './UserData/UserData'
import UserLogin from './Authentication/UserLogin'
import axios from 'axios'
import { infoURL } from '../../helpers/ImportantRoutes'
const UserContainer = () => {
    const [flag, setflag] = useState(false)
    const [reload, setreload] = useState(false)
    const [Data, setData] = useState({})
    const updateReloadState = () => {
        setreload(!reload);
    }
    const validateToken = async () => {
        const config = {
            headers: {
              'Authorization': localStorage.getItem("Authorization"),
            },
          };
        try {
            const fetchUserData = await axios.get(infoURL, config);
            const {username, email, id} = fetchUserData.data;
            setData({username : username, email : email, id : id});
            console.log(username, email, id);
            setflag(true);
        } catch (error) {
            console.log(error);
            setflag(false);
            return error;
        }
    }
    useEffect(() => {
        validateToken();
    }, [reload])
    
  return (
    <div>
      {flag ? <UserData updateReloadState = {updateReloadState} props = {Data}/> : <UserLogin updateReloadState = {updateReloadState}/>}
    </div>
  )
}

export default UserContainer
