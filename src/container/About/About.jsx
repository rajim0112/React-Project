import React from 'react'
import'./About.css'
import bg from './bg.jpeg'

const About = () => {
  return (
    <div className = "aboutsection">
        <img src= {bg} alt = "" style = {{width:1430, height:650, margin:40}} />
        <h1 style = {{color:"black", fontSize: 80, marginLeft:600, marginTop:-450}}>
            Thank You
        </h1>
    </div>
  )
}

export default About