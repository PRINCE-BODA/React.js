
import React, { useState } from 'react'

const App = () => {

  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [copy, setCopy] = useState([])

  const SubmitHandler = (e) => {
    e.preventDefault()

    const datacopy = [...copy]

    datacopy.push({ first, second })

    setCopy(datacopy)

    setFirst('')
    setSecond('')
  }

  return (
    <div className='h-screen w-full grid grid-cols-2'>

      {/* Left side: Add Notes */}
      <div className='bg-gray-400'>

        <form
          onSubmit={SubmitHandler}
          className='flex flex-col items-center h-screen'
        >

          <h1 className='text-center font-bold text-3xl mb-9'>
            Add Notes
          </h1>

          <input
            type='text'
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            className='border-2 w-md mb-3 rounded-sm py-2 px-5 font-semibold'
            placeholder='Enter Title'
            required
          />

          <textarea
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            className='border-2 w-md mb-3 rounded-sm py-2 px-5 h-1/6 font-semibold'
            placeholder='Enter Text'
            required
          />

          <button
            type='submit'
            className='py-2 px-5 border-2 rounded-md bg-gray-500 w-1/2 active:scale-95'
          >
            Submit
          </button>

        </form>

      </div>

      {/* Right side: Recent Notes */}
      <div className='bg-gray-500 p-4 overflow-y-auto'>

        <h1 className='text-center font-bold text-3xl mb-5'>
          Recent Notes
        </h1>

        {copy.map((item, idx) => (
          <div
            key={idx}
            className='bg-white p-4 mb-3 rounded-md shadow'
          >
            <h2 className='font-bold text-xl'>
              {item.first}
            </h2>

            <p className='mt-2'>
              {item.second}
            </p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default App
