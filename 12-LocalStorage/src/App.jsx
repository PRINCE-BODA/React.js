import React from 'react'

const App = () => {

  const User = {
    username: 'prince',
    age: 21,
    city: 'dhrol'
  }

  localStorage.setItem('User',JSON.stringify(User))
  const a = JSON.parse(localStorage.getItem('User'))
  delete a.age
  console.log(a)  
  return (
    <div>App</div>
  )
}

export default App