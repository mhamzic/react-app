import React from "react";
import logo from "../assets/images/paragon.png";
import Navigator from "./Navigator";

const AppHeader = () => {
  return (
    <div>
      <header>
        <div className="left">
          <img src={logo} alt="logotip" />
        </div>
        <div className="left">
          <h2>My React App</h2>
        </div>
        <div className="right">
          <Navigator />
        </div>
      </header>
    </div>
  );
};

export default AppHeader;
