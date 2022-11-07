import React from 'react'

export default function Heading({title, other}) {
  return (
    <div className={`header_container ${other}`}>
    <div className="header_wrapper">
        <h2>{title}</h2>
    </div>

    </div>
  )
}
