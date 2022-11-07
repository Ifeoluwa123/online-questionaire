import React, {useState, useEffect} from 'react';
import {Modal,Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import CheckRadioButton from '../components/CheckRadioButton';
import Logo from '../components/Logo';

export default function FilledPage({errMsg,isFilledBefore}) {

    const [show, setShow]= useState(true)
    const [ans, setAns]= useState(false)
    const [text, setText]= useState('')
    let navigate = useNavigate()
    if(isFilledBefore){
      setTimeout(()=>{

        navigate("/success")
      },4000)
    }
  return (
    <Modal  size="md" show={show} onHide={show} backdrop="static"
    keyboard={false}  centered>
         <Modal.Header style={{backgroundColor:"#57031f"}} className=' text-white' >
      {/* <Modal.Title>INSTRUCTIONS TO PARTICIPANTS</Modal.Title> */}
      <Modal.Title><h4 className="fw-bold text-center fs-6 text-uppercase consent">Error Page</h4></Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Logo  />


    {/* <h5 className="fw-bold  text-capitalize mt-3">Instructions to participants</h5>
      <p className="fw-normal ">
            Please give consent to participate in the study below.
      </p> */}

      <p className='mt-4 text-center fw-bold pb-3'>
    
                {errMsg}
       </p>



    
    </Modal.Body>

    </Modal>
  )
}
