import React from 'react'
import './Link.css'

export default function Link({href, name}) {
  return (
    <a href={href} className="link">
        {name}
    </a>
  )
}
