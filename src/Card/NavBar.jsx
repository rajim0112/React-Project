import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const NavBar = () => {
    console.log(useLocation());
  return (
    <div className='navBar'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/modes">Modes</Link>
    </div>
  )
}

export default NavBar