import CheckRadioButton from "../../components/CheckRadioButton";
import InputForms from "../../components/InputForms";
import {IoIosClose} from 'react-icons/io'
import Subquestion from "../../components/Subquestion";
import Selects from "../../components/Selects";
import Sections from "../../components/Sections";
import Card from "../../components/Card";
import Image1 from '../../assets/images/img/NPM.jpg'
import Image2 from '../../assets/images/img/PF.jpg'
import Image3 from '../../assets/images/img/PM.jpg'
import Image4 from '../../assets/images/img/NPF.jpg'
import ImageWithTable from "../../components/ImageWithTable";

let Data = [
    {
        id:1,
        section:<Sections section="A" text="Please select from these responses to indicate how much you agree with the following statements regarding the pictures below (Please click the image for clearer view):
        " />,
        name:"provocative",
        quesn:<p className="fw-bold my-3 question">How provocative is the dressing of this individual?</p>,
        value:'',
        options:function({page4,setPage4}){
            return(
                <div className="item-container">
                        <Card image={Image1}  onChange={(e)=>{setPage4(page4.map((item,index)=>(item.name==="provocative"?{...item, value:{...item.value, [e.target.name] :e.target.value}}: item)))}} name="img1" />
                        <Card image={Image2} onChange={(e)=>{setPage4(page4.map((item,index)=>(item.name==="provocative"?{...item, value:{...item.value, [e.target.name] :e.target.value}}: item)))}} name="img2" />
                        <Card image={Image3} onChange={(e)=>{setPage4(page4.map((item,index)=>(item.name==="provocative"?{...item, value:{...item.value, [e.target.name] :e.target.value}}: item)))}} name="img3" />
                        <Card image={Image4} onChange={(e)=>{setPage4(page4.map((item,index)=>(item.name==="provocative"?{...item, value:{...item.value, [e.target.name] :e.target.value}}: item)))}} name="img4" />
                </div>
            )
        }
    },



    {
        id:2,
        section:<Sections section="B" text="Please select from these responses to indicate how much you agree with the following statements regarding the pictures below (Please click the image for clearer view):
        " />,
        name:'image1',
        img:<div className="image-wrapper">
            <img src={Image1} alt="" />
        </div>,
        value:'',
        header:["Extremely unlikely","Very unlikely","a little unlikely", 
        "Neither likely nor unlikely", "a little likely", "Very likely", "Extremely likely"],
        question:[
            "1. How likely is this man’s female lecturer/supervisor/colleague to repeatedly tell him sexually suggestive stories or offensive jokes?",
            "2. How likely is this man’s female lecturer/supervisor/colleague to touch him in a way that will make him feel uncomfortable or try to establish a sexual/romantic relationship with him despite his attempts to discourage her?",
            "3. How likely is this man’s female lecturer/supervisor/colleague to threaten him or make things difficult for him if he refuses her demands for sex?",
            "4. How likely is this man’s male lecturer/supervisor/colleague to repeatedly tell him sexually suggestive stories or offensive jokes?",
            "5. How likely is this man’s male lecturer/supervisor/colleague to touch him in a way that will make him feel uncomfortable or try to establish a sexual/romantic relationship with him despite his attempts to discourage him?",
            "6. How likely is this man’s male lecturer/supervisor/colleague to threaten him or make things difficult for him if he refuses his demands for sex?"
        ],
        options:function({setPage4, page4}){
            return(
                <ImageWithTable name={this.name} 
                    onChange={(e)=> setPage4(
                    page4.map((item,index)=>(item.name=="image1"  ? 
                    {...item, value:{...item.value, [e.target.name]:e.target.value}}:item)))} 
                    header={ this.header} 
                    question={this.question} 
                    />
            )
        }
    },

    {
        id:3,
        name:'image2',
        img:<div className="image-wrapper">
            <img src={Image2} alt="" />
        </div>,
        value:'',
        header:["Extremely unlikely","Very unlikely","a little unlikely", 
        "Neither likely nor unlikely", "a little likely", "Very likely", "Extremely likely"],
        question:[
            "1. How likely is this woman’s male lecturer/supervisor/colleague to repeatedly tell her sexually suggestive stories or offensive jokes?",
            "2. How likely is this woman’s male lecturer/supervisor/colleague to touch her in a way that will make her feel uncomfortable or try to establish a sexual/romantic relationship with her despite her attempts to discourage him?",
            "3. How likely is this woman’s male lecturer/supervisor/colleague to threaten her or make things difficult for her if she refuses his demands for sex?",
            "4. How likely is this woman’s female lecturer/supervisor/colleague to repeatedly tell her sexually suggestive stories or offensive jokes?",
            "5. How likely is this woman’s female lecturer/supervisor/colleague to touch her in a way that will make her feel uncomfortable or try to establish a sexual/romantic relationship with her despite her attempts to discourage her?",
            "6. How likely is this woman’s female lecturer/supervisor/colleague to threaten her or make things difficult for her if she refuses her demands for sex?"
        ],
        options:function({setPage4, page4}){
            return(
                <ImageWithTable name={this.name} 
                onChange={(e)=> setPage4(
                page4.map((item,index)=>(item.name=="image2"  ? 
                {...item, value:{...item.value, [e.target.name]:e.target.value}}:item)))} 
                header={ this.header} 
                question={this.question} 
                />
            )
        }
    },


    {
        id:4,
        name:'image3',
        img:<div className="image-wrapper">
            <img src={Image3} alt="" />
        </div>,
        value:'',
        header:["Extremely unlikely","Very unlikely","a little unlikely", 
        "Neither likely nor unlikely", "a little likely", "Very likely", "Extremely likely"],
        question:[
            "1. How likely is this man’s female lecturer/supervisor/colleague to repeatedly tell him sexually suggestive stories or offensive jokes?",
            "2. How likely is this man’s female lecturer/supervisor/colleague to touch him in a way that will make him feel uncomfortable or try to establish a sexual/romantic relationship with him despite his attempts to discourage her?",
            "3. How likely is this man’s female lecturer/supervisor/colleague to threaten him or make things difficult for him if he refuses her demands for sex?",
            "4. How likely is this man’s male lecturer/supervisor/colleague to repeatedly tell him sexually suggestive stories or offensive jokes?",
            "5. How likely is this man’s male lecturer/supervisor/colleague to touch him in a way that will make him feel uncomfortable or try to establish a sexual/romantic relationship with him despite his attempts to discourage him?",
            "6. How likely is this man’s male lecturer/supervisor/colleague to threaten him or make things difficult for him if he refuses his demands for sex?"
        ],
        options:function({setPage4, page4}){
            return(
                <ImageWithTable name={this.name} 
                onChange={(e)=> setPage4(
                page4.map((item,index)=>(item.name=="image3"  ?
                 {...item, value:{...item.value, [e.target.name]:e.target.value}}:item)))} 
                header={ this.header} 
                question={this.question} 
                />
            )
        }
    },


    {
        id:5,
        name:'image4',
        img:<div className="image-wrapper">
            <img src={Image4} alt="" />
        </div>,
        value:'',
        header:["Extremely unlikely","Very unlikely","a little unlikely", 
        "Neither likely nor unlikely", "a little likely", "Very likely", "Extremely likely"],
        question:[
            "1. How likely is this woman’s male lecturer/supervisor/colleague to repeatedly tell her sexually suggestive stories or offensive jokes?",
            "2. How likely is this woman’s male lecturer/supervisor/colleague to touch her in a way that will make her feel uncomfortable or try to establish a sexual/romantic relationship with her despite her attempts to discourage him?",
            "3. How likely is this woman’s male lecturer/supervisor/colleague to threaten her or make things difficult for her if she refuses his demands for sex?",
            "4. How likely is this woman’s female lecturer/supervisor/colleague to repeatedly tell her sexually suggestive stories or offensive jokes?",
            "5. How likely is this woman’s female lecturer/supervisor/colleague to touch her in a way that will make her feel uncomfortable or try to establish a sexual/romantic relationship with her despite her attempts to discourage her?",
            "6. How likely is this woman’s female lecturer/supervisor/colleague to threaten her or make things difficult for her if she refuses her demands for sex?"
        ],
        options:function({setPage4, page4}){
            return(
                <ImageWithTable name={this.name} 
                onChange={(e)=> setPage4(
                page4.map((item,index)=>(item.name=="image4"  ?
                 {...item, value:{...item.value, [e.target.name]:e.target.value}}:item)))} 
                header={ this.header} 
                question={this.question} 
                />
            )
        }
    },

    {
        id:6,
        section:<Sections section="C" text="Please select from these responses to indicate how much you agree with the following statements regarding the pictures below:" />,
        name:'image1&image2A',
        img:<div className="two-image-wrapper">
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
        </div>,
        value:'',
        header:["Strongly disagree","Disagree","Neither disagree nor agree", 
        "Agree", "Strongly agree"],
        question:[
            "1. The wearer wishes to feel attractive",
            "2. The wearer wishes to be fashionable",
            "3. It is a personal preference of the wearer",
            "4.  The wearer intends to tempt others",
            "5. The wearer intends to seduce others",
            "6. The wearer intends to convey an interest in sexual intercourse",
            "7. The wearer intends to gain affection with their sexuality",
            "8. The wearer knows that people are aroused by them",
            "9. The wearer intends to make others lose control",
            "10. The way that the wearer is dressed gives people the right to touch them"
        ],
        options:function({setPage4, page4}){
            return(
                <ImageWithTable name={this.name} 
                onChange={(e)=> setPage4(
                page4.map((item,index)=>(item.name==this.name  ?
                 {...item, value:{...item.value, [e.target.name]:Number(e.target.value)}}:item)))} 
                header={ this.header} 
                question={this.question} 
                />
            )
        }
    },
// SECTION D
    {
        id:7,
        section:<Sections section="D" text="Please select from these responses to indicate how much you agree with the following statements regarding the pictures below:" />,
        name:'image1&image2B',
        img:<div className="two-image-wrapper">
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
        </div>,
        value:'',
        header:["Yes","No", "Sometimes"],
        question:[
            "1. I have worn clothing similar to what is worn above.",
            "2. I wear clothing similar to what is worn above in order to feel attractive",
            "3. I wear clothing similar to what is worn above to be seductive",
            "4.  I believe that people who wear clothing similar to what is worn above are attempting to tempt me",
            "5. I am aroused by people who wear clothing similar to what is worn above",
            "6. I enjoy gazing at people who wear clothing similar to what is worn above"
          
        ],
        options:function({setPage4, page4}){
            return(
                <ImageWithTable name={this.name} 
                onChange={(e)=> setPage4(
                page4.map((item,index)=>(item.name==this.name  ?
                 {...item, value:{...item.value, [e.target.name]:Number(e.target.value)}}:item)))} 
                header={ this.header} 
                question={this.question} 
                />
            )
        }
    },
    // {
    //     id:7,
    //     section:<Sections section="D" text="Please select from these responses to indicate how much you agree with the following statements:" />,
    //     name:'clothing_similar',
    //     quesn:<li className="fw-bold  mt-3 mb-1 question">I have worn clothing similar to what is worn above.</li>,
    //     value:'',
    //     options:function({ handleOnchange}){
    //         return(
    //             <div className="option-list grid-column-even">
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange}  value={1}  label="Yes"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange}  value={2}  label="No"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange}  value={3}  label="Sometimes"/>
                
            
    //             </div>
    //         )
    //     }
    // },



    // {
    //     id:8,
    //     name:'feel_attractive',
    //     quesn:<li className="fw-bold mt-4  question">I wear clothing similar to what is worn above in order to feel attractive</li>,
    //     value:'',
    //     options:function({ handleOnchange}){
    //         return(
    //             <div className="option-list grid-column-even">
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange}   value={1}  label="Yes"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange}  value={2}  label="No"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange}  value={3}  label="Sometimes"/>
                
            
    //             </div>
    //         )
    //     }
    // },

    // {
    //     id:9,
    //     name:'seductive',
    //     quesn:<li className="fw-bold mt-4  question">I wear clothing similar to what is worn above to be seductive</li>,
    //     value:'',
    //     options:function({ handleOnchange}){
    //         return(
    //             <div className="option-list grid-column-even">
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={1}  label="Yes"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={2}  label="No"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={3}  label="Sometimes"/>
                
            
    //             </div>
    //         )
    //     }
    // },


    // {
    //     id:10,
    //     name:'tempting',
    //     quesn:<li className="fw-bold mt-4  question">I believe that people who wear clothing similar to what is worn above are attempting to tempt me</li>,
    //     value:'',
    //     options:function({ handleOnchange}){
    //         return(
    //             <div className="option-list grid-column-even">
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={1}  label="Yes"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={2}  label="No"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={3}  label="Sometimes"/>
                
            
    //             </div>
    //         )
    //     }
    // },


    // {
    //     id:11,
    //     name:'aroused_people',
    //     quesn:<li className="fw-bold mt-4  question">I am aroused by people who wear clothing similar to what is worn above</li>,
    //     value:'',
    //     options:function({ handleOnchange}){
    //         return(
    //             <div className="option-list grid-column-even">
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={1}  label="Yes"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={2}  label="No"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={3}  label="Sometimes"/>
                
            
    //             </div>
    //         )
    //     }
    // },
    // {
    //     id:12,
    //     name:'gazing',
    //     quesn:<li className="fw-bold mt-4  question">I enjoy gazing at people who wear clothing similar to what is worn above</li>,
    //     value:'',
    //     options:function({ handleOnchange}){
    //         return(
    //             <div className="option-list grid-column-even">
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange}  value={1}  label="Yes"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={2}  label="No"/>
    //             <CheckRadioButton type="radio" name={this.name} onChange={ handleOnchange} value={3}  label="Sometimes"/>
                
            
    //             </div>
    //         )
    //     }
    // },
]

export default Data