import React, { useEffect, useState } from 'react'

const App = () => {

    const [a, seta] = useState(1)
    const [b, setb] = useState(1)

    function Aischange(){
      console.log("a is change...")
    }

    function bischange(){
      console.log("b is change...");
      
    }

    useEffect(function(){
      Aischange()
    },[a])

    useEffect(function(){
      bischange()
    },[b])

  return (
    <div>
      <h3>A is {a}</h3>
      <h3>B is {b}</h3>
      <button onClick={()=>{
        seta(a+1)
      }}>b1</button>
      <button onClick={()=>{
        setb(b+1)
      }}>b2</button>
    </div>
  )
}

export default App