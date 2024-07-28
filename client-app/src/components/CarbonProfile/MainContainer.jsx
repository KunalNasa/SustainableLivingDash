import React from 'react'
import { useState, useEffect } from 'react'
import UserLogin from '../UserProfile/Authentication/UserLogin'
import axios from 'axios'
import { infoURL } from '../../helpers/ImportantRoutes'
import UserStats from './UserStats/UserStats'
const MainContainer = () => {
    const [flag, setflag] = useState(true)
    const [reload, setreload] = useState(false)
    // const [Data, setData] = useState({})
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
            // const {username, email, id} = fetchUserData.data;
            // setData({username : username, email : email, id : id});
            // console.log(username, email, id);
            if (fetchUserData.status === 200) { // Check if the status is 200 OK
                setflag(true);
            } else {
                setflag(false);
            }
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
      {flag ? <UserStats updateReloadState = {updateReloadState}/> : <UserLogin updateReloadState = {updateReloadState}/>}
    </div>
  )
}

export default MainContainer
