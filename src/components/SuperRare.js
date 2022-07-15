import React from 'react'
import super1 from "../assets/super1.png"
import super2 from "../assets/super2.png"
import super3 from "../assets/super3.png"
import super4 from "../assets/super4.png"
import Card from './Card';

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Ape Series",
      title: 'Harambe the saviour',
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super2,
      series: "Ape Series",
      title: 'Harambe the destroyer',
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super3,
      series: "Ape Series",
      title: 'Harambe the vengeful',
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super4,
      series: "Ape Series",
      title: 'Harambe the playboy',
      price: 2.99,
      tag: 12983,
      time: 1,
    },
  ];

  return (
    <div className='super-rare'>
      <div className='title-container'>
        <h2 className='title'>Harambians Super Rare Auction</h2>
        <p className='description'>
          These four limited edition NFTs can be bid on via Opensea
          <a href="#">Opensea</a>
        </p>
      </div>
      <div className='cards'>
        {
          data.map(({ image, series, title, price, tag, time }, index) => 
            <Card
              image={image}
              series = {series} // "Sexy Harambians"
              title = {title} // "The Purple Prince"
              price = {price}
              tag = {tag}
              time = {time}
              key = {index}
            />
          )
        }
      </div>
    </div>
  )
}
