import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <>
      <ul>
        <li><Link className='f-item' to="/about">About</Link></li>
        <li><Link className='f-item' to="/ios">IOS</Link></li>
        <li><Link className='f-item' to="/android">Android</Link></li>
      </ul>
    </>
  )
}

export default Footer