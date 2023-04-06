import React from 'react'
import './Navbar.css'
import Logo from '../../common/Logo'
import Link from '../../common/Link'

export default function Navbar() {
  return (
    <header className='navbar'>
      <Logo logoName="Mohammad Islam"/>
      <div className='close-menu'>

      </div>
      <div className='open-menu'>

      </div>
      <div className='link-container'>
        <Link name="Home"/>
        <Link name="About Us"/>
        <Link name="Contact"/>
        <Link name="My Work"/>
      </div>
    </header>
  )
}
