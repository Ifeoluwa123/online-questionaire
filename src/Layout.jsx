import React, {useEffect, useContext} from 'react'
import { useState } from 'react'

import ConsentPages from './pages/ConsentPages'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import { questionaireContext } from './QuestionaireProvider'

import Swal from 'sweetalert2'
import ParticleBg from 'particles-bg'
import FilledPage from './pages/FilledPage'
import baseURL from './api/Main'
import { useNavigate } from 'react-router-dom'
export default function Layout() {

    let [pageId, setPageId] = useState(1)
    let [pages,setPages] = useState([])
    let [isFilledBefore, setIsFilledBefore] = useState(false)
    let [errMsg, setErrMsg] = useState('')
  // let {page1,page2,page3,page4,page5,page6,page7} = useContext(questionaireContext)

 


  function next(){
    
    setPageId(prev=>prev+1)
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    if(pageId >pages.length){
      setPageId(pages.length)
    }
    upDatePage()
    
  }
  function Prev(){
    setPageId(prev=>prev-1)
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    if(pageId <1){
      setPageId(1)
    }
    upDatePage()
  }

  function upDatePage(){
  
    pages.forEach((page, i)=>{
      page.classList.toggle('active', i==(pageId-1))
    })
  }


  let navigate = useNavigate()
  

  useEffect(()=>{
    setPages([...document.querySelectorAll('.page_conatiner')])
 
    upDatePage()
    
  },[pageId])

  // useEffect(()=>{
  //   let datas = baseURL.get("check.php")
  //   .then((res)=>{
      
  //     if(res.data.error){
  //       console.log(res.data.msg)
  //       setIsFilledBefore(true)
  //       setErrMsg(res.data.msg)
        
  //     }
      
  //   })
  //   .catch(err=>{
  //     setIsFilledBefore(false)
  //     console.log(err)
  //   })
  //   return ()=>{
  //     clearTimeout(datas)
  //   }
 
  // },[])

  let SelectInfo = ()=>{
    let datas = baseURL.get("check.php")
    .then((res)=>{
      
      if(res.data.error){
        console.log(res.data.msg)
        setIsFilledBefore(true)
        setErrMsg(res.data.msg)
        
      }
      
    })
    .catch(err=>{
      setIsFilledBefore(false)
      console.log(err)
    })

    if(isFilledBefore){
      return <FilledPage errMsg={errMsg} isFilledBefore={isFilledBefore} />
    }else{
      return <ConsentPages />
    }
    return ()=>{
      clearTimeout(datas)
    }
  }
return(

  <>
  
  <form>
        <div className="layout_container">
          {SelectInfo()}
          
          {/*<ConsentPages />  */}
            <div className="layout_wrapper">
          

              <Page1 next={next} />
              <Page2 next={next} prev={Prev} />
              <Page3 next={next} prev={Prev} />
              <Page4 next={next} prev={Prev} />
              <Page5 next={next} prev={Prev} />
              <Page6 next={next} prev={Prev} />
             <Page7  prev={Prev} />

            </div>
            </div>
            <ParticleBg   type="polygon" bg={{
              position:'fixed',
              top:'0', 
              opacity:'0.4',
              // height:'200vh', 
              // height:size+'vh', 
              zIndex:'-1'
            }}
              />
            </form>
           
  </>

)
  
}
