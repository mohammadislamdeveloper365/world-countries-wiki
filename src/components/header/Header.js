import React from 'react'
import './Header.css';

export default function Header({header}) {
  return (
    <h1 className='header'>
        {header}
    </h1>
  )
}
