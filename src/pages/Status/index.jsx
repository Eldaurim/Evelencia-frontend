import { useEffect, useState } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

function Status() {
  const [ApiStatus, setApiStatus] = useState()

  useEffect(() => {
    async function getAPIStatus() {
      try {
        const response = await axios.get(env.API_URL + '/status')
        const apiResponse = await response.data
        setApiStatus(apiResponse.message)
      } catch (error) {
        setApiStatus(error)
      }
    }
    getAPIStatus()
  }, [])

  return <div>{<h1> {ApiStatus} </h1>}</div>
}

export default Status
