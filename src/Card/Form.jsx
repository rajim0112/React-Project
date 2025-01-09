// import React, {useState} from 'react'

// const Form = () => {
//     const [text, setText] = useState('Welcome')

//     return (
//         <div className='card'>
//             <h2>{text}</h2>
//             <input type = "text"/>
//         </div>
//     )
// }
// export default Form

// *****************************************************

// import React, {useState} from 'react'

// const Form = () => {
//     const [text, setText] = useState('')

//     const handleText = (e) => {
//         console.log(e.target.value);
//         setText(e.target.value)
//     }
//   return (
//     <div className='card'>
//         <h2>Welcome {text}</h2>
//         <input type = "text" onChange={handleText}/>
//     </div>
//   )
// }
// export default Form

// *******************************************************

import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';

const Form = () => {
    console.log(useLocation())
    
    const [text, setText] = useState('')
    const [light, setLight] = useState(true)
    const [color, setColor] = useState('black')
    const [bgColor, setBgColor] = useState('white')

    const handleText = (e) => {
        console.log(e.target.value);
        setText(e.target.value)
    }
    const handleMode = () => {
        setLight(!light)
        setBgColor(bgColor === "white" ? "black" : "white")
        setColor(color === "black" ? "white" : "black")
    }
  return (
    <>
    {/* {light && <Card1/>} */}
    <div className='card' style = {{backgroundColor:bgColor, color:color}}>
        <h2>
            Welcome to {light ? "Light" : "Dark"} Mode
        </h2>
        <p>{text}</p>
        <input type = "text" onChange={handleText}/>
        <button onClick={handleMode}>{light ? "Dark" : "Light"}</button>
    </div>
    </>
  )
}

export default Form