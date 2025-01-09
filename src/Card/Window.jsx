import React, {useEffect, useState} from 'react'

const Window = () => {

    const [light, setLight] = useState(true)

    const handleTitle = () => {
        document.title = light ? "Light Mode" : "Dark Mode" 
        console.log("useEffect called");
        document.body.style.backgroundColor = light ? "white" : "black"
        document.body.style.color = light ? "black" : "white"
    }
    
    useEffect(handleTitle, [light])

  return (
    <div className='window'>
        <p>{light ? "Light Mode" : "Dark Mode"}</p>
        <button onClick={() => setLight(!light)}>Toggle</button>
        {/* <button onClick={handleMode}>Toggle</button> */}
        {/* <button onClick={() => {setText("Welcome")}}>set Text</button> */}
    </div>
  )
}

export default Window