import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams();
  return (
    <div>
      <h1>User: {userId}</h1>s
    </div>
  )
}

export default User
