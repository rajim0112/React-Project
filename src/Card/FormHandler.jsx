import React, {useState} from 'react'
// import { replace } from 'react-router-dom';

const FormHandler = () => {
    // console.log(replace())

    const [formData, setFormData] = useState({})
    // const navigate = useNavigate()
    // console.log(useNavigate());

    const handleInput = (e) => {
        var key = e.target.name
        var value = e.target.value
        setFormData({...formData, [key]: value})
    }

    const handleReload = () => {
        window.location.reload();
    }

    // const handleNavigation = (path) => {
    //     navigate(path)
    //     // go(path, {replace: true, state: {
    //     //     role: "student"
    //     // }})
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        window.location.pathname = '/'
    }

    return (
        <form className='formContainer' onSubmit={handleSubmit}>
            <button onClick={handleReload}>🔃</button>
            {/* <button onClick={()=>handleNavigation('/')}>Home</button>
            <button onClick={()=>handleNavigation('/modes')}>Modes</button> */}
            <label>
                Full Name: <input type="text" name='name' placeholder='Enter your Full Name' onChange={handleInput}/>
            </label>
            <label>
                Age: <input type="number" name='age' placeholder='Enter your Age' onChange={handleInput}/>
            </label>
            <label>
                E-mail: <input type="email" name='email' placeholder='abc@gmail.com' onChange={handleInput}/>
            </label>
            <label>
                Phone Number: <input type="number" name='phonenumber' placeholder='Phone number' onChange={handleInput}/>
            </label>
            <label>
                Date of Birth: <input type="date" name='date of birth' onChange={handleInput}/>
            </label>
            <label>
                Create Password: <input type="password" name='create password' placeholder='*********' onChange={handleInput}/>
            </label>
            <label>
                Gender<br/>
                <input type="checkbox" name='checkbox' onChange={handleInput}/>Female<br/>
                <input type="checkbox" name='checkbox' onChange={handleInput}/>Male
            </label>
            <label>
                Place<br/>
                <input type="radio" name='radio' onChange={handleInput}/>City-1<br/>
                <input type="radio" name='radio' onChange={handleInput}/>City-2
            </label>
            <label>
                Color: <input type="color" name='color' placeholder='Color' onChange={handleInput}/>
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default FormHandler