import React, {useContext,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import Buttons from '../components/Buttons'
import CheckRadioButton from '../components/CheckRadioButton'
import Heading from '../components/Heading'
import Instruction from '../components/Instruction'
import { questionaireContext } from '../QuestionaireProvider'
import Swal from 'sweetalert2'
export default function Pages5({next,prev}) {

  let {page5, setPage5}  = useContext(questionaireContext)

  let handleOnchange = (e)=>{
    let {name, value} = e.target
    setPage5(page5.map(
      item=>item.name === name? {...item, value:Number(value)}:item
    ))
   
  }


  let toNext = ()=>{
    let p5 = page5.map(item=>item.value).every(item=> item !='')
    if(p5) return next()
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
   
 
 <Heading title="Sexual Desire" other="my-3" />
 

    <div className="page_wrapper">
    <p className='mb-5 mt-4'>Please select from these responses to indicate how much you agree with the following statements:</p>

<ol type='1'>
{
  page5.map(item=>{
    return(
      <li className="mb-5" key={item.id}>
        <p className='fw-bold my-3'>{item.quesn}</p>

        {
          item.option? (
                  <div className="option-list  grid-column-even">
             <CheckRadioButton type="radio" onChange={handleOnchange} name={item.name}  value={1}  label="1-No enjoyment or pleasure"/>
             <CheckRadioButton type="radio" onChange={handleOnchange} name={item.name}  value={2}  label="2-Little enjoyment or pleasure"/>
             <CheckRadioButton type="radio" onChange={handleOnchange} name={item.name}  value={3}  label="3-Some enjoyment or pleasure"/>
             <CheckRadioButton type="radio" onChange={handleOnchange} name={item.name}  value={4}  label="4-Much enjoyment or pleasure"/>
             <CheckRadioButton type="radio" onChange={handleOnchange} name={item.name}  value={5}  label="5-Great enjoyment or pleasure"/>
             </div>
          ):

          (
            <div className="option-list  grid-column-even">

            <CheckRadioButton type="radio" onChange={handleOnchange} name={item.name}  value={1}  label="1-Never"/>
            <CheckRadioButton type="radio" onChange={handleOnchange} name={item.name}  value={2}  label="2-Rare (once a month or less)"/>
            <CheckRadioButton type="radio" onChange={handleOnchange} name={item.name}  value={3}  label="3-Sometimes (more than once a month, up to twice a week)"/>
           <CheckRadioButton type="radio" onChange={handleOnchange} name={item.name}  value={4}  label="4-Often (more than twice)"/>
            <CheckRadioButton type="radio" onChange={handleOnchange} name={item.name}  value={5}  label="5-Everyday"/>
         
            </div>
          )
        }
    

 
   
      </li>
    )
  })
}
</ol>
    </div>

    <Row className='mt-3'>
        <Col xs="12" sm="7" className="text-center mb-4" >
        <Buttons text="Previous" bgcolor="btn-success" onClick={()=>prev()} status="prev"  type="button"/>
        </Col>
        <Col xs="12" sm="5" className="text-center ">
        <Buttons text="Next"  status="next" onClick={toNext} type="button" />
        </Col>
    </Row>
    </div>
  )
}
