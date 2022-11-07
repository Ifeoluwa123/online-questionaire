import React,{useContext, useState,useEffect} from 'react'
import { Col, Form, Row, Table } from 'react-bootstrap'
import Swal from 'sweetalert2'
import Buttons from '../components/Buttons'
import Heading from '../components/Heading'
import Instruction from '../components/Instruction'
import Logo from '../components/Logo'
import { questionaireContext } from '../QuestionaireProvider'

import Data from '../utilities/Questions/Page2Questions'





export default function Page2({next, prev}) {


let {page2,setPage2} = useContext(questionaireContext)
let handOnchange = (e)=>{
  let {name, value} = e.target
  setPage2(page2.map(item=>(item.name === name?{...item, value:Number(value)}: item)) )
 
}








let toNext = ()=>{
  let p2 = page2.map(item=>item.value).every(item=> item !='')
  if(p2) return next()
// let input = document.querySelectorAll("input")
//   input.forEach((e)=>{
//     console.log(e.required)
//   })
  Swal.fire(
    'Error',
    `All fields are required`,
    'warning'
  )
  // window.scrollTo({
  //   top:0,
  //   behavior:'smooth'
  // })
  
}



useEffect(()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
},[])

  return (
<div className="page_conatiner" >   
 <Heading title="Sexual Experience" other="my-3" />
 
 
  <div className='px-3'>

   <Instruction className="title" text="During the past 24 months at this University, have you ever been in a situation where any of your instructors, supervisors, peers or co-workers..." />
  </div>
  
  
    <div className="page_wrapper px-3">


    <Table  striped bordered hover responsive size="md">
      <thead>
                    <tr >
                        <th className='first'  colSpan="10"></th>
                        <th colSpan="3">Never</th>
                        <th colSpan="3">Once or Twice</th>
                        <th colSpan="3">Sometimes</th>
                        <th colSpan="3">Often</th>
                        <th colSpan="3">Most Times</th>
                    </tr>
      </thead>


      <tbody>
        {/* <ol type="1"> */}

        {
          Data.map(item=>{
            return(
              <tr key={item.id}>
              <td className='first' colSpan="10"><p>{item.quesn}</p></td>
              <td colSpan="3"><Form.Check  name={item.name} onChange={handOnchange} value={1} inline type="radio"  /></td>
              <td colSpan="3"><Form.Check name={item.name} onChange={handOnchange} value={2} inline type="radio"  /></td>
              <td colSpan="3"><Form.Check name={item.name} onChange={handOnchange} value={3} inline type="radio"  /></td>
              <td colSpan="3"><Form.Check name={item.name} onChange={handOnchange} value={4} inline type="radio"  /></td>
              <td colSpan="3"><Form.Check name={item.name} onChange={handOnchange} value={5} inline type="radio"  /></td>
              
            
            </tr>
            )
          })
        }
      

        </tbody>







      </Table>
    </div>




    <Row className='mt-3'>
        <Col xs="12" sm="7" className="text-center mb-4" >
        <Buttons text="Previous" bgcolor="btn-success" onClick={()=>prev()}  status="prev"  type="button"/>
        </Col>
        <Col xs="12" sm="5" className="text-center ">
        <Buttons text="Next"  status="next"  type="button" onClick={toNext} />
        </Col>
    </Row>


    </div>
  )
}
