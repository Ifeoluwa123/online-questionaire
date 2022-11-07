import React from 'react'
import { useState } from 'react'
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap'
import Swal from 'sweetalert2'
import baseURL from '../api/Main'
import Logo from '../components/Logo'

export default function Registration() {
let  [val, setVal] = useState('')
let  [isLoading, setIsloading] = useState(false)


let handleSubmit  = (e)=>{
    e.preventDefault()

    if(val == ''){
        Swal.fire(
            'Error',
              'All fields are required',
            'error'
          )
    }else{
        setIsloading(true)
        setTimeout(()=>{

            baseURL.post('registration.php', {name:val},{
                headers:{
                  'Content-Type':'multipart/form-data'
                }
              })
              .then(({data})=>{
            
                if(data.success){
                    setVal('')
                    Swal.fire(
                        'Success',
                        data.msg,
                        'success'
                      )
                      setIsloading(false)
                }
                if(data.err){
                    setIsloading(false)
                    Swal.fire(
                        'error',
                        data.msg,
                        'error'
                      )
                   
                }
                
            })
            setIsloading(false)
        },1000)
       
      
    }
    console.log(val)
}



  return (
    <>
        <div className='registration_container'>
   

   </div>
    <div className='registration_wrapper'>
    <div className='registration_wrapper1'>
           <h2 className='text-center pt-5 text-uppercase fw-bold'>Registration Form</h2>

           <form className='px-2' onSubmit={handleSubmit}>
                    <Row className="mt-4">
                        <Col xs={12}>
                            <Form.Control placeholder='Enter your name' name="name" value={val} onChange={(e)=>setVal(e.target.value)}  />
                        </Col>
                        <Col xs={12} className="mt-3  d-flex justify-content-center align-items-center">
                            <Button type="submit" className="d-flex justify-content-center align-items-center">
                                Submit &nbsp; {isLoading? <Spinner animation='border' /> : '' }
                            </Button>
                        </Col>
                    </Row>
           </form>
    </div>

    </div>
    </>

  )
}
