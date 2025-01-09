import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className = "logo">Rajeswari</div>
        <ul className = "navlinks">
            <li className="navlink">About</li>
            <li className="navlink">Education</li>
            <li className="navlink">Project</li>
            <li className="navlink">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar