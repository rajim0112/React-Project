import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom'

const NotFound = () => {
  return <Navigate to="/login"/>
}

export default NotFound