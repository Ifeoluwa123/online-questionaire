import React from 'react'
import { Button } from 'react-bootstrap'

export default function Buttons({text, bgcolor,  type, status, ...other}) {
  return (
    <Button  className={` ${status} ${bgcolor}`} {...other}  type={type}  >{text}</Button>
  )
}
