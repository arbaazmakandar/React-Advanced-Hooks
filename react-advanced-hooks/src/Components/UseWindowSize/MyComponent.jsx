import React from 'react'
import useWindowSize from './UseWindowSize';

const MyComponent = () => {
    const windowSize = useWindowSize();
  return (
    <div>

        windowSize.width : {windowSize.width} px
        <br/>
        windowSize.height : {windowSize.height} px
    </div>
  )
}

export default MyComponent