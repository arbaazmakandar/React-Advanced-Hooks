import React, { useMemo, useState } from 'react'

function SquareComponent({input}) {
    function square(number){
        return number * number
    }

    const result = useMemo(() => square(input),[input]);
    
    return(<div>Result: {result}</div>)
}

const UseMemo = () => {

    const [render, setRender] = useState(false);
    const [number, setNumber] = useState(1)


    const handleIncrement = () => {
        setNumber(number+1)
    }
    console.log("Component Rerendered")
  return (
    <div>
        <SquareComponent input={number}/>
        <button onClick={()=>setRender(!render)}>Re-render Button</button>
        <button onClick={handleIncrement}>Increment Number</button>
    </div>
  )
}
export default UseMemo