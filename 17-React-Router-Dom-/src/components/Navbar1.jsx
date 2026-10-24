import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar1 = () => {

    const navigate = useNavigate()

  return (
     <div className='bg-cyan-700 h-16 flex items-center'>
        <div className='flex justify-between mr-2 font-medium'>
          <button onClick={()=>{
            navigate('/')
          }}
          className='m-2 p-2 rounded bg-amber-500 active:scale-95'>Return To Home</button>
           <button onClick={()=>{
            navigate(-1)
           }}
            className='m-2 p-2 rounded bg-amber-500 active:scale-95'>Back</button>
           <button onClick={()=>{
            navigate(+1)
           }}
           className='m-2 p-2 rounded bg-amber-500 active:scale-95'>Next</button>
        </div>  
      </div>
  )
}

export default Navbar1