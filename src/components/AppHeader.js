import React from "react";
import logo from "../assets/images/p.svg";
import Navigator from "./Navigator";

const AppHeader = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb-10">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" />
        </a>

        <Navigator />
      </div>
    </nav>
  );
};

export default AppHeader;
