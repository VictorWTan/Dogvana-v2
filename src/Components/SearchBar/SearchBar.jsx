import React from 'react'
import './SearchBar.scss'
import PageviewRoundedIcon from '@mui/icons-material/PageviewRounded';

export default function SearchBar() {
  return (
    <div className='pet-searchbar'>
        <input type="text" className='animal-searchbar' placeholder='Search Terrier, Kitten, etc...'/>
        <div className='vertical-line-container'>
            <div className='vertical-line'></div>
        </div>
        <input type="text" className='location-searchbar' placeholder='Enter City, State, or ZIP'/>
        <div className='search-icon-container'>
            <PageviewRoundedIcon className='search-icon' sx={{ fontSize: 45 }}/>
        </div>
    </div>
  )
}
