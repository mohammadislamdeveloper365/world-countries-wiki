import React from 'react'
import './CountryCard.css';
import Img from '../../../common/Img';

export default function CountryCard({name, population, countryFlag, continent}) {
    
    return (
    <div className='conutry-card'>
        <h2>
            Country: {name}
        </h2>
        <p>
            Continent: {continent}
        </p>
        <p>
            Population: {population}
        </p>
        <Img src={countryFlag}/>
        
    </div>
  )
}
