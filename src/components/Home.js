import React from "react";
import logo from "../assets/images/logo.png";

const styles = {
  image: {
    width: "150px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "4em",
  },
};

function Home() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" style={styles.image} />
      <div style={styles.title}>Welcome to my First React App</div>
    </div>
  );
}

export default Home;
