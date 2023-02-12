import { Link } from 'react-router-dom'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
      <ul className='footer-list'>
        <li><Link className='f-item' to="/about">About</Link></li>
        <li><Link className='f-item' to="/ios">IOS</Link></li>
        <li><Link className='f-item' to="/android">Android</Link></li>
      </ul>
    </footer>
    </>
  )
}

export default Footer