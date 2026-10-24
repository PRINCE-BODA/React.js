import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-cyan-600 h-16 flex items-center'>
        <h1 className='pl-5 flex text-2xl font-medium'>Navbar</h1>
        <div className='flex justify-between gap-5 ml-auto mr-2 font-medium'>
          <Link to ="/">Home</Link>
          <Link to = "/Courses">Courses</Link>
          <Link to ="/Contact">Contact</Link>
          <Link to ="/About">About</Link>
        </div>  
      </div>
  )
}

export default Navbar