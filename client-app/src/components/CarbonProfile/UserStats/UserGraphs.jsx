import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { footPrintURL } from '../../../helpers/ImportantRoutes'
import FootPrintHistory from '../../Statistics/FootPrintHistory'

const UserGraphs = (props) => {
    const {updateReloadState} = props;
    const [graphData, setgraphData] = useState({})
    const fetchData = async () => {
        const config = {
            headers: {
              'Authorization': localStorage.getItem("Authorization"),
            },
          };
        try {
            const getData = await axios.get(footPrintURL, config);
            setgraphData(getData.data);
            // console.log(graphData); it will not be reflected here because of asynchronous nature of js data is not set into state yet
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {    
        fetchData()
    }, [])
    
  return (
    <div className='w-full m-5 flex items-center justify-center'>
        <FootPrintHistory graphData = {graphData}/>
    </div>
  )
}

export default UserGraphs
