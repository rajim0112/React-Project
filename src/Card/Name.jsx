import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Name = () => {
    const user = useParams()
    console.log(user.id);
    // console.log(props.id);
    // const useParams()
    async function getData() {
        try {
          const res = await fetch ("https://jsonplaceholder.typicode.com/users")
          const data = await res.json()
          console.log(data);
        } catch(err) {
          console.log(err)
        }
      }
  
      useEffect(() => {
        getData();
        console.log("data fetched");
      },[])
      
  return (
    <div>Name</div>
  )
}

export default Name