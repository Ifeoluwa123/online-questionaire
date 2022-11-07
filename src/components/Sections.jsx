import React from 'react'

export default function Sections({section, text}) {
  return (
    <div className='section-container'>
    <div className='section-wrapper'>
        <h1>Section {section}</h1>
        <p>{text}</p>
    </div>

    </div>
  )
}
