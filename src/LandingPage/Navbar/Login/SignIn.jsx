import React from "react";
import "./signin.css";
function SignIn() {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="NetFlix Logo"
        className="nav__logo"
      />
      <div className="signin">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="email or phone number" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
          <span>
            <input type="checkbox" /> Remember me
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
