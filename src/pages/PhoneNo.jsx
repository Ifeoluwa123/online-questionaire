import React,{useContext, useState} from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { Navigate,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import baseURL from '../api/Main'
import { questionaireContext } from '../QuestionaireProvider'

export default function PhoneNo() {
    let [phone, setPhone] = useState('')
    let [network, setNetwork] = useState('')
    let {isSubmitted, setIsSubmitted} = useContext(questionaireContext)

   
    let [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate()
    let handleSubmit = (e)=>{
      e.preventDefault()
      console.log(phone, network)
      setIsLoading(!isLoading)
        setTimeout(()=>{
            
            if(phone != '' && network != ''){
                setIsLoading(false)
                baseURL.post('phone.php', {phone:phone, network:network},{
                    headers:{
                      'Content-Type':'multipart/form-data'
                    }
                  })
                  .then((res)=>{
                    if(res.data.success){
                        navigate('/success')
                        Swal.fire(
                            'Success',
                            res.data.msg,
                            'success'
                          )
                          setIsSubmitted(false)
                    }
                    if(res.data.error){
                        
                        Swal.fire(
                            'Error',
                            res.data.msg,
                            'error'
                          )
                          setIsSubmitted(false)
                    }
                    
                    
                  })
                  .catch(err=>{
                    console.log(err)
                  })
              }else{
                Swal.fire(
                  'Error',
                    'All fields are required',
                  'error'
                )
                setIsLoading(false)
              }
        },1500)
     
  
    }
     let handleChange = (e)=>{
      let {name, value} = e.target
      setPhone(value)
     }

     if(!isSubmitted){
        return <Navigate to="/" />
    }else{
        return (
            <>
            <div className="phone">
                <div className="success_wrapper">
                      <h2 className='fw-bold '>Thank you! <span>👍</span></h2>
                      <p className='text-center mt-2 fw-bolder px-1'>Enter your contact number below to receive 500 naira recharge card.</p>
                      <form  className='mt-3' onSubmit={handleSubmit}>
                          <Form.Control type="number"  name="phone" value={phone}  onChange={handleChange}  placeholder='Enter your phone number' />
                          <Form.Select className="mt-2" name="network" onChange={(e)=>setNetwork(e.target.value)}>
                                <option muted>--Select Your Network--</option>
                                <option value="MTN">MTN</option>
                                <option value="GLO">GLO</option>
                                <option value="9MOBILE">9MOBILE</option>
                                <option value="AIRTEL">AIRTEL</option>
                            </Form.Select>
                          <div className='text-center pt-3 d-flex justify-content-center  align-items-center'>
                           
                          <Button type="submit" disabled={isLoading} className='btn-danger text-center d-flex justify-content-center fw-bold align-items-center'>Submit
                        &nbsp;  {isLoading ? <Spinner animation='border' /> : null }
                          </Button>
        
                          </div>
                      </form>
                </div>
        
            </div>
            
            
            </>
          )
    }
   
}
