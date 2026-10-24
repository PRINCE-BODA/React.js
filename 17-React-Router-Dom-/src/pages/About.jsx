import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='text-white bg-black w-full flex flex-col flex-1 '>
       <div>
        <Link to ="/About/AboutUs">About Us</Link>
        <Link to ="/About/AboutOurs">About Ours</Link>
        <Outlet/>
       </div>
    </div>
   
  )
}

export default About

