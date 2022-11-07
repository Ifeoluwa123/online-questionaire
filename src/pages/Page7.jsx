
import React, {useEffect, useState} from 'react'
import { useContext } from 'react'
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import baseURL from '../api/Main'
import Buttons from '../components/Buttons'
import CheckRadioButton from '../components/CheckRadioButton'
import Heading from '../components/Heading'
import InputForms from '../components/InputForms'
import Logo from '../components/Logo'
import { questionaireContext } from '../QuestionaireProvider'






export default function Pages7({prev}) {
  let {values,page7, setPage7, isSubmitted,setIsSubmitted} = useContext(questionaireContext)
  let [isSubmit, setIsSubmit] = useState(false)
  let [isLoading, setIsLoading] = useState(false)
  // console.log(page7)

 
  let handleOnchange = (e)=>{
    let {name, value,checked} = e.target
    setPage7(page7.map(item=>item.name === name? {...item, value:Number(value)}: item))
    // console.log(name, value)
  }
  let handleOnchange2 = (e)=>{
    let {name, value,checked} = e.target
    
    if(checked){
      setPage7(
        page7.map(item=>item.name === name? {...item, value:[...item.value, Number(value) || value]}:item)
      )
    }else{
      setPage7(
        page7.map(item=>item.name === name? {...item, value: item.value.filter(e=>e!==Number(value))}:item)
      )
    }

 
  }



let navigate = useNavigate()

let handleSubmit = (e)=>{
  
  e.preventDefault()
  setIsLoading(true)

  let p7 = page7.map(item=>item.value).every(item=> item !='')
  if(!p7){
    Swal.fire(
      'Error',
        'All Fields are required',
      'warning'
    ).then(()=>{
      setIsLoading(false)
    })
  }else{
// setIsSubmit(!isSubmit)
console.log("Submmitted")
baseURL.post('api.php', values,{
  headers:{
    'Content-Type':'text/plain'
  }
})
.then((res)=>{
  if(res.data.success){
    setTimeout(()=>{
      setIsSubmitted(true)
      setIsLoading(false)
      return navigate("/contact")
  },1000)
    Swal.fire(
      'Success',
      res.data.msg,
      'success'
    )
    setIsSubmitted(false)
    }
    if(res.data.error){
      setIsLoading(false)
      Swal.fire(
        'Error',
        res.data.msg,
        'warning'
      )
    
    }
})
.catch((err)=>{
  setIsLoading(false)
  console.log(err)
})
  }
  
  // navigate("/success")
}



  useEffect(()=>{


    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
      
  },[])
  // console.log(page7)
  return (
    <div className="page_conatiner">


      <Heading title="Perceptions of Campus Climate Regarding Sexual Harassement" other="my-3" />
      <div className="page_wrapper">
        {
           page7.map(item=>{
            return(
              <div key={item.id}>
               {item.sections}
              {item.instruction}
              {item.question}
              {
              item.section == "A"?
              (
          <div className="option-list grid-column-even">
          <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={1}  label="Very unlikely"/>
          <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={2}  label="Unlikely"/>
          <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={3}  label="Neutral"/>
          <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={4}  label="Likely"/>
          <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={5}  label="Very likely"/>
          
          </div>
              ):

                item.section == "B" ?

                (
                  <div className="option-list grid-column-even">
                  <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={1}  label="Strongly Disagree"/>
                  <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={2}  label="Disagree"/>
                  <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={3}  label="Neutral"/>
                  <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={4}  label="Agree"/>
                  <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={5}  label="Strongly Agree"/>
                  </div>
                ):

                item.section == "C"?
                  item.options({handleOnchange,handleOnchange2}): 
                  
                 (
                  <div className="option-list grid-column-even">
                  <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={1}  label="Not at all aware"/>
                  <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={2}  label="Slightly aware"/>
                  <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={3}  label="Somewhat aware"/>
                  <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={4}  label="Very aware"/>
                  <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={5}  label="Extremely aware"/>
                
       
                  </div>
                 )
              }
             </div> 
            )

           })
        }
      </div>

    <Row className='mt-3'>
        <Col xs="12" sm="7" className="text-center mb-4" >
        <Buttons text="Previous" bgcolor="btn-success"  status="prev" onClick={()=>prev()} type="button"/>
        </Col>
        <Col xs="12" sm="5" className="text-center ">
          <Button disabled={isLoading} className="btn-danger submit text-center d-flex justify-content-center fw-bold align-items-center"  onClick={handleSubmit}     type="submit">Submit
          &nbsp;  {isLoading ? <Spinner animation='border'  /> : null }
                          
          </Button>
        {/* <Buttons  text="Submit"   bgcolor="btn-danger" className="last-submit " onClick={handleSubmit}     type="submit"/> */}
        {/* <Buttons text="Next"  status="next" className="last-submit px-5"  type="button"/> */}
        </Col>
    </Row>
    </div>
  )
}
