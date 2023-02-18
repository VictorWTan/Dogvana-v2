import React from 'react'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import './Dropdowns.scss'

export default function Dropdowns({content}) {
  return (
    <div className='dropdown'>
          <p>{content}</p>
          <KeyboardArrowDownRoundedIcon className="dropdown-chevron" sx={{ fontSize: 30 }}/>
    </div>
  )
}
