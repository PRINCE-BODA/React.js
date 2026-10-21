import React from 'react'

const App = () => {


  const getData = async () => {
    
    const response = await fetch('https://localhost:7101/api/User/UserGetAll')

    const data = await response.json() 
         
    console.log(data);
    
  }

 
  
  return (
    <div>
      <button onClick={getData}>getdata</button>
    </div>
  )
}

export default App