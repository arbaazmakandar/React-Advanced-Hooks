import React, { useContext } from 'react'
import { CountContext } from './CountContext'

const GrandChildComponent = () => {

    const {count, setCount} = useContext(CountContext)
  return (
    <div>{count}
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default GrandChildComponent