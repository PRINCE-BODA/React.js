import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

   const [data, setdata] = useState([])

  const getData = async () => {
    const response = await axios.get('https://localhost:7101/api/User/UserGetAll')
    setdata(response.data)    
  }

  return (
    <div>
        <button onClick={getData}>Get Data</button>
        <div>
        {data.map(function(elem,idx){

          return <h3>Hello, {elem.fullName} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App