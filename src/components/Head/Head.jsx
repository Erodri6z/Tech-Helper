import './Head.css'
import { Link } from 'react-router-dom'
import React from 'react'

const Head = ({user, handleLogout}) => {
  return (
  <>
    <div className="heading">
      <h1 className="title">Pocket Geeks</h1>
      {user?
      <li ><Link to="" onClick={handleLogout} className='logout'>Logout</Link></li>
      :
      <>
      <li ><Link className='signon' to="/signup" >Sign Up</Link></li>
      <li ><Link className='signon' to="/login" >Log In</Link></li>
      </>
      }
    </div>
  </>
  )
}

export default Head