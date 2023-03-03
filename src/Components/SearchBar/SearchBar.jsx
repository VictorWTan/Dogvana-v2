import React from 'react'
import './SearchBar.scss'

export default function SearchBar() {
  return (
    <div className='search-bar-container'>
        <input type="text" className='search-bar' name='search-bar' placeholder='Search Poodles, Terriers, etc...'/>
        <p>|</p>
        <input type="text" className='location-search-bar' name='location-search-bar' placeholder='Enter City, State, or ZIP'/>
    </div>
  )
}
