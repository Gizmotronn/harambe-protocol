import React from 'react'
import home from "../assets/home.png";

export default function Home() {
  return <div className='home'>
    <div className='container'>
      <div className='content'>
        <p className='sub-title'>Launching soon</p>
        <h1 className='title'>The Harambians</h1>
        <p className='description'>Don't miss out on the release</p>
        <button>Sign Up</button>
      </div>
      <div className='image-container'>
        <div className='image'>
          <img src={home} alt="home" />
        </div>
        <div className='ellipse-container'>
          <div className='ellipse pink'></div>
          <div className='ellipse orange'></div>
        </div>
      </div>
    </div>
  </div>;
}
