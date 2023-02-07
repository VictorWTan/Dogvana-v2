import React from 'react'
import './SponsorBar.scss'


export default function SponsorBar() {
  return (
    <div className='sponsor-banner'>
            <span>POWERED BY</span>
            <img className="purina-logo" src={require('../../Assets/purina.png')} alt="Purina Logo" />

    </div>
  )
}
