import React from 'react'
import { Form} from 'react-bootstrap'
export default function InputForms({name,placeholder, type, width, ...other}) {
  return (
    <Form.Control name={name} className={width} {...other}   placeholder={placeholder} type={type} />
  )
}
