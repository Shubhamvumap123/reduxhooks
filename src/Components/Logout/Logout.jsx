import React from 'react'

const Logout = ({user}) => {
  return (
    <div>
        <h1>Welcome <span>{user}</span></h1>
        <button>logout</button>
    </div>
  )
}

export default Logout