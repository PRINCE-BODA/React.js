import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [arr, setarr] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyarr = [...arr]

    copyarr.push({title})

    setarr(copyarr)

    setTitle('')
  }

  return (
    <div>
     <div>
        <h1>Write</h1>
         <form onSubmit={(e) => {
        submitHandler(e)
        }}>
        <input 
        type="text" 
        placeholder='Enter your name' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
     </div>
     <div>
        <h1>data</h1>
        {arr.map(function(elem,idx){
          return (
            <div key={idx}>
              <p>{elem.title}</p>
            </div>
)
        })}
     </div>
    </div>
    
  )
}

export default App