import React from 'react'
import useLocalStorage from './useLocalStorage'


const MyComponent = () => {

  const [name, setName] = useLocalStorage("name","");

  const handleNameChange = (event) =>{
    setName(event.target.value)
  }

    
  return (
    <div>

      <input type="text" onChange={handleNameChange} value={name}/>
      <p>Hello {name}</p>
    </div>
  )
}

export default MyComponent