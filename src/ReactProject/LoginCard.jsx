import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginCard = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate();

    const handleInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormData ({
            ...formData,
            [key]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData.userid === "raji" && formData.password === "98765") {
            alert("Login Successfully....")
            navigate('/nav/')
        } else {
            alert("Wrong Credentials....")
        }
    }

  return (
    <div className='logincard'>
        <h1>Login</h1>
        <div className='logindetails'>
            <label>User Id :</label>
            <input onChange={handleInput} type='text' name='userid'/>
        </div>
        <div className='logindetails'>
            <label>Password :</label>
            <input onChange={handleInput} type='password' name='password'/>
        </div>
        <button onClick={handleSubmit} className='loginbtn' style={{fontSize:'20px', marginLeft:'10px'}}>Login</button>
    </div>
  )
}

export default LoginCard