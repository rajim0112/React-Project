import React from 'react'

const RajiCard = () => {
    return (
        <div className='card'>
            <p>Name: Raji</p>
            <p>Age: 21</p>
            <p>Gender: female</p>
            <p>Role: job</p>

        </div>
    )
}
export default RajiCard

// ***************************************************

// import React from 'react'

// const RajiCard = () => {
//     const details = {
//         name: "Lakshmi",
//         age: 40,
//         gender: "female",
//         role: "job"
//     }
//     return (
//         <div className='card'>
//             <p>Name: {details.name}</p>
//             <p>Age: {details.age}</p>
//             <p>Gender: {details.gender}</p>
//             <p>Role: {details.role}</p>

//         </div>
//     )
// }
// export default RajiCard

// ****************************************************

// import React from 'react'

// const RajiCard = (props) => {
//     const details = {
//         name: "Ram",
//         age: 5,
//         gender: "male",
//         role: "student"
//     }
//     console.log(props);
//     return (
//         <div className='card'>
//             <p>Name: {details.name}</p>
//             <p>Age: {details.age}</p>
//             <p>Gender: {details.gender}</p>
//             <p>Role: {details.role}</p>

//         </div>
//     )
// }
// export default RajiCard

// *************************************************

// import React from 'react'

// const RajiCard = (props) => {
//     console.log(props);
//     return (
//         <div className='card'>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>Gender: {props.gender}</p>
//             <p>Role: {props.role}</p>

//         </div>
//     )
//     const details = {
//         name: "Ram",
//         age: 5,
//         gender: "male",
//         role: "student"
//     }
// }
// export default RajiCard