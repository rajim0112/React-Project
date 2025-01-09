// import React, { useState } from 'react'

// const Increment = () => {
//     const [count, setCount] = useState(0)

//     const increase = () => {
//         setCount(count + 1)
//         console.log(count);
//     }
//     return (
//         <div className='card'>
//             <p>{count}</p>
//             <button onClick={increase}>Increment</button>
//         </div>
//     )
// }
// export default Increment

// *************************************************

// import React, { useState } from 'react'

// const Increment = () => {
//     const [count, setCount] = useState(0)

//     const increase = () => {
//         setCount(count + 1)
//     }
//     const greet = (name) => {
//         console.log('Welcome'+name);
//     }
//     return (
//         <div className='card'>
//             <p>{count}</p>
//             <button onClick={() => {greet('Raji')}}>greet</button>
//             <button onClick={increase}>Increment</button>
//         </div>
//     )
// }

// export default Increment
// ********************************************************

import React, { useState } from 'react'

const Increment = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }
    const greet = (name) => {
        console.log('Welcome'+name);
    }
    return (
        <div className='card'>
            <p>{count}</p>
            <button onClick={() => {
                greet('Raji');
                increase();
                }}>Click</button>
            {/* <button onClick={increase}>Increment</button> */}
        </div>
    )
}
export default Increment