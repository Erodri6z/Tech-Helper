import './Head.css'
import { Link } from 'react-router-dom'
import React from 'react'

const Head = ({user, handleLogout}) => {

  const toggleNav = () => {
    const navBar = document.getElementById('nav')
    navBar.classList.toggle('active')
  }

  return (
  <>
    <div className="heading">
      <h1 className="title">Pocket Geeks</h1>
      <button className='nav-select' onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <div id='nav'>
        <ul>
          <li>Android</li>
          <li>Apple</li>
          <li>About</li>
          {user?
          <li>Log Out</li>
          :
          <>
          <li>Login</li>
          <li>Sign Up</li>
          </>
          }
        </ul>
      </div>
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