import React from "react";
import logo from "../assets/images/logo.png";

function Home() {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <img height="100px" src={logo} alt="" />
        <h1 className="display-4">Welcome to First ReactJS App</h1>
        <p className="lead">This is simple CRUD app which uses Axios, Mongo and React.</p>
        <hr className="my-4" />
        <p>Powered by Bootstrap.</p>
      </div>
    </div>
  );
}

export default Home;
