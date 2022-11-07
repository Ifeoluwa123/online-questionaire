import CheckRadioButton from "../../components/CheckRadioButton"
import Sections from "../../components/Sections"



let Data = [
    // SECTION A
    {
        id:1,
        name:'P7SAQ1',
        value:"",
        sections:<h2 className="fw-bold">SECTION A: Institutional Response</h2>,
        instruction:<p className="my-2"><span className="fw-bold">Instructions:</span> <span className="fst-italic">The following statements describe how your institution might handle it if a student reported an incident of sexual harassment. Using the scale provided, please indicate the likelihood of each statement using the following options:</span></p>,
        question:<p className="fw-bold my-4">1. &nbsp; The institution would take the report</p>,
        section:"A"
    },


    {
        id:2,
        name:'P7SAQ2',
        value:"",
        question:<p className="fw-bold my-4">2. &nbsp; The institution would maintain the privacy of the person making the report.</p>,
        section:"A"
    },


    {
        id:3,
        name:'P7SAQ3',
        value:"",
        question:<p className="fw-bold my-4">3. &nbsp; The institution would do its best to honor the request of the person about how to go forward with the case.</p>,
        section:"A"
    },

    {
        id:4,
        name:'P7SAQ4',
        value:"",
        question:<p className="fw-bold my-4">4. &nbsp; The institution would take steps to protect the safety of the person making the report.</p>,
        section:"A"
    },
    {
        id:5,
        name:'P7SAQ5',
        value:"",
        question:<p className="fw-bold my-4">5. &nbsp; The institution would support the person making the report.</p>,
        section:"A"
    },


    {
        id:6,
        name:'P7SAQ6',
        value:"",
        question:<p className="fw-bold my-4">6. &nbsp; The institution would provide accommodations to support the person (e.g. academic, housing, safety).</p>,
        section:"A"
    },
    {
        id:7,
        name:'P7SAQ7',
        value:"",
        question:<p className="fw-bold my-4">7. &nbsp; The institution would take action to address factors that may have led to the sexual harassment.</p>,
        section:"A"
    },
    {
        id:8,
        name:'P7SAQ8',
        value:"",
        question:<p className="fw-bold my-4">8. &nbsp; The response to this item will be "Neutral" to indicate attention.</p>,
        section:"A"
    },
    {
        id:9,
        name:'P7SAQ9',
        value:"",
        question:<p className="fw-bold my-4">9. &nbsp; The institution would handle the report fairly.</p>,
        section:"A"
    },
    {
        id:10,
        name:'P7SAQ10',
        value:"",
        question:<p className="fw-bold my-4">10. &nbsp; The institution would label the person making the report a troublemaker.</p>,
        section:"A"
    },

    {
        id:11,
        name:'P7SAQ11',
        value:"",
        question:<p className="fw-bold my-4">11. &nbsp; The institution would have a hard time supporting the person who made the report.</p>,
        section:"A"
    },

    {
        id:12,
        name:'P7SAQ12',
        value:"",
        question:<p className="fw-bold my-4">12. &nbsp; The institution would punish the person who made the report.</p>,
        section:"A"
    },


    // SECTION B
    {
        id:13,
        name:'P7SBQ1',
        value:'',
        sections:<h2 className="fw-bold mt-5">SECTION B: Knowledge of Campus Sexual harassment Resources</h2>,
        instruction:<p className="my-2"><span className="fw-bold">Instructions:</span> <span className="fst-italic">Using the scale provided, please indicate your level of agreement with the following statements using the following options:</span></p>,
        question:<p className="fw-bold my-4">1. &nbsp; If a friend or I experienced sexual harassment, I know where to go to get help on campus.</p>,
        section:"B",
    },

    {
        id:14,
        name:'P7SBQ2',
        value:'',
        question:<p className="fw-bold my-4">2. &nbsp; I understand what happens when a student reports a claim of sexual harassment at my institution.</p>,
        section:"B",
    },
    {
        id:15,
        name:'P7SBQ3',
        value:'',
        question:<p className="fw-bold my-4">3. &nbsp; I would know where to go to make a report of sexual harassment.</p>,
        section:"B",
    },
    {
        id:16,
        name:'P7SBQ4',
        value:'',
        question:<p className="fw-bold my-4">4. &nbsp; My Institution has an anti-sexual harassment policy.</p>,
        section:"C",
        options:function({handleOnchange}){
            return(
                <div className="option-list grid-column-even">
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={1}  label="Yes"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={2}  label="No"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={3}  label="May be"/>
           
               
                </div>
            )
        }
    },
    {
        id:17,
        name:'P7SBQ5',
        value:'',
        question:<p className="fw-bold my-4">5. &nbsp; I have read and  I understand the content of my institutions anti-sexual harassment policy.</p>,
        section:"C",
        options:function({handleOnchange}){
            return(
                <div className="option-list grid-column-even">
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={1}  label="Yes"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={2}  label="No"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={3}  label="May be"/>
           
               
                </div>
            )
        }
    },

    // SECTION C
    {
        id:18,
        name:'P7SCQ1',
        value:'',
        sections:<h2 className="fw-bold mt-5">SECTION C: Exposure to Sexual harassment Information/Education</h2>,
        instruction:<p className="my-2"><span className="fw-bold">Instructions:</span> <span className="fst-italic">Using the scales provided, please respond to the following questions.</span></p>,
        question:<p className="fw-bold my-4">1. &nbsp; Before coming to this institution, had you received any information or education (that did not come from this institution about sexual harassment?</p>,
        section:"C",
        options:function({handleOnchange}){
            return(
                <div className="option-list grid-column-even">
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={1}  label="Yes"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={2}  label="No"/>
           
               
                </div>
            )
        }
    },
    {
        id:19,
        name:'P7SCQ2',
        value:'',
        question:<p className="fw-bold my-4">2. &nbsp; Since you came to your institution, which of the following have you done? (Please check all that apply)</p>,
        section:"C",
        options:function({handleOnchange2}){
            return(
                <div className="option-list grid-column-even">
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={1}  label="Discussed sexual harassment /rape in class"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={2}  label="Discussed the topic of sexual harassment with friends"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={3}  label="Attended an event or program about what you can do as a bystander to stop sexual harassment"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={4}  label="Discussed sexual harassment with a family member"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={5}  label="Attended a rally or other campus event about sexual harassment or sexual assault"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={6}  label="Seen posters about sexual harassment (e.g., raising awareness, preventing rape, defining sexual harassment)"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={7}  label="Seen or heard campus administrators or staff address sexual harassment"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={8}  label="Seen crime alerts about sexual harassment"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={9}  label="Read a report about sexual violence rates at your institution"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={10}  label="Visited your institution website with information on sexual harassment"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={11}  label="Volunteered or interned at an organization that addresses sexual harassment"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={12}  label="Seen or heard about sexual harassment in a student publication or media outlet"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={13}  label="Taken a class to learn more about sexual harassment"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange2}  value="none"  label="None"/>
                </div>
            )
        }
    },
    {
        id:20,
        name:'P7SCQ3',
        value:'',
        
        question:<p className="fw-bold my-4">3. &nbsp; Since coming to your institution, have you received written (e.g., brochures, emails) or verbal information (e.g., presentations, training) from anyone at your institution about the following? (Please check all that apply)</p>,
        section:"C",
        options:function({handleOnchange2}){
            return(
                <div className="option-list grid-column-even">
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={1}  label="The definitions of types of sexual harassment"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={2}  label="How to report an incident of sexual harassment"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={3}  label="Where to go to get help if someone you know experiences sexual harassment"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={4}  label="Title IX protections against sexual harassment"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={5}  label="How to help prevent sexual harassment"/>
                <CheckRadioButton type="checkbox" name={this.name} onChange={handleOnchange2}  value={6}  label="Student code of conduct or honor code"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange2}   value="none"  label="None"/>
     
                </div>
            )
        }
    },
    {
        id:21,
        name:'P7SCQ4',
        value:'',
        instruction:<p className="mt-5 mb-2"><span className="fw-bold">Instructions:</span> <span className="fst-italic">Please use the following scale to indicate how aware you are of the function of the campus and community resources specifically related to sexual harassment response at </span> <span className="fw-bold fst-italic">YOUR INSTITUTION</span></p>,
        question:<p className="fw-bold my-4">4. &nbsp; Student Legal Services</p>,
        section:"C-a"
    },
    {
        id:22,
        name:'P7SCQ5',
        value:'',
        question:<p className="fw-bold my-4">5. &nbsp; Counselling Services</p>,
        section:"C-a"
    },
    {
        id:23,
        name:'P7SCQ6',
        value:'',
        question:<p className="fw-bold my-4">6. &nbsp; The Office of Employment Equity</p>,
        section:"C-a"
    },
    {
        id:24,
        name:'P7SCQ7',
        value:'',
        question:<p className="fw-bold my-4">7. &nbsp; Health Services</p>,
        section:"C-a"
    },
    {
        id:25,
        name:'P7SCQ8',
        value:'',
        question:<p className="fw-bold my-4">8. &nbsp; Antisexual harassment committee</p>,
        section:"C-a"
    },

    {
        id:26,
        name:'P7SCQ9',
        value:'',
        instruction:<p className="mt-5 mb-2"><span className="fw-bold">Instructions:</span> <span className="fst-italic">Please use the following scale to indicate how aware you are of the anti-sexual harassment bill </span> </p>,
        question:<p className="fw-bold my-4">9. &nbsp; Have you heard about the anti-sexual harassment bill?</p>,
        section:"C",
        options:function({handleOnchange}){
            return(
                <div className="option-list grid-column-even">
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={1}  label="Yes"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={2}  label="No"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={3}  label="May be"/>
           
               
                </div>
            )
        }
    },

    {
        id:27,
        name:'P7SCQ10',
        value:'',
        question:<p className="fw-bold my-4">10. &nbsp; Do you think that educators should be allowed to have a romantic relationship with students?</p>,
        section:"C",
        options:function({handleOnchange}){
            return(
                <div className="option-list grid-column-even">
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={1}  label="Yes"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={2}  label="No"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={3}  label="May be"/>
           
               
                </div>
            )
        }
    },
    {
        id:28,
        name:'P7SCQ11',
        value:'',
        question:<p className="fw-bold my-4">11. &nbsp; Do you think that educators should be punished for having sex with students?</p>,
        section:"C",
        options:function({handleOnchange}){
            return(
                <div className="option-list grid-column-even">
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={1}  label="Yes"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={2}  label="No"/>
                <CheckRadioButton type="radio" name={this.name} onChange={handleOnchange}  value={3}  label="May be"/>
           
               
                </div>
            )
        }
    },

    // SECTION D
    {
        id:29,
        name:'P7SDQ1',
        value:"",
        sections:<h2 className="fw-bold mt-5">SECTION D: Campus safety</h2>,
        instruction:<p className="my-2"><span className="fw-bold">Instructions:</span> <span className="fst-italic">Using the scales provided, please indicate the degree to which you agree or disagree with the following statements.</span></p>,
        question:<p className="fw-bold my-4">1. &nbsp; On or around this campus, I feel safe from sexual harassment.</p>,
        section:"B"
    },

]

export default Data