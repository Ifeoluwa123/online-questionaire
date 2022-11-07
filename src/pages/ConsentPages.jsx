
import React, {useState, useEffect} from 'react';
import {Modal,Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import CheckRadioButton from '../components/CheckRadioButton';
import Logo from '../components/Logo';
export default function ConsentPages() {


    const [show, setShow]= useState(true)
    const [ans, setAns]= useState(false)
    const [text, setText]= useState('')






    let navigate = useNavigate()
    let initial = {
        Info:'',
        study:'',
        member:''
    }
    const [data, setCon]= useState(initial)
    let handleChange = (e)=>{
        // const fields = Object.assign({},{[e.target.name]:e.target.value})
        setCon({...data,[e.target.name]:e.target.value})

        // data = e.target.value
    }
        // console.log(data)
    const  handleSubmit = (e)=>{
        e.preventDefault()
        let check =  Object.values(data).every(item=>item === "Agree")
        let apprvStatus = document.querySelectorAll('.approval')
    //    console.log(apprvStatus[0].matches('.show'))
        if(check){
            apprvStatus[0].classList.toggle('show', !apprvStatus[0].matches('.show'))
            setAns(true)
        }else{
            apprvStatus[1].classList.toggle('show', !apprvStatus[1].matches('.show'))
            let times = setTimeout(()=>{
                navigate('/disapproved')
            },1000)
           
        }
    }


    useEffect(()=>{

        if(ans){
            let times = setTimeout(()=>{
                setShow(!show)
            },1000)
        }
     
    },[ans])

  return (
    <Modal  size="md" show={show} onHide={show} backdrop="static"
    keyboard={false}  centered>
         <Modal.Header style={{backgroundColor:"#57031f"}} className=' text-white' >
      {/* <Modal.Title>INSTRUCTIONS TO PARTICIPANTS</Modal.Title> */}
      <Modal.Title><h4 className="fw-bold text-center fs-6 text-uppercase consent">The sound of silence: Interrogating the culture around sexual harassment in first generation federal universities in South Western Nigeria.</h4></Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Logo  />


    <h5 className="fw-bold  text-capitalize mt-3">Instructions to participants</h5>
      <p className="fw-normal ">
            Please give consent to participate in the study below.
      </p>

      <p className='mt-4'>
       You are being asked to participate in this study because you were identified as a staff or student of Obafemi Awolowo University, University of Ibadan or University of Lagos. This study is to interrogate the culture around sexual harassment in Nigeria universities. It will explore the perceptions that drive heterosexual and same-sex sexual harassment among students and staff (including an objective assessment of the role of dressing), the social and mental health consequences among survivors, the institutional mechanisms present to prevent and respond to sexual harassment, determinants of the decision to report, the resultant actions taken and the lived experience for survivors. 
You are one of the estimated 1600 persons who will be filling this questionnaire. All responses will be kept completely anonymous and the data will only be shared with the team members who are engaged with this study process. All study documents will be stored securely. You are free to withdraw from the study at any time you feel like without any consequences. This questionnaire shall take about 20 minutes of your time. We are aware that you may have alternative use of your time. We have therefore kept the questions simple and short. There are no direct benefits to you for participating in this process. However, the findings generated from the study will help to develop evidence that will improve the institutional response to sexual harassment.
A 500-naira recharge card incentive will be given for each fully completed questionnaire. A link to provide mobile numbers to receive the recharge card will pop up automatically for each completed questionnaire. This is optional and only for those who wish to receive the recharge card. This information will be separate from the study data and will not be linked or used for the study in any way.   
Please call the principal investigator, Boladale Mapayi, at 08033930096 if you have questions, complaints, or get sick or injured as a result of being in this study. You can also call or contact the IRB Institute of Public Health Office if you have questions about your rights as a study participant. Contact the HREC Institute of Public Health if you feel you have not been treated fairly or if you have other concerns.  The contact information is:  Mrs Titus, Desk Officer, Health Research Ethics Committee, IPH Office, OAU, Ile-Ife. Mobile: 08033823194; Email: iphoauifehrec@gmail.com

       </p>



       <form  className='mt-4'>
            <ul  >
                <li >
                <p className='fw-bold'>I have read and I understand the information above.</p>
                <div className="option-list grid-column-odd mb-2">
                  <CheckRadioButton label="Agree" value="Agree"   onChange={handleChange} name="Info"  type="radio"/>
                  <CheckRadioButton label="Disagree" value="Disagree"   onChange={handleChange} name="Info"  type="radio"/>
                 
                  </div>
                </li>


                <li >
                <p className='fw-bold'>I give my consent to participate in this study </p>
                <div className="option-list grid-column-odd mb-2">
                  <CheckRadioButton label="Agree" value="Agree"   onChange={handleChange} name="study"  type="radio"/>
                  <CheckRadioButton label="Disagree" value="Disagree"   onChange={handleChange} name="study"  type="radio"/>
                 
                  </div>
                </li>
          
                <li >
                <p className='fw-bold'>Are you a staff or student of OAU, UI or UNILAG?</p>
                <div className="option-list grid-column-odd">
                  <CheckRadioButton label="Agree" value="Agree"   onChange={handleChange} name="member"  type="radio"/>
                  <CheckRadioButton label="Disagree" value="Disagree"   onChange={handleChange} name="member"  type="radio"/>
                 
                  </div>
                </li>
          




            </ul>

            <div className='mb-1  px-5 status-container'>
                     <p className= 'text-success approval fw-bold m-0 '>Approval Successful!</p>
                        <p className='text-danger approval fw-bold m-0 '>Approval Denied!</p>
            </div>


            <Modal.Footer>
      <Button type="submit"  variant="secondary" onClick={handleSubmit} >
        Submit
      </Button>
      
    </Modal.Footer>
            </form>
    </Modal.Body>

    </Modal>
  )
}
