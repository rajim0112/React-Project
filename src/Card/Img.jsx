import React from 'react'
// import pic from './hello image.jpeg'
import {Link} from 'react-router-dom'

const Img = () => {
  return (
    // <img src = {pic} alt = "" style = {{ marginTop: 150, marginLeft: 100, height:300, width:300}}/>
    // <ul>
    //     <li><a href="">Home</a></li>
    //     <li><a href="">Modes</a></li>
    //     <li><a href="">Login</a></li>
    // </ul>
    <nav>
      <Link to = '/'>Home</Link>
      <Link to = '/login'>Login</Link>
      <Link to = '/modes'>Modes</Link>
    </nav>
  )
}

export default Img