import React from "react";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <ul className="navbar nav ml-auto ">
      <li className="nav-item">
        <Link className="nav-link text-light" to="/">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-light" to="/courses">
          Courses
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/students">
          Students
        </Link>
      </li>
    </ul>
  );
}

export default Navigator;
