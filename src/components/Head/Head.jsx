import './Head.css'
import { Link } from 'react-router-dom'
import React from 'react'

const Head = ({user, handleLogout}) => {

  const toggleNav = () => {
    const navBar = document.getElementById('nav')
    // const navSelect = document.getElementsByClassName('nav-select')
    navBar.classList.toggle('active')
  }
  const buttonToggle = () => {
    const btn = document.querySelector('.nav-select')
    btn.classList.toggle('button-active')
  }
  const funct = () => {
    toggleNav()
    buttonToggle()
  }

  return (
  <>
    <div className="heading">
      <h1 className="title">Pocket Geeks</h1>
      <button className='nav-select' onClick={funct}>
        <svg id='x' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        <svg id='list' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      {user?
      <li ><Link to="" onClick={handleLogout} className='logout fullscreen-signon'>Logout</Link></li>
      :
      <>
      <li ><Link className='nav-item fullscreen-signon' to="/signup" >Sign Up</Link></li>
      <li ><Link className='nav-item fullscreen-signon' to="/login" >Log In</Link></li>
      </>
      }
    </div>
      <div id='nav'>
        <ul>
          <li className='nav-list'><Link className='nav-item' to="/android">Android</Link></li>
          <li className='nav-list'><Link className='nav-item' to="/ios">Apple</Link></li>
          <li className='nav-list'><Link className='nav-item' to="/about">About</Link></li>
          {user?
          <li><Link to="" onClick={handleLogout} className='logout'>Log Out</Link></li>
          :
          <>
          <li className='nav-list'><Link className='nav-item' to="/signup" >Sign Up</Link></li>
          <li className='nav-list'><Link className='nav-item' to="/login" >Log In</Link></li>
          </>
          }
        </ul>
      </div>
  </>
  )
}

export default Head