import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate('/')
}
  return (
    <>
    <nav className='navbar'>
      <h3>Logo</h3>
      {/* <img src="" alt="Logo"/> */}
      <ul className='navlinks'>
        <li><NavLink className="nav-links" to="/todosite">ToDo-List</NavLink></li>
        <li><NavLink className="nav-links" to="/xogame">XO-Game</NavLink></li>
        <li><NavLink className="nav-links" to="/calculator">Calculator</NavLink></li>
        <li>
          <button className='logout' onClick={handleLogOut}>Logout</button>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Nav