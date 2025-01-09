import React from "react";
// import mystyles from './Card.modules.css'
import PropTypes from 'prop-types'

const Card2 = ({name, age, gender, role}) => {

    console.log(role ? 'Teacher' : 'Student');

    Card2.propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        gender: PropTypes.string,
        role: PropTypes.bool
    }
    Card2.defaultProps = {
        name: 'Guest',
        age: 0,
        gender: 'Male',
        role: false
    }
    
    return (
        <div className="card2">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Role: {role ? 'teacher' : 'student'}</p>
        </div>
    );
}

export default Card2
