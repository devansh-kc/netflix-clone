import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function login() {
    navigate("/login");
  }
  return (
    <div className="container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="NetFlix Logo"
        className="nav__logo"
      />
      <div className="container__details">
        <select>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button>sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
