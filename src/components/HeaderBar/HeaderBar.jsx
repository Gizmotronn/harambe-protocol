import React, { useState } from "react";
import Button from "./Button";
import menuItems from "./MenuItems";
import "./Headerbar.css";

const HeaderBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="headerbar">
      {/*<h1 className="headerbar-logo">
        Harambe <i className="fab fa-react"></i>
      </h1>*/}
      <div className="headerbar-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "headerbar-menu active" : "headerbar-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>SIGN UP</Button>
    </nav>
  );
};

export default HeaderBar;
