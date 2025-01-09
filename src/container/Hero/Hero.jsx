import React from 'react'
import './Hero.css'
import img from './raji pic.jpeg'

const Hero = () => {
  return (
    <div className='herosection'>
        <img src = {img} alt = "" style = {{ marginTop: 150, marginLeft: 100, height:300, width:300}}/>
        <h1>Hi I'm Rajeswari Macharla</h1>
        <p> 
            Aim to be placed in a challenging organization that gives me scope to enhance my knowledge and skills in
            accordance with the latest trends and to be a part of team that dynamically works towards growth of
            organization.
        </p>
    </div>

  )
}

export default Hero