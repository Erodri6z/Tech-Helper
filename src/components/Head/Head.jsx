import './Head.css'
import { Link } from 'react-router-dom'
import React from 'react'

const Head = ({user, handleLogout}) => {
  return (
  <>
    <div className="heading">
      <h1 className="title">Tech Helper App</h1>
      {user?
      <li><Link to="" onClick={handleLogout}>Logout</Link></li>
      :
      <><li><Link to="/signup">Sign Up</Link></li><li><Link to="/login">Log In</Link></li></>
      }
    </div>
  </>
  )
}

export default Head