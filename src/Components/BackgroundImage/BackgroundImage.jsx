import React from 'react'
import './BackgroundImage.scss'
import SearchBar from '../SearchBar/SearchBar'
import BackgroundText from '../BackgroundText/BackgroundText'

export default function BackgroundImage() {

  const backgroundText = "Find Your New Best Friend"
  const backgroundSubText = "Browse pets from over 11,500 shelters and rescues"
  const backgroundTextProps = { backgroundSubText, backgroundText}

  return (
    <div className='background-container'>
        <SearchBar className="main-search"/>
        <BackgroundText text={backgroundTextProps}/>
    </div>
  )
}

