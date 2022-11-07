import React from 'react';
import { Form} from 'react-bootstrap'
export default function Selects({options,name,firstOpt, ...others}) {
  return (
    <Form.Select  name={name} {...others}  >
    <option muted >{firstOpt}</option>
        {
options.map((item, index)=>{
    return(
        <option key={index} value={item}>{item}</option>
    )
})
        }
     
         </Form.Select>
  );
}
