import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <nav>
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="NetFlix Logo"
        />
        <div>
          <select>
            <option>english</option> <option>हिंदी</option>
          </select>
          <button>Sign in </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
