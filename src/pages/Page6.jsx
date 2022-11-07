import React,{useContext,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import Buttons from '../components/Buttons'
import CheckRadioButton from '../components/CheckRadioButton'
import Heading from '../components/Heading'
import { questionaireContext } from '../QuestionaireProvider'
import Swal from 'sweetalert2'



export default function Pages6({next,prev}) {
let {page6, setPage6} = useContext(questionaireContext)


  let handleOnchange = (e)=>{
    let {name, value} = e.target
setPage6(page6.map(item=>item.name===name? {...item, value:Number(value) || value}:item))
}
// console.log(page6)

let toNext = ()=>{
  let p6 = page6.map(item=>item.value).every(item=> item !='')

  if(p6) return next()
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
  return (
    <div className="page_conatiner ">
       <Heading title="Mental Health Status" other="my-3" />
    <div className="page_wrapper">

      {
        page6.map(item=>{
          return(
            <React.Fragment key={item.id}>
              {item.section}
              {item.question}

            {
              item.option? 
                  item.option({handleOnchange})
              :
              (
                <div className="option-list grid-column-odd">
                <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={1}  label="Not at all"/>
                <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={2}  label="Several days"/>
                <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={3}  label="More than half the days"/>
                <CheckRadioButton type="radio" name={item.name} onChange={handleOnchange}  value={4}  label="Nearly everyday"/>
                </div>
              )
            }  

            </React.Fragment>
          )
        })
      }
    </div>

    <Row className='mt-3'>
        <Col xs="12" sm="7" className="text-center mb-4" >
        <Buttons text="Previous" bgcolor="btn-success" onClick={()=>prev()}  status="prev"  type="button"/>
        </Col>
        <Col xs="12" sm="5" className="text-center ">
        <Buttons text="Next"  status="next" onClick={toNext} type="button"/>
        </Col>
    </Row>
    </div>
  )
}
