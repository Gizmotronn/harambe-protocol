import React from 'react'
import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";
import Card from './Card';

export default function Free() {
  return <div className='free'>
    <div className='container'>
      <div className='background'>
        <div className='ellipse pink'></div>
        <div className='ellipse green'></div>
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
      <div className='card1'>
        <Card
          image={super1}
          series="Harambe Series"
          title="Harambian Man 1"
          price={2.99}
          tag={12983}
          time={1}
        />
      </div>
      <div className='card2'>
        <Card
          image={release2}
          series="Zookeeper Series"
          title="Ape Murderer 1"
          price={3.95}
          tag={12983}
          time={2}
        />
      </div>
    </div>
  </div>
}
