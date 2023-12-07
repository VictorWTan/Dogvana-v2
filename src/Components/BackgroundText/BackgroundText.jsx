import React from 'react'
import './BackgroundText.scss'

export default function BackgroundText({text}) {

  console.log(text.backgroundText)
  return (
    <>
      <div className='background-text'>{text.backgroundText}</div>
      <span className='background-sub-text'>{text.backgroundSubText}</span>
    </>
  )
}
