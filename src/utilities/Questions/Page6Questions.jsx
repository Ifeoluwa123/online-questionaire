import { Form } from "react-bootstrap"
import CheckRadioButton from "../../components/CheckRadioButton"
import Sections from "../../components/Sections"



let Data =[
    {
        id:1,
        name:'P6SAQ1',
        section: <Sections section="A" text="Over the last two weeks, how often have you been bothered by the following problems?"  />,
        value:'',
        question:<p className="fw-bold my-4">1. &nbsp; Feeling nervous, anxious or on edge</p>
    },
    {
        id:2,
        name:'P6SAQ2',
        value:'',
        question:<p className="fw-bold my-4">2. &nbsp; Not being able to stop or control worrying</p>
    },
    {
        id:3,
        name:'P6SAQ3',
        value:'',
        question:<p className="fw-bold my-4">3. &nbsp; Feeling down, depressed or hopeless</p>
    },
    {
        id:4,
        name:'P6SAQ4',
        value:'',
        question:<p className="fw-bold my-4">4. &nbsp; Little interest or pleasure in doing things</p>
    },

    // SECTION START
    {
        id:5,
        name:'P6SBQ1',
        section: <Sections section="B" text="Please check the number beside the statement or phrase that best applies to you."  />,
        value:'',
        question:<p className="fw-bold my-4">1. &nbsp; Have you ever thought about or attempted to kill yourself? (check one only)</p>,
        option:function({handleOnchange}){
            return(
                <div className="option-list grid-column-even">
                    <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={1}  label="1-Never"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={2}  label="2-It was just a brief passing thought"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={3}  label="3-I have had a plan at least once to kill myself but did not try to do it"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={4}  label="4-I had had a plan at least once to kill myself and really wanted to die"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={5}  label="5-I have attempted to kill myself, but did not want to die"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={6}  label="6-I have attempted to kill myself, and really hoped to die"/>
            </div>
            )
        }
    },
    {
        id:6,
        name:'P6SBQ2',
        value:'',
        question:<p className="fw-bold my-4">2. &nbsp; How often have you thought about killing yourself in the past year? (check one only)</p>,
        option:function({handleOnchange}){
            return(
                <div className="option-list grid-column-even">
                    <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={1}  label="1-Never"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={2}  label="2-Rarely (1 time)"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={3}  label="3-Sometimes (2 times)"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={4}  label="4-Often (3 – 4 times)"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={5}  label="5-Very often (5 or more times)"/>
            </div>
            )
        }
    },
    {
        id:7,
        name:'P6SBQ3',
        value:'',
        question:<p className="fw-bold my-4">3. &nbsp; Have you ever told someone that you were going to commit suicide? Or that you might do it? (check one only)</p>,
        option:function({handleOnchange}){
            return(
                <div className="option-list grid-column-even">
                    <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={1}  label="1-No"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={2}  label="2-Yes, at one time, but did not really want to die"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={3}  label="3-Yes, at one time, and really wanted to die"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={4}  label="4-Yes, more than once, but did not want to do it"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={5}  label="5-Yes, more than once, and really wanted to do it"/>
            </div>
            )
        }
    },
    {
        id:8,
        name:'P6SBQ4',
        value:'',
        question:<p className="fw-bold my-4">4. &nbsp; How likely is it that you will attempt suicide someday? (check one only)</p>,
        option:function({handleOnchange}){
            return(
                <div className="option-list grid-column-even">
                    <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value="0"  label="0-Never"/>
                    <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={1}  label="1-No chance at all"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={2}  label="2-Rather unlikely"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={3}  label="3-Unlikely"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={4}  label="4-Likely"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={5}  label="5-Rather likely"/>
                <CheckRadioButton type="radio" onChange={handleOnchange} name={this.name}  value={6}  label="6-Very likely"/>
            </div>
            )
        }
    },
]


export default Data