import CheckRadioButton from "../../components/CheckRadioButton";
import InputForms from "../../components/InputForms";
import {IoIosClose} from 'react-icons/io'
import Subquestion from "../../components/Subquestion";
import Selects from "../../components/Selects";
const Data = [
    { 
        id:1,
        qsn:'Age', 
        name:'Age',
        value:'',
        options: function({page1, handleChange}){ //arrow fuction does't work
            return(
                <div className="w-50" >
                <InputForms className="mt-3" type="text" name={this.name} value={page1.value} onChange={handleChange}  placeholder="Your Age" />
                </div>
            )
            
        },
      
    }, 




    {
        id:2,
        qsn:'What is your current gender identity?',
        name:'identity',
        value:'',
        options: function({page1,handleChange,setPage1,otherIdentity,setOtherIdentity}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list grid-column-odd">
            <CheckRadioButton type="radio" name={this.name}  value={1} onChange={handleChange} label="Woman"/>
            <CheckRadioButton type="radio" name={this.name}  value={2} onChange={handleChange} label="Genderqueer/gender non-conforming/Non-binary"/>
            <CheckRadioButton type="radio" name={this.name}  value={3} onChange={handleChange} label="Man"/>
            <CheckRadioButton type="radio" name={this.name}  value={4} onChange={handleChange} label="Transgender"/>


                {
                  otherIdentity? 
                  <div className="other-text-icon"><span className="text"><InputForms name={this.name} value={page1.value} onChange={handleChange}  placeholder="What is your current gender identity?" /> <span className="icon-wrapper" onClick={(e)=>{setPage1(page1.map((item,index)=>(item.name === "identity"? {...item, value:''}: item)));; setOtherIdentity(!otherIdentity)}}><IoIosClose   size="2rem" color="red" /></span></span></div>
                  :
                  <CheckRadioButton type="radio"  name={this.name} onClick={()=>setOtherIdentity(!otherIdentity)}   onChange={handleChange} label="Other"/>
                  

                }
            
        
            </div>)
        },
       
    },



    {
        id:3,
        qsn:'Describe your ethnicity',
        name:'ethnicity',
        value:'',
        options: function({page1,handleChange,setPage1, otherEthnicity, setOtherEthnicity,}){ //arrow fuction does't work
        
            return(
            <div className="option-list grid-column-even">
            <CheckRadioButton type="radio" name={this.name}  value={1} onChange={handleChange} label="Yoruba"/>
            <CheckRadioButton type="radio" name={this.name}  value={2} onChange={handleChange} label="Igbo"/>
            <CheckRadioButton type="radio" name={this.name}  value={3} onChange={handleChange} label="Hausa"/>
            <CheckRadioButton type="radio" name={this.name}  value={4} onChange={handleChange} label="Ibibio"/>
            <CheckRadioButton type="radio" name={this.name}  value={5} onChange={handleChange} label="Fulani"/>
            
            {
                 otherEthnicity? 
                  <div className="other-text-icon"><span className="text"><InputForms name={this.name} value={page1.value} onChange={handleChange}  placeholder="Describe your ethnicity" /> <span className="icon-wrapper" onClick={()=>{ setPage1(page1.map((item,index)=>(item.name === "ethnicity"? {...item, value:''}: item))); setOtherEthnicity(!otherEthnicity)}}><IoIosClose   size="2rem" color="red" /></span></span></div>
                  :
                  <CheckRadioButton type="radio" name={this.name} onClick={()=>setOtherEthnicity(!otherEthnicity)} value="Other" onChange={handleChange} label="Other"/>
                  
                  

                }
         
            </div>)
        },
        
    },


    {
        id:4,
        qsn:'Are you a Student / Staff?',
        name:'Student / Staff',
        value:'',
        // staff:'',
        // desig:'',
        // level:'',
        // house:'',
        options: function({page1,handleChange,setPage1,desig, setDesig}){
            return(
                <div className='option-subqesn-wrapper'>
                <div className="option-list grid-column-even" data-staff-student>
                <CheckRadioButton type="radio" name={this.name}   value="Student" onChange={(e)=>{ return setPage1(page1.map(item=>(item.name === e.target.name? {...item, value:{staff_std:e.target.value}}:item)) )}} label="Student"/>
                <CheckRadioButton type="radio" name={this.name}   value="Staff" onChange={(e)=>{ return setPage1(page1.map(item=>(item.name === e.target.name? {...item, value:{staff_std:e.target.value}}:item)) )}} label="Staff"/>
                </div>



                <div className="subquestion-wrapper">
                <ul className="subquestion-item " data-staff>
                  
                    <li>
                        <p className="fw-bold">Are you an Academic or Non-Academic officer of this institution?</p>
                        <div className="option-list grid-column-even">
                         <CheckRadioButton type="radio" name="staff" onChange={(e)=>{ return setPage1(page1.map(item=>(item.name === this.name? {...item, value:{...item.value,staff:e.target.value}}:item)) )}}  value="Academic"  label="Acadamic"/>
                            <CheckRadioButton type="radio" name="staff" onChange={(e)=>{ return setPage1(page1.map(item=>(item.name === this.name? {...item, value:{...item.value,staff:e.target.value}}:item)))}}   value="Non-Academic"  label="Non-Academic"/>
                            
                         </div>
                    </li>


                    <li>
                        <p className="fw-bold mt-3">Choose designation</p>
                        <div className="option-list grid-column-even">
                         <Selects name="desig" onChange={(e)=>{ return setPage1(page1.map(item=>(item.name === this.name? {...item, value:{...item.value,desig:e.target.value}}:item)))}}  firstOpt="--Select Designation--"   options={desig} />
                            
                         </div>
                    </li>
                </ul>



                <ul className="subquestion-item" data-student>
                    <li>
                    <p className="fw-bold">What level are you?</p>
                    <div className="option-list grid-column-even">
                         <Selects name="level"  onChange={(e)=>{ return setPage1(page1.map(item=>(item.name === this.name? {...item, value:{...item.value,level:e.target.value}}:item)))}}  firstOpt="--Select Level--"   options={["100","200","300","400","500","600","Graduate","Postgraduate"]} />
                            
                         </div>
                    </li>


                    <li>
                    <p className="fw-bold mt-3">What is your current CGPA?</p>
                    <div className="option-list grid-column-even">
                         <InputForms type="text" name="cgpa" placeholder="Enter your CGPA"  onChange={(e)=>{ return setPage1(page1.map(item=>(item.name === this.name? {...item, value:{...item.value,cgpa:e.target.value}}:item)))}}   />
                            
                         </div>
                    </li>


                    <li>
                    <p className="fw-bold mt-3">Where do you live?</p>
                    <div className="option-list grid-column-even">
                         <Selects name="house"  onChange={(e)=>{ return setPage1(page1.map(item=>(item.name === this.name? {...item, value:{...item.value,accommodation:e.target.value}}:item)))}}  firstOpt="--Select Accommodation--"   options={["On campus","Off campus","With Parent/Guardian"]} />
                            
                         </div>
                    </li>
                </ul>
            </div>
                </div>
            )

        }


    },

    {
        id:5,
        qsn:'What is your monthly salary / allowance?',
        name:'salary',
        value:'',
        options: function({page1,handleChange}){
           
            
            return(<div className="option-list grid-column-even">
          <InputForms name={this.name} type="text" value={page1.value} placeholder="Enter your monthly salary / allowance" onChange={handleChange}   />
               
            </div>)

        }

    },

    {
        id:6,
        qsn:'Please choose your institution',
        name:'institution',
        value:'',
        options: function({handleChange, institute}){
           
            
            return(<div className="option-list grid-column-even">
            <Selects name={this.name} onChange={handleChange} data-institute  firstOpt="--Choose Your Intitution--"   options={institute} />
               
            </div>)

        }

    },



    {
        id:7,
        qsn:'Please choose your faculty',
        name:'faculty',
        value:'',
        options: function({handleFacChange, fac}){
           
            
            return(<div className="option-list grid-column-even">
            <Selects name={this.name} onChange={handleFacChange}   firstOpt="--Select Your Faculty--"   options={fac} />
               
            </div>)

        }

    },

    {
        id:8,
        qsn:'Do you have any disabilbity?',
        name:'disability',
        value:'',
        disabilityType:'',
        options: function({page1,handleChange,setPage1}){
           
            
            return( 
            

                <div className='option-subqesn-wrapper'>
                <div className="option-list grid-column-even" data-disability>
                <CheckRadioButton type="radio" name={this.name} onChange={handleChange}  value="Yes"  label="Yes"/>
                   <CheckRadioButton type="radio" name={this.name} onChange={(e)=>{ return setPage1(page1.map(item=>(item.name === "disability"? {...item, value:e.target.value, disabilityType:''}:item)))}}   value="No"  label="No"/>
                </div>



                <div className="subquestion-wrapper">
                <ul className="subquestion-item  disable-type" >
                  
             

                    <li>
                        <p className="fw-bold mt-3">Tell us the type of your disability</p>
                        <div className="option-list grid-column-even">
                         <Selects name="disabilityType" onChange={(e)=>{ return setPage1(page1.map(item=>(item.name === "disability"? {...item, disabilityType:e.target.value}:item)))}}  firstOpt="--Select Disability Type--"   options={["Visual","Hearing","Speech","Mental","Intellectual","Physical"]} />
                            
                         </div>
                    </li>
                </ul>

            </div>
                </div>



            )

        }

    },




    {
        id:9,
        qsn:'What is your sexual orientation?',
        name:'sexual orientation',
        value:'',
        options: function({page1,handleChange,setPage1,sexualOrientation, setSexualOrientation}){
           
            
            return(
            <>
                <div className="option-list grid-column-even">
                <CheckRadioButton type="radio" name={this.name}  value="Gay" onChange={handleChange} label="Gay"/>
                <CheckRadioButton type="radio" name={this.name}  value="Heterosexual/straight" onChange={handleChange} label="Heterosexual/straight"/>
                <CheckRadioButton type="radio" name={this.name}  value="Lesbian" onChange={handleChange} label="Lesbian"/>
                <CheckRadioButton type="radio" name={this.name}  value="Bisexual" onChange={handleChange} label="Bisexual"/>
                <CheckRadioButton type="radio" name={this.name}  value="Queer" onChange={handleChange} label="Queer"/>
                <CheckRadioButton type="radio" name={this.name}  value="Asexual" onChange={handleChange} label="Asexual"/>
                </div>
                <div>
                    {
                      sexualOrientation? 
                      <div className="other-text-icon "><span className="text"><InputForms name={this.name} type="text" value={page1.value} onChange={handleChange}  placeholder="What is your sexual orientation?" /> <span className="icon-wrapper" onClick={()=>{setPage1(page1.map(item=>(item.name === "sexual orientation"? {...item, value:''}:item))); setSexualOrientation(!sexualOrientation)}}><IoIosClose   size="2rem" color="red" /></span></span></div>
                      :
                      <CheckRadioButton type="radio"  name={this.name} onClick={()=>setSexualOrientation(!sexualOrientation)}  value="Other" onChange={handleChange} label="Other"/>
                      
    
                    }
                
            
                </div>    
                </>
                )

        }

    },



    {
        id:10,
        qsn:'What is the sex of the people you are usually sexually attracted to?',
        name:'sexual attraction',
        value:'',
        options: function({page1,handleChange,setPage1,sexualAttraction, setSexualAttraction}){
           
            
            return(
            <>
                <div className="option-list grid-column-even">
                <CheckRadioButton type="radio" name={this.name}  value="Men only" onChange={handleChange} label="Men only"/>
                <CheckRadioButton type="radio" name={this.name}  value="Men mostly and women occasionally" onChange={handleChange} label="Men mostly and women occasionally"/>
                <CheckRadioButton type="radio" name={this.name}  value="Men and women equally" onChange={handleChange} label="Men and women equally"/>
                <CheckRadioButton type="radio" name={this.name}  value="Women mostly and men occasionally" onChange={handleChange} label="Women mostly and men occasionally"/>
                <CheckRadioButton type="radio" name={this.name}  value="Women only" onChange={handleChange} label="Women only"/>
               
                    {
                      sexualAttraction? 
                      <div className="other-text-icon "><span className="text"><InputForms name={this.name} value={page1.value} onChange={handleChange}  placeholder="What is the sex of the people you are usually sexually attracted to?" /> <span className="icon-wrapper" onClick={()=>{setPage1(page1.map(item=>(item.name === "sexual attraction"? {...item, value:''}:item))); setSexualAttraction(!sexualAttraction)}}><IoIosClose   size="2rem" color="red" /></span></span></div>
                      :
                      <CheckRadioButton type="radio"  name={this.name} onClick={()=>setSexualAttraction(!sexualAttraction)}  value="Other" onChange={handleChange} label="Other"/>
                      
    
                    }
                
            
                </div>    
                </>
                )

        }

    },




    {
        id:11,
        qsn:'I would rate my health overall as:',
        name:'health rate',
        value:'',
        options: function({page1,handleChange,setPage1}){
           
            
            return(
            <>
                <div className="option-list grid-column-even">
                <CheckRadioButton type="radio" name={this.name}  value={1} onChange={handleChange} label="Poor"/>
                <CheckRadioButton type="radio" name={this.name}  value={2} onChange={handleChange} label="Fair"/>
                <CheckRadioButton type="radio" name={this.name}  value={3} onChange={handleChange} label="Average"/>
                <CheckRadioButton type="radio" name={this.name}  value={4} onChange={handleChange} label="Above Average"/>
                <CheckRadioButton type="radio" name={this.name}  value={5} onChange={handleChange} label="Excellent"/>
               
                </div>    
                </>
                )

        }

    }



]


export default Data