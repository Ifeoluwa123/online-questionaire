import CheckRadioButton from "../../components/CheckRadioButton";
import InputForms from "../../components/InputForms";
import {IoIosClose} from 'react-icons/io'
import Subquestion from "../../components/Subquestion";
import Selects from "../../components/Selects";


let Data = [
    {
        id:1,
        quesn:'Who did the UNWANTED BEHAVIOR involve?',
        name:'page3_Q1',
        value:'',
        options: function({page3, setPage3,handleOnChange, behaviour, setBehaviour}){ //arrow fuction does't work
         
          
            return(
            <div className="option-list grid-column-even">
            <CheckRadioButton type="radio" name={this.name}  value={1} onChange={handleOnChange} label="Stranger"/>
            <CheckRadioButton type="radio" name={this.name}  value={2} onChange={handleOnChange} label="College professor/Instructor"/>
            <CheckRadioButton type="radio" name={this.name}  value={3} onChange={handleOnChange} label="Family Member"/>
            <CheckRadioButton type="radio" name={this.name}  value={4} onChange={handleOnChange} label="Coworker"/>
            <CheckRadioButton type="radio" name={this.name}  value={5} onChange={handleOnChange} label="Employer/Supervisor"/>
            <CheckRadioButton type="radio" name={this.name}  value={6} onChange={handleOnChange} label="Acquaintance"/>
            <CheckRadioButton type="radio" name={this.name}  value={7} onChange={handleOnChange} label="College Staff"/>
            <CheckRadioButton type="radio" name={this.name}  value={8} onChange={handleOnChange} label="Non‐romantic Friend"/>
            <CheckRadioButton type="radio" name={this.name}  value={9} onChange={handleOnChange} label="Casual or First Date"/>
            <CheckRadioButton type="radio" name={this.name}  value={10} onChange={handleOnChange} label="Current Romantic Partner"/>
            <CheckRadioButton type="radio" name={this.name}  value={11} onChange={handleOnChange} label="Ex‐romantic Partner"/>
            {
                  behaviour? 
                  <div className="other-text-icon"><span className="text"><InputForms name={this.name} value={page3.value} onChange={handleOnChange}  placeholder="Who did the unwanted behavior?" /> <span className="icon-wrapper" onClick={()=>setBehaviour(!behaviour)}><IoIosClose   size="2rem" color="red" /></span></span></div>
                  :
                  <CheckRadioButton type="radio"  name={this.name} onClick={()=>setBehaviour(!behaviour)}   label="Other"/>
                  

                }      


            <CheckRadioButton type="radio" name={this.name}  value={0} onChange={handleOnChange} label="No experience"/>


             
            
        
            </div>)
        },

    },
    {
        id:2,
        quesn:'Was this person a student at your university?',
        name:'page3_Q2',
        value:'',
        options: function({handleOnChange}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list-single-row">
            <CheckRadioButton type="radio" name={this.name}  value={1} onChange={handleOnChange} label="Yes"/>
            <CheckRadioButton type="radio" name={this.name}  value={2} onChange={handleOnChange} label="No"/>
            <CheckRadioButton type="radio" name={this.name}  value={3} onChange={handleOnChange} label="I do not know"/>
            <CheckRadioButton type="radio" name={this.name}  value={0} onChange={handleOnChange} label="No experience"/>
        
            </div>)
        },

    },
    {
        id:3,
        quesn:'Was this person affiliated with the University, as an employee, staff, or faculty member?',
        name:'page3_Q3',
        value:'',
        options: function({handleOnChange}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list-single-row">
            <CheckRadioButton type="radio" name={this.name}  value={1} onChange={handleOnChange} label="Yes"/>
            <CheckRadioButton type="radio" name={this.name}  value={2} onChange={handleOnChange} label="No"/>
            <CheckRadioButton type="radio" name={this.name}  value={3} onChange={handleOnChange} label="I do not know"/>
            <CheckRadioButton type="radio" name={this.name}  value={0} onChange={handleOnChange} label="No experience"/>
      
        
            </div>)
        },

    },
    {
        id:4,
        quesn:'What was the sex of the individual who did this to you?',
        name:'page3_Q4',
        value:'',
        options: function({handleOnChange}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list-single-row">
            <CheckRadioButton type="radio" name={this.name}  value={1} onChange={handleOnChange} label="Man"/>
            <CheckRadioButton type="radio" name={this.name}  value={2} onChange={handleOnChange} label="Woman"/>
            <CheckRadioButton type="radio" name={this.name}  value={3} onChange={handleOnChange} label="Both"/>
            <CheckRadioButton type="radio" name={this.name}  value={0} onChange={handleOnChange} label="No experience"/>
        
            </div>)
        },

    },



    {
        id:5,
        quesn:'Did the incident involve: (check ALL that apply) ?',
        name:'page3_Q5',
        value:'',
        options: function({handleOnChangeCheckBox}){ //arrow fuction does't work
            
       
          
            return(
            <div className="option-list grid-column-even">
            <CheckRadioButton type="checkbox" name={this.name}  value={1} onChange={handleOnChangeCheckBox} label="The other person’s use of alcohol"/>
            <CheckRadioButton type="checkbox" name={this.name}  value={2} onChange={handleOnChangeCheckBox} label="Your use of alcohol"/>
            <CheckRadioButton type="checkbox" name={this.name}  value={3} onChange={handleOnChangeCheckBox} label="The other person’s use of drugs"/>
            <CheckRadioButton type="checkbox" name={this.name}  value={4} onChange={handleOnChangeCheckBox} label="Your use of drugs"/>
            <CheckRadioButton type="checkbox" name={this.name}  value={5} onChange={handleOnChangeCheckBox} label="None of the above"/>
            <CheckRadioButton type="checkbox" name={this.name}  value={0} onChange={handleOnChangeCheckBox} label="No experience"/>
        
            </div>)
        },

    },


    {
        id:6,
        quesn:'Did this happen on campus?',
        name:'page3_Q6',
        value:'',
        options: function({handleOnChange}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list grid-column-even">
            <CheckRadioButton type="radio" name={this.name}  value={1} onChange={handleOnChange} label="Yes"/>
            <CheckRadioButton type="radio" name={this.name}  value={2} onChange={handleOnChange} label="No"/>
            <CheckRadioButton type="radio" name={this.name}  value={0} onChange={handleOnChange} label="No Experience"/>
        
            
            </div>)
        },

    },



    {
        id:7,
        quesn:'Please tell us how you reacted to the situation (check ALL that apply) ?',
        name:'page3_Q7',
        value:'',
        options: function({handleOnChangeCheckBox}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list grid-column-even">
               <CheckRadioButton type="checkbox" name={this.name}  value={1} onChange={handleOnChangeCheckBox} label="I ignored the person and did nothing"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={2} onChange={handleOnChangeCheckBox} label="I avoided the person as much as possible"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={3} onChange={handleOnChangeCheckBox} label="I treated it like a joke"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={4} onChange={handleOnChangeCheckBox} label="I told the person to stop"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={5} onChange={handleOnChangeCheckBox} label="I reported the person"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={6} onChange={handleOnChangeCheckBox} label="I asked someone for advice and/or support"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={0} onChange={handleOnChangeCheckBox} label="No Experience"/>
        
            
            </div>)
        },

    },

    {
        id:8,
        quesn:'How frightened were you by the incident?',
        name:'page3_Q8',
        value:'',
        options: function({handleOnChange}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list grid-column-even">
            <CheckRadioButton type="radio" name={this.name}  value={1} onChange={handleOnChange} label="Extremely frightened"/>
            <CheckRadioButton type="radio" name={this.name}  value={2} onChange={handleOnChange} label="Somewhat frightened"/>
            <CheckRadioButton type="radio" name={this.name}  value={3} onChange={handleOnChange} label="Only a little frightened"/>
            <CheckRadioButton type="radio" name={this.name}  value={4} onChange={handleOnChange} label="Not at all frightened"/>
            <CheckRadioButton type="radio" name={this.name}  value={0} onChange={handleOnChange} label="No experience"/>
        
            </div>)
        },

    },



    {
        id:9,
        quesn:'Where did the incident occur? (Specify ALL that apply)',
        name:'page3_Q9',
        value:'',
        options: function({page3, setPage3,handleOnChangeCheckBox, handleOnChange}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list ">
                <ol type="a">
                    <li className="mb-2"><InputForms name={this.name} onChange={(e)=>setPage3(page3.map(item=>item.name===e.target.name?{...item, value:{...item.value, val1:e.target.value}}:item))}  placeholder="Off-Campus (Please specify location)" /></li>
                    <li className="mb-2"><InputForms name={this.name} onChange={(e)=>setPage3(page3.map(item=>item.name===e.target.name?{...item, value:{...item.value, val2:e.target.value}}:item))} placeholder="On-Campus (Please specify location)" /></li>
                    <li ><InputForms  name={this.name} onChange={(e)=>setPage3(page3.map(item=>item.name===e.target.name?{...item, value:{...item.value, val3:e.target.value}}:item))} placeholder="Other location (Please specify location)" /></li>
                    <li className="mt-2"><CheckRadioButton type="checkbox" name={this.name}  value={0} onChange={handleOnChangeCheckBox} label="No experience"/></li>
                </ol>
        
            </div>)
        },

    },


    {
        id:10,
        quesn:'Who did you tell about the incident? (Mark ALL that apply)',
        name:'page3_Q10',
        value:'',
        options: function({incident, setIncident, handleOnChangeCheckBox, page3}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list grid-column-even">
               <CheckRadioButton type="checkbox" name={this.name}  value={1} onChange={handleOnChangeCheckBox} label="No one"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={2} onChange={handleOnChangeCheckBox} label="Roommate"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={3} onChange={handleOnChangeCheckBox} label="Close friend other than roommate"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={4} onChange={handleOnChangeCheckBox} label="Parent or guardian"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={5} onChange={handleOnChangeCheckBox} label="Other family member"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={6} onChange={handleOnChangeCheckBox} label="Counselor"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={7} onChange={handleOnChangeCheckBox} label="Faculty or staff"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={8} onChange={handleOnChangeCheckBox} label="Residence hall staff"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={9} onChange={handleOnChangeCheckBox} label="Police"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={10} onChange={handleOnChangeCheckBox} label="Romantic partner (other than the one who did this to you)"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={11} onChange={handleOnChangeCheckBox} label="Campus sexual assault advocate"/>
                {
                  incident? 
                  <div className="other-text-icon"><span className="text"><InputForms name={this.name} value={page3.value}   placeholder="Who did you tell about it?" /> <span className="icon-wrapper" onClick={()=>setIncident(!incident)}><IoIosClose   size="2rem" color="red" /></span></span></div>
                  :
                  <CheckRadioButton type="radio"  name={this.name} onClick={()=>setIncident(!incident)}   label="Other"/>
                  
                //   onChange={(e)=>{let val = e.target.value; setValues(values.map(item=>item.name==="page3_Q10"?{...item, value:[...item.value, val]}: item))}}
                }      

                <CheckRadioButton type="checkbox" name={this.name}  value={0} onChange={handleOnChangeCheckBox} label="No experience"/>
        
        
            
            </div>)
        },

    },


    {
        id:11,
        quesn:'Did you use the formal procedures to report the incident(s)?',
        name:'page3_Q11',
        value:'',
        options: function({handleOnChange}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list grid-column-even">
            <CheckRadioButton type="radio" name={this.name}  value={1} onChange={handleOnChange} label="Yes"/>
            <CheckRadioButton type="radio" name={this.name}  value={2} onChange={handleOnChange} label="No"/>
            <CheckRadioButton type="radio" name={this.name}  value={0} onChange={handleOnChange} label="No experience"/>
            
            </div>)
        },

    },



    {
        id:12,
        quesn:'If you did not tell anyone, why? (Mark ALL that apply)',
        name:'page3_Q12',
        value:'',
        options: function({page3,setPage3, handleOnChangeCheckBox,tell, handleOnChange, setTell}){ //arrow fuction does't work
            
         
          
            return(
            <div className="option-list grid-column-even">
               <CheckRadioButton type="checkbox" name={this.name}  value={1} onChange={handleOnChangeCheckBox} label="Ashamed/embarrassed"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={2} onChange={handleOnChangeCheckBox} label="Is a private matter – wanted to deal with it on own"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={3} onChange={handleOnChangeCheckBox} label="Concerned others would find out"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={4} onChange={handleOnChangeCheckBox} label="Didn’t want the person who did it to get in trouble"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={5} onChange={handleOnChangeCheckBox} label="Fear of retribution from the person who did it"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={6} onChange={handleOnChangeCheckBox} label="Fear of not being believed"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={7} onChange={handleOnChangeCheckBox} label="I thought I would be blamed for what happened"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={8} onChange={handleOnChangeCheckBox} label="Didn’t think what happened was serious enough to talk about"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={9} onChange={handleOnChangeCheckBox} label="Didn’t think others would think it was serious"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={10} onChange={handleOnChangeCheckBox} label="Thought people would try to tell me what to do"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={11} onChange={handleOnChangeCheckBox} label="Would feel like an admission of failure"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={12} onChange={handleOnChangeCheckBox} label="Didn’t think others would think it was important"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={13} onChange={handleOnChangeCheckBox} label="Didn’t think others would understand"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={14} onChange={handleOnChangeCheckBox} label="Didn’t have time to deal with it due to academics, work, etc."/>
                <CheckRadioButton type="checkbox" name={this.name}  value={15} onChange={handleOnChangeCheckBox} label="Didn’t know reporting procedure on campus"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={16} onChange={handleOnChangeCheckBox} label="Feared I or another would be punished for infractions or violations (such as underage drinking)"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={17} onChange={handleOnChangeCheckBox} label="I did not feel the campus leadership would solve my problems"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={18} onChange={handleOnChangeCheckBox} label="I feared others would harass me or react negatively toward me"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={19} onChange={handleOnChangeCheckBox} label="I thought nothing would be done"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={20} onChange={handleOnChangeCheckBox} label="Didn’t want others to worry about me"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={21} onChange={handleOnChangeCheckBox} label="Wanted to forget it happened"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={22} onChange={handleOnChangeCheckBox} label="Had other things I needed to focus on and was concerned about (classes, work)"/>
                <CheckRadioButton type="checkbox" name={this.name}  value={23} onChange={handleOnChangeCheckBox} label="Didn’t think the school would do anything about my report."/>
                {
                  tell? 
                  <div className="other-text-icon"><span className="text"><InputForms name={this.name} value={page3.value} onChange={(e)=>setPage3(page3.map(item=>item.name===e.target.name?{...item, value:{...item.value, val1:e.target.value}}:item))} placeholder="Why don't you tell anyone?" /> <span className="icon-wrapper" onClick={()=>setTell(!tell)}><IoIosClose   size="2rem" color="red" /></span></span></div>
                  :
                  <CheckRadioButton type="checkbox"   onClick={()=>setTell(!tell)}   label="Other"/>
                  

                }   
                <CheckRadioButton type="checkbox" name={this.name}  value={0} onChange={handleOnChangeCheckBox} label="No experience/I did tell someone"/>
        
        
            
            </div>)
        },

    },


]

export default Data