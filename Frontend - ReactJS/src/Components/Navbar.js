import React from 'react'
import { Link } from 'react-router-dom'
import './CSS Components/Navbar.css'

function Navbar() {
  return (
    <div className='header__Component'>
        <div className='header__Name'>    
            <p className='header__Details'>
              <Link to='/'>Employee Management System</Link>
            </p>
        </div>
    </div>
  )
}

export default Navbar