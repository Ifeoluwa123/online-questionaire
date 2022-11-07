import React from 'react';
import carta from '../assets/images/logo/carta.jpg'
import oau from '../assets/images/logo/oau-logo.png'
import ui from '../assets/images/logo/ui.jpg'
import unilag from '../assets/images/logo/unilag.png'
export default function Logo({...other}) {
  return (
    <div className='logo_container'>
    <div className="logo_wrapper" {...other}>

        <img src={carta} alt="" />
        <img src={oau} alt="" />
        <img src={ui} alt="" />
        <img src={unilag} alt="" />

    </div>
      
    </div>
  );
}
