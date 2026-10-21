import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)

  //if you want to add run multiple setnum then use previus otherwise setnum runs once 
  //it is not possible with setnum(num+1)
  const btnClicked = () => {
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App