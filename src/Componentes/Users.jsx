import React from 'react'
import Login from './Login'

const Users = ({usersApi}) => {
     
  return (
    <>
    {usersApi.map((user,index)=>(
        <Login
        key={index}
        />
        

    ))}
    </>
  )
}

export default Users
