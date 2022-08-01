import React from "react";
import home from "../assets/harambe1.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">The Harambians</p>
          <h1 className="title">Jai is the best boss ever!</h1>
          <p className="description">
            Harambians collection and all derivatives launching August 2022. Don't be a loser and miss out.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
