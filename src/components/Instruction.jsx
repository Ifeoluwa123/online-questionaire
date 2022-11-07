import React from 'react'

export default function Instruction({text, ...other}) {
  return (
    <h4  {...other}>{text}</h4>
  )
}
