// import './Card.css'

// function Card(){
//     return <button className='btn'>Click Me</button>
// }

// export default Card;

// **************************using module*************************

// import style from './Card.module.css'

// function Card(){
//     return <button className={style.btn}>Click Me</button>
  
// }

// export default Card;

// ***********************************************

// import style from './Card.module.css'

// function Card(){
//     const styles ={
//         backgroundColor: 'aqua',
//         color: 'black',
//         border: 'none',
//         borderRadius: "10px",
//         padding: '10px',
//     }
            
//     return <>
//         <p>To view the content please:</p>
//         <button style={styles}>Click Me</button>
//     </> 
// }

// export default Card;

// ***************************************************

// import style from './Card.module.css'

// function Card(){
//     const styles = {
//         btn :{
//             backgroundColor: 'aqua',
//             color: 'black',
//             border: 'none',
//             borderRadius: "10px",
//             padding: '10px',
//         },
//         para: {
//             display: 'inline'
//         }
        
//     }
//     return <>
//         <p style={styles.para}>Hi</p>
//         {/* <p style={styles['para']}>Hi</p> */}
//         <button style={styles.btn}>Click Me</button>
//     </>
// }

// export default Card;

// **************************************

// import React from 'react'

// const Card = (props) => {
//     return (
//         <div className='card'>
//             <p>Name: Meghana</p>
//             <p>Age: 20</p>
//             <p>Gender: female</p>
//             <p>Role: Student</p>

//         </div>
//     )
// }
// export default Card

// ****************************************

// import React from 'react'

// const Card = (props) => {
//     console.log(props);
//     return (
//         <div className='card'>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>Gender: {props.gender}</p>
//             <p>Role: {props.role}</p>

//         </div>
//     )
// }
// export default Card

// *****************************************************


