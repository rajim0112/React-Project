// import React from 'react'
// import { useEffect } from "react"

// const Mapper = () => {
//     const arr = ['HTML', 'CSS', 'JS', 'REACT']
//   return (
//     // <ol>
//     //     {arr.map(topic => 
//     //         <li>{topic}</li>
//     //     )}
//     // </ol>

//     <ol>
//         {arr.map((topic, index) =>
//             <li key = {index}>{topic}-{index}</li>
//         )}
//     </ol>
//   )
// }

// export default Mapper

// ***********************************************************

// import React from 'react'

// const Mapper = () => {
//     const arr = [
//         {
//             name: "raji",
//             age: "21",
//             email: "raji@gmail.com"
//         },
//         {
//             name: "meghana",
//             age: "20",
//             email: "meghana@gmail.com"
//         },
//     ]

//   return (
//     <ol>
//         {arr.map((student, index) =>
//             // <li>{student.name}</li>
//             // <li>{student.age}</li>
//             <li>{student.email}</li>
//         )}
//     </ol>
//   )
// }

// export default Mapper

// *********************************************************

// import React from 'react'

// const Mapper = () => {
//     const arr = [
//         {
//             name: "raji",
//             age: "21",
//             email: "raji@gmail.com"
//         },
//         {
//             name: "meghana",
//             age: "20",
//             email: "meghana@gmail.com"
//         },
//     ]

//     // const numbers = [1,2,3,4,5]
//     // const filteredData = numbers.filter(item % 2 == 0)
//     // console.log(filteredData);

//     const filterArr = arr.filter(std => (std.name.length >= 4))
//     console.log(filterArr);

//   return (
//     <ol>
//         {arr.filter(std => (std.name.length < 4)).map((student, index) =>
//             <li>{student.name}</li>
//         )}
//     </ol>
//   )
// }

// export default Mapper

// *************************using data.jsx**************************

// import React from 'react'
// import Data from './Data.jsx'

// const Mapper = () => {

//     const filterArr = Data.filter(std => (std.name.length >= 4))
//     console.log(filterArr);

//   return (
//     <ol>
//         {Data.filter(std => (std.name.length < 4)).map((student, index) =>
//             <li>{student.name}</li>
//         )}
//     </ol>
//   )
// }

// export default Mapper

// *************************using data.json**************************

// import React from 'react'
// import jsonData from './data.json'

// const Mapper = () => {

//     const filterArr = jsonData.filter(std => (std.name.length >= 4))
//     console.log(filterArr);

//   return (
//     <ol>
//         {jsonData.filter(std => (std.name.length < 4)).map((student, index) =>
//             <li>{student.name}</li>
//         )}
//     </ol>
//   )
// }

// export default Mapper

// *************************using fetch-then,catch**************************

// import React, {useState} from 'react'
// import jsonData from './data.json'

// const Mapper = () => {
//     const [users, setUsers] = useState({})
//     const arr = []

//     const filterArr = jsonData.filter(std => (std.name.length >= 4))
//     console.log(filterArr);

//     fetch(
//         "https://jsonplaceholder.typicode.com/users"
//     ).then(data => setUsers(data.json()))
//     .catch(er => console.log(er))

//   return (
//     <ol>
//         {users.filter(std => (std.name.length < 4)).map((student, index) =>
//             <li>{student.name}</li>
//         )}
//     </ol>
//   )
// }

// export default Mapper

// **************************using await,then,try,catch*****************

// import React, {useEffect, useState} from 'react'
// // import Data from './Data.jsx'
// import jsonData from './data.json'


// const Mapper = () => {
//     const [users] = useState([])
//     // const arr = []

//     const filterArr = jsonData.filter(std => (std.name.length >= 4))
//     console.log(filterArr);
    
//     // async -> makes a function return Promise
//     // await -> wait for the promise

//     // async function getData() {
//     //   await fetch (
//     //     "https://jsonplaceholder.typicode.com/users"
//     //   ).then(data => data.json())
//     //   .then(res => console.log(res))
//     //   .catch(er => console.log(er))
//     // }

//     async function getData() {
//       try {
//         const res = await fetch ("https://jsonplaceholder.typicode.com/users")
//         const data = await res.json()
//         console.log(data);
//       } catch(err) {
//         console.log(err)
//       }
//     }

//     useEffect(() => {
//       getData();
//       console.log("data fetched");
//     },[])

//   return (
//     <ol>
//         {users.filter(std => (std.name.length < 4)).map((student, index) =>
//             <li>{student.name}</li>
//         )}
//     </ol>
//   )
// }

// export default Mapper

// **********************************using axions******************

// import React, {useEffect, useState} from 'react'
// import Data from './Data.jsx'
// import jsonData from './data.json'
// import axios from 'axios'


// const Mapper = () => {
//     const [users, setUsers] = useState([])

//     const handleData = async () => {
//       try {
//         const response = await axios.get("https://reqres.in/api/users")
//         console.log(response.data.data);
//         setUsers(response.data.data)
//       } catch (err) {
//           console.log(err)
//       }
//     }
     
//   return (
//     <>
//       <ol>
//           {users.map((student, index) =>
//               <li>{student.name}</li>
//           )}
//       </ol>
//       <button onClick={handleData}>getData</button>
//     </>
//   )
// }

// export default Mapper

// **************************using isloading*****************

import React, {useState} from 'react'
import axios from 'axios'


const Mapper = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get("https://reqres.in/api/users")
        console.log(response.data.data);
        setTimeout(() => {
          setUsers(response.data.data)
          setIsLoading(false)
        }, 4000)
      } catch (err) {
          console.log(err)
          setTimeout(() => {
            setIsLoading(false)
          }, 3000)
      }
    }
     
  return (
    <>
      {isLoading && <div className='loader'></div>}
      <ol>
          {users.map((student, index) =>
              <li>{student.first_name}</li>
          )}
      </ol>
      <button onClick={handleData}>get data</button>
    </>
  )
}

export default Mapper