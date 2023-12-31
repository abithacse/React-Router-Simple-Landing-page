import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
          LOGO
      </div>
      <div className='item'>
        <ul className='ul'>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
         
         
        </ul>
      </div>
    </div>
  )
}

export default Navbar
      