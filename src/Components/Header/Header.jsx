import React from 'react'
import './Header.css'
import NavList from './NavList/NavList'
function Header () {
  return (
       <header className='header'>
          <nav className='nav'>
              <NavList />
          </nav>
     </header>
  )
}

export default Header