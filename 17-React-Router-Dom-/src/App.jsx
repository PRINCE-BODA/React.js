import React from 'react'
import Home from './pages/Home.jsx'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import { Contact } from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import AboutUs from './pages/AboutUs.jsx'
import AboutOurs from './pages/AboutOurs.jsx'
import Courses from './pages/Courses.jsx'
import Navbar1 from './components/Navbar1.jsx'
import CoursesDeatails from './pages/CoursesDeatails.jsx'

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <Navbar1/>
      <div className="flex flex-1">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />}>
            <Route path='/About/AboutUs' element = {<AboutUs/>}/>
            <Route path='/About/AboutOurs' element = {<AboutOurs/>}/>
          </Route>
          <Route path='/Courses' element ={<Courses/>}/>
          <Route path='/Courses/:id' element = {<CoursesDeatails/>}/>
          <Route path='*' element = {<Error/>}></Route>
          
        </Routes>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App