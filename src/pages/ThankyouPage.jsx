import React from 'react'
import { Link } from 'react-router-dom'

export default function ThankyouPage() {
  return (
    <div className=' thankyou'>
    <h1>Thank you</h1>
    <p className="text-center">Please if you see this page, it means you did not consent to participate in the study.</p>
      <p>Would you like to <Link to="/questionaire"> give it another try</Link> ?</p>
  </div>
  )
}
