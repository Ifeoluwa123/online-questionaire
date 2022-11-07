import React from 'react'
import { Form } from 'react-bootstrap'
export default function CheckRadioButton({label, name, value, type,...other}) {
  return (
    <Form.Check inline label={label} name={name} {...other}  value={value} type={type} />
  )
}
