import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDeatails = () => {

    const param = useParams()

  return (
       <div className='text-white bg-black w-full flex justify-center items-center text-2xl'>{param.id} CoursesDetails are here</div>
  )
}

export default CoursesDeatails