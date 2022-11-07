import React,{useContext, useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import Buttons from '../components/Buttons'
import Heading from '../components/Heading'
import Instruction from '../components/Instruction'
import { questionaireContext } from '../QuestionaireProvider'

import Data from '../utilities/Questions/Page3Questions'




export default function Pages3({next,prev}) {
  let {page3,setPage3}= useContext(questionaireContext)


  
  let [behaviour, setBehaviour] = useState(false)
  let [incident, setIncident] = useState(false)
  let [input, setInput] = useState('')
  let [tell, setTell] = useState(false)
  // console.log(page3)
  let toggler = {
    behaviour, 
    setBehaviour,
    incident, 
    setIncident,
    tell, 
    setTell
  }


  

  let handleOnChange = (e)=>{
    let {name, value} = e.target
    setPage3(page3.map(item=>item.name===name?{...item, value:Number(value) || value}: item))
    
  }
  let handleOnChangeCheckBox = (e)=>{
    let {name, value, checked} = e.target
    
    if(checked){
      setPage3(
        page3.map(item=>item.name === name? {...item, value:[...item.value,  Number(value) || value]}:item)
      )
      
    }else{
      setPage3(
        page3.map(item=>item.name === name? {...item, value:item.value.filter(e=>e !== Number(value))}:item)
      )

    }

    
  }



  let toNext = ()=>{
    let p3 = page3.map(item=>item.value).every(item=> item !='')
    if(p3) return next()
    Swal.fire(
      'Error',
      `All fields are required`,
      'warning'
    )
    
  }
  

useEffect(()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
},[])


  // console.log(page3)
  return (
    <div className="page_conatiner" >

<div >
 
<Heading title="Context and Disclosure" other="my-3" />

<Instruction className="title m-3" text="It can often be helpful to campus staff to understand more about where sexual harassment occurs. A number of measures have been developed to assess this. For the next set of questions, please pick the MOST SERIOUS INCIDENT if you had more than one, and answer the questions below about this experience. If you had no unwanted sexual experiences, circle “no experience” for each of the questions below." />
</div>



    <div className="page_wrapper px-3">

      <ol type="1" >
{
  Data.map(
    (item, index)=>{
      return(
       
          <li key={index} className="item">
            <div className='my-5'>
              <p className="fw-bold">{item.quesn}</p>
              <div className='option-subqesn-container'>
              {item.options({page3,setPage3,handleOnChange,handleOnChangeCheckBox,...toggler})}
              </div>
          
            </div>
            
            </li>
            
          
      )
    }
  )
}
  </ol>

    </div>



    <Row className='mt-3'>
        <Col xs="12" sm="7" className="text-center mb-4" >
        <Buttons text="Previous" bgcolor="btn-success" onClick={()=>prev()} status="prev"  type="button"/>
        </Col>
        <Col xs="12" sm="5" className="text-center ">
        <Buttons text="Next"  status="next" onClick={toNext}  type="button"  />
        </Col>
    </Row>

    </div>
  )
}
