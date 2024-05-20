import React from 'react'



function SquareComponent({input}) {
    function square(number){
        return number * number
    }

    
    return(<div>Result: {result}</div>)
}




export default React.memo(SquareComponent)