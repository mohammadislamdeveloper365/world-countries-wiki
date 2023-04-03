import React from 'react'
import './CountryCard.css';

export default function CountryCard({name, population, countryFlag}) {
    
    return (
    <div className='conutry-card'>
        <h2>
            {name}
        </h2>
        <p>
            Population: {population}
        </p>
        <img src={countryFlag} alt="flag" />
    </div>
  )
}
