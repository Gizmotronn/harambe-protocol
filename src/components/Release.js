import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";

export default function Release() {
  return <div className='releases'>
    <div className='release orange'>
      <div className='card-container'>
          <img src={release1} alt="release" />
          <div className='ellipse pink'></div>
        </div>
      </div>
      <div className='release green'>
        <div className='card-container'>
          <Card
            image={release2}
            series="Harambe"
            title="Harambe"
            price={2.99}
            tag={12956}
            time={1}
          />
          <div className='ellipse orange'></div>
        </div>
        <div className='conmtent'>
          <h2 className='title'>Initial release July 2022</h2>
          <p className='description'>
            We have released these limited edition Harambians which can be bid on via <a href="#">Opensea</a>
          </p>
          <p className='description'>
            Don't miss out on collecting these, as they'll offer special edition staking rewards!
          </p>
          <p className='description'>
            We are regenerating the real Harambe!
          </p>
          <a href="#" className='link'>
            Check out our whitepaper <BsArrowRight />
          </a>
        </div>
      </div>
  </div>
}
