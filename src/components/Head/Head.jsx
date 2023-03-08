import './Head.css'
import { Link } from 'react-router-dom'
import React from 'react'

const Head = ({user, handleLogout}) => {
  return (
    <div className="heading">
      <h1 className="title">Tech Helper App</h1>
    </div>
  )
}

export default Head