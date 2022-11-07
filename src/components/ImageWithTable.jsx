import React from 'react'
import { Form, Table } from 'react-bootstrap'
import CheckRadioButton from './CheckRadioButton'

export default function ImageWithTable({header, question, onChange, name}) {
  return (
    <div className='table-container'>
  <Table  striped bordered hover responsive size="md">
      <thead>
                    <tr >
                        <th className='first'  colSpan="10"></th>
                        {
                            header.map((item,index)=><th key={index} colSpan="3">{item}</th>)
                        }
                        {/* <th colSpan="3">Never</th>
                        <th colSpan="3">Once or Twice</th>
                        <th colSpan="3">Sometimes</th>
                        <th colSpan="3">Often</th>
                        <th colSpan="3">Most Times</th> */}
                    </tr>
      </thead>

      <tbody>
        {/* <ol type="1"> */}
        {
            question.map((item,index)=>{
                return(
                    <tr key={index}>

                        {
                            header.length === 7? (
                                <>
                                 <td className='first' colSpan="10"><p>{item}</p></td>
                        <td colSpan="3"><Form.Check onChange={onChange} value={1} name={name+"_"+index} type="radio" /></td>
                        <td colSpan="3"><Form.Check onChange={onChange} value={2} name={name+"_"+index} type="radio" /></td>
                        <td colSpan="3"><Form.Check onChange={onChange} value={3} name={name+"_"+index} type="radio" /></td>
                        <td colSpan="3"><Form.Check onChange={onChange} value={4} name={name+"_"+index} type="radio" /></td>
                        <td colSpan="3"><Form.Check onChange={onChange} value={5} name={name+"_"+index} type="radio" /></td>
                        <td colSpan="3"><Form.Check onChange={onChange} value={6} name={name+"_"+index} type="radio" /></td>
                        <td colSpan="3"><Form.Check onChange={onChange} value={7} name={name+"_"+index} type="radio" /></td>
                                </>
                       
                            ):
                                header.length === 3?
                            (
                                <>
                                 <td className='first' colSpan="10"><p>{item}</p></td>
                        <td colSpan="3"><Form.Check onChange={onChange} value={1} name={name+"_"+index} type="radio" /></td>
                        <td colSpan="3"><Form.Check onChange={onChange} value={2} name={name+"_"+index} type="radio" /></td>
                        <td colSpan="3"><Form.Check onChange={onChange} value={3} name={name+"_"+index} type="radio" /></td>
              
                                </>
                            ): 

                            (
                                <>
                                  <td className='first' colSpan="10"><p>{item}</p></td>
                                <td colSpan="3"><Form.Check onChange={onChange} value={1} name={name+"_"+index} type="radio" /></td>
                                <td colSpan="3"><Form.Check onChange={onChange} value={2} name={name+"_"+index} type="radio" /></td>
                                <td colSpan="3"><Form.Check onChange={onChange} value={3} name={name+"_"+index} type="radio" /></td>
                                <td colSpan="3"><Form.Check onChange={onChange} value={4} name={name+"_"+index} type="radio" /></td>
                                <td colSpan="3"><Form.Check onChange={onChange} value={5} name={name+"_"+index} type="radio" /></td>
                                </>
                              
                            )
                        }
                        
                       
                     
                    </tr>
                )
            })
        }
        
      

        </tbody>

      </Table>
    </div>
  )
}
