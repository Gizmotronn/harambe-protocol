import React from 'react'
import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";


export default function Free() {
  return <div className='free'>
    <div className='container'>
      <div className='background'>
        <div className='ellipse pink'></div>
        <div className='ellipse orange'></div>
      </div>
      <div className='content'>
        <div className='image'>
          <img src={icon} alt="icon" />
        </div>
        <h2 className='title'>Free NFT for earlybirds!</h2>
        <p className='description'>Sign up today to get a free NFT at launch</p>
      </div>
    </div>
    <div className='card'>
      <div className='card1'></div>
      <div className='card2'></div>
    </div>
  </div>
}
