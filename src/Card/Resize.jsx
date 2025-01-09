import React, {useEffect, useState} from 'react'

const Resize = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    const handleWindow = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    const handleSize = () => {
        window.addEventListener('resize', handleWindow)
        console.log("triggered");
        return handleEvent
    }

    const handleEvent = () => {
        window.addEventListener('resize', handleWindow)
        console.log("removed");
    } 
    
    useEffect(handleSize, [])
    
  return (
    <div>
        <p>Height: {height}</p>
        <p>Widht: {width}</p>
    </div>
  )
}

export default Resize