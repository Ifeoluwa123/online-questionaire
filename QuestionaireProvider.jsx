import React,{useState,createContext } from 'react'
import Page1Data from './utilities/Questions/Page1Questions'
import Page2Data from './utilities/Questions/Page2Questions'
import Page3Data from './utilities/Questions/Page3Questions'
import Page4Data from './utilities/Questions/Page4Questions'
import Page5Data from './utilities/Questions/Page5Questions'
import Page6Data from './utilities/Questions/Page6Questions'
import Page7Data from './utilities/Questions/Page7Questions'
//  import axios from 'axios'

 import Swal from 'sweetalert2'
import baseURL from './api/Main'


export let questionaireContext = createContext()

export default function QuestionaireProvider({children}) {
    let [page1, setPage1] = useState(Page1Data)
    let [page2, setPage2] = useState(Page2Data)
    let [page3, setPage3] = useState(Page3Data)
    let [page4, setPage4] = useState(Page4Data)
    let [page5, setPage5] = useState(Page5Data)
    let [page6, setPage6] = useState(Page6Data)
    let [page7, setPage7] = useState(Page7Data)
    let [page8, setPage8] = useState('')
    let [institute, setInstitute] = useState([])

    let [isSubmitted, setIsSubmitted] = useState(false)




// swal2-confirm btn btn-success


   let values ={
    page1 : page1,
    page2 : page2,
    page3 : page3,
    page4 : page4,
    page5 : page5,
    page6 : page6,
    page7 : page7
   }

  

   let value ={
    values,
    page1, 
    setPage1,
    page2, 
    setPage2,
    page3,
    setPage3,
    page4, 
    setPage4,
    page5, 
    setPage5,
    page6, 
    setPage6,
    page7, 
    setPage7,
    page8, 
    setPage8,
    institute, 
    setInstitute,
    isSubmitted,
     setIsSubmitted

   }




    // console.log(value)
// let datas = axios.post("http://localhost/questionaire/api.php",value,{
//     // headers:{
//     //     'Content-Type':'multipart/form-data'
//     // }
//     headers: {
//         // 'Content-Type':'multipart/form-data'
//         'Content-Type': 'text/plain'
//         // 'Content-Type': 'application/x-www-form-urlencoded'
//         }

//         // headers:{
//         //     method: 'HEAD',
// 		// mode: 'no-cors',
//         // }
//     // 'Content-Type': 'application/x-www-form-urlencoded'
  
// })
// .then((res)=>{
//     // console.log(res.data)
// })
// .catch(err=>{
//     console.log(err)
// })



  return (
    <questionaireContext.Provider value={value}>
            {children}
    </questionaireContext.Provider>
  )

}
