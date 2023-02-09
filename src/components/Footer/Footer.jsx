import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <>
      <ul>
        <li><Link className='f-item' to="/about">About</Link></li>
        <li>IOS</li>
        <li>ANDROID</li>
      </ul>
    </>
  )
}

export default Footer