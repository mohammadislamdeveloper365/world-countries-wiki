import React from 'react'
import './Logo.css'

export default function Logo({logoName}) {
  return (
    <div className='logo-container'>
      {logoName}
    </div>
  )
}
