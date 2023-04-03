import React, { useState, useEffect } from 'react'
import './CountryContainer.css';
import CountryCard from '../country-card/CountryCard.js/CountryCard';

export default function CountryContainer() {
    let [countries, setCountries] = useState([]);
    
    useEffect(()=>{

        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>{
            setCountries(data);
        })

    },[]);
  return (
    <div className='countries-container'>
        {
            countries.map(country=><CountryCard name={country.name.common} population={country.population} countryFlag={country.flags.png}/>)
        }
    </div>
  )
}
