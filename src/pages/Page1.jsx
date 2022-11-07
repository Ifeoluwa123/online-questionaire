import React, {useEffect,useState,useContext} from 'react'
import { Col, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import baseURL from '../api/Main'
import Buttons from '../components/Buttons'
import Heading from '../components/Heading'
import Logo from '../components/Logo'
import { questionaireContext } from '../QuestionaireProvider'
import dataValues from '../utilities/dataValues'
import Data from '../utilities/Questions/Page1Questions'



export default function Page1({next}) {

let {oau, ui, unilag} = dataValues
let {page1,setPage1,institute,setInstitute, setIsNext} = useContext(questionaireContext)

const [otherIdentity, setOtherIdentity] = useState(false)
const [otherEthnicity, setOtherEthnicity] = useState(false)
const [sexualOrientation, setSexualOrientation] = useState(false)
const [sexualAttraction, setSexualAttraction] = useState(false)
const [fac, setFac] = useState([])
const [desig, setDesig] = useState([])



let ArtData = [
  "Faculty of Law",
  "Faculty of Arts",
  "Faculty of Multidisciplinary studies"
]
let SocialSciData = [
  "Faculty of Administration",
  "Faculty of Education",
  "Faculty of Social sciences",
  "Faculty of Management sciences",
]
let SciData = [
"Faculty of Agriculture",
"Faculty of Basic Medical Sciences",
"Faculty of Clinical Sciences",
"Faculty of Dentistry",
"Faculty of Dental Sciences",
"Faculty of Pharmacy",
"Faculty of Public Health",
"Faculty of Renewable Natural Resources",
"Faculty of Sciences",
"Faculty of Technology",
"Faculty of Engineering",
"Faculty of Environmental design and Management",
"Faculty of Environmental Sciences",
"Faculty of Veterinary medicine"
]
  let toggler = {
    otherIdentity, 
  setOtherIdentity,
  otherEthnicity, 
  setOtherEthnicity,
  sexualOrientation, 
  setSexualOrientation,
  sexualAttraction, 
  setSexualAttraction,
  fac, 
  setFac,
   desig, 
   setDesig
  }



  let handleChange = (e)=>{
    let {name, value} = e.target
   
   
    setPage1(page1.map((item,index)=>(item.name === name? {...item, value:Number(value) || value}: item)))

  }
  let handleFacChange = (e)=>{
    let {name, value} = e.target
    let res = ArtData.findIndex(item=>item === value);
    let res2 = SciData.findIndex(item=>item === value);
    let res3 = SocialSciData.findIndex(item=>item === value);
    if(res > -1){
      setPage1(page1.map((item,index)=>(item.name === "faculty"? {...item, value:"Faculty of Art"}: item)))
      // console.log("Faculty of Art")
    }
    else if(res2 > -1){
      setPage1(page1.map((item,index)=>(item.name === "faculty"? {...item, value:"Faculty of Science"}: item)))
      // console.log("Faculty of Science")
    }else if(res3 >-1){
      setPage1(page1.map((item,index)=>(item.name === "faculty"? {...item, value:"Faculty of Social Science"}: item)))
      
      // console.log("Faculty of Social Science")

    }else{
      setPage1(page1.map((item,index)=>(item.name === "faculty"? {...item, value:""}: item)))
     
    }

 

  }



let toNext = ()=>{
  let p1 = page1.map(item=>item.value).every(item=> item !='')
  if(p1) return next()

  Swal.fire(
    'Error',
    `All fields are required`,
    'warning'
  )

  
}





useEffect(()=>{



            

  let container = document.querySelector("[data-staff-student]")
                let staff = document.querySelector("[data-staff]")
                let student = document.querySelector("[data-student]")
                
                container.addEventListener('click',(e)=>{
                    let check = e.target.value
                    staff.classList.toggle("active", check==="Staff")
                    student.classList.toggle("active", check==="Student")
                    
                })
                staff.addEventListener("click", (e)=>{
                        let val = e.target.value
                        if(val==="Academic"){
                          toggler.setDesig(["GA","Lecturer II", "Lecturer I","Senior Lecturer","Associate Professor","Professor","Emeritus Professor"])
                        }
                        if(val==="Non-Academic"){
                           
                          toggler.setDesig(["Junior staff", "Senior staff", "Faculty member", "Admin staff"])
                            
                        }
                        
                       
                        
                })

    let institute = document.querySelector("[data-institute]")
        institute.addEventListener("change",(e)=>{
          let {name, value} = e.target
        
          if(value === "OAU"){
            toggler.setFac(oau.sort())
          }else if(value === "UI"){
            toggler.setFac(ui.sort())
          }else if(value === "UNILAG"){
            toggler.setFac(unilag.sort())
          }
          
          else{
            toggler.setFac([])
          }
        })

        let disability = document.querySelector("[data-disability]");
        let disableType =  document.querySelector(".disable-type");
        disability.addEventListener("click",(e)=>{
          disableType.classList.toggle("active", e.target.value=="Yes")
        })
            

},[desig])

useEffect(()=>{
  let datas = baseURL.get("institute.php")
    
        .then((res)=>{
          setInstitute(res.data)
                // console.log(res.data)
            })
            .catch(err=>{
              // alert(err)
              Swal.fire(
                'Check your internet',
                `${err.message}`,
                'warning'
              )
                
            })
    
  return ()=>{
    clearTimeout(datas)
  }
},[])


  return ( 
    <div className="page_conatiner pt-4 active" >
      <Logo />
      <Heading title="Sociodemographic Factors" other="my-3" />
 
 
    <div className="page_wrapper">

{/* ALL PEOPLE SEEMS TO NEED DATA PROCESSING */}
      <ol type="1" >
{
 page1.map(
    (item, index)=>{
      return(
       
          <li key={index} className="item">
            <div className='my-5'>
              <p className="fw-bold">{item.qsn}</p>
              <div className='option-subqesn-container'>
              {item.options({page1,setPage1,handleFacChange, handleChange,institute,...toggler})}
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
            {/* <Button variant="success" className='w-25'> Previous</Button> */}
        </Col>
        <Col xs="12" sm="5" className="text-center ">
        <Buttons text="Next"  status="next"  type="button" onClick={toNext } />
        </Col>
    </Row>
    </div>
  )
}
