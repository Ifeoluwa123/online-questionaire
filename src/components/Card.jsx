import React from 'react'

import Buttons from './Buttons'

import CheckRadioButton from './CheckRadioButton'


export default function Card({name,onChange,image}) {



  return (

    <div className='item-wrapper'>



 <div className="image-container">
            <img src={image} alt="" />
        </div>
        <div className="card-container">
            <CheckRadioButton name={name} onChange={onChange} value={1} inline={false} type="radio" label="Not provocative at all" />
            <CheckRadioButton name={name} onChange={onChange} value={2} inline={false} type="radio" label="Very non provocative" />
            <CheckRadioButton name={name} onChange={onChange} value={3} inline={false} type="radio" label="A little non provocative" />
            <CheckRadioButton name={name} onChange={onChange} value={4} inline={false} type="radio" label="Neither provocative nor non provocative" />
            <CheckRadioButton name={name} onChange={onChange} value={5} inline={false} type="radio" label="A little provocative" />
            <CheckRadioButton name={name} onChange={onChange} value={6} inline={false} type="radio" label="Very provocative" />
            <CheckRadioButton name={name} onChange={onChange} value={7} inline={false} type="radio" label="Extremely provocative" />
        </div>

    </div>
  )
}
