import React,{useState,useEffect, useContext} from 'react'
import { Col, Row } from 'react-bootstrap'
import Buttons from '../components/Buttons'
import Heading from '../components/Heading'
import Instruction from '../components/Instruction'
import Sections from '../components/Sections'
import Swal from 'sweetalert2'

import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'

import { questionaireContext } from '../QuestionaireProvider'

export default function Pages4({next,prev}) {

  let { page4, setPage4,} = useContext(questionaireContext)
 
  let [show, setShow] = useState(false)
  let [image, setImage] = useState('')
  let [imageCount, setImageCount] = useState(null)




  let toNext = ()=>{
    let q1 = Object.keys(page4[0].value).length
    let q2 = Object.keys(page4[1].value).length
    let q3 = Object.keys(page4[2].value).length
    let q4 = Object.keys(page4[3].value).length
    let q5 = Object.keys(page4[4].value).length
    let q6 = Object.keys(page4[5].value).length
    let q7 = Object.keys(page4[6].value).length
    
    
    if((q1 == 4) && (q2 == 6) && (q3 == 6) && (q4 == 6) && (q5 == 6) && (q6 == 10) && (q7 == 6)) return next()
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

    let img = document.querySelectorAll(".image-container>img")
    let imgWithTable = document.querySelectorAll(".image-wrapper>img")
    let imgDisplay = document.querySelector(".selected-image")
    img.forEach((item,i)=>{
      item.addEventListener("click",(e)=>{
        setShow(!show)
        setImage(e.target.src)
        // console.log(i)
        setImageCount(i+1)
      })
    })
    imgWithTable.forEach((item,i)=>{
      item.addEventListener("click",(e)=>{
        setShow(!show)
        setImage(e.target.src)
        // console.log(i)
        setImageCount(i+1)
      })
    })
  },[])

let handleOnchange = (e)=>{
  let {name, value,checked}=e.target
  if(checked){
    setPage4(
      page4.map((item,index)=>(item.name===name  ? {...item, value:Number(value)}:item))
    )
    }else{
      setPage4(
        page4.map((item,index)=>({...item}))
      )
    
  }
}



// console.log(page4)
  return (
    <div className="page_conatiner ">

<Modal centered  show={show} backdrop>
    <ModalHeader className="bg-primary">
        <h5 className="text-uppercase fw-bold text-white" >Image {imageCount}</h5>
    </ModalHeader>

    <ModalBody>
         <img className="selected-image"  src={image} alt="" />
    </ModalBody>
    <ModalFooter>
        <Buttons text="Close" type="button" onClick={()=>setShow(!show)} />
    </ModalFooter>


</Modal> 

<div >
<Heading title="Perceptions about dressing and Sexual Harassement" other="my-3" />

</div>

 

{/* 08061136084 - Dr. Ogini Mental  */}

    <div className="page_wrapper">

<ol type="1" >
      {
      page4.map((item)=>{
        return(
          <div key={item.id}>
          {item.section}
          {item.quesn || item.img}
          {item.options({page4,setPage4, handleOnchange})}
          
          </div >
        )
      })
      }
      </ol>


    </div>

    <Row className='mt-3'>
        <Col xs="12" sm="7" className="text-center mb-4" >
        <Buttons text="Previous" bgcolor="btn-success"  status="prev" onClick={()=>prev()}  type="button"/>
        </Col>
        <Col xs="12" sm="5" className="text-center ">
        {/* <Buttons text="Next"  status="next"  type="button" /> */}
        <Buttons text="Next"  status="next" onClick={toNext}  type="button"  />
        </Col>
    </Row>
    </div>
  )
}
