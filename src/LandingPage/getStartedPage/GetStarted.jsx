import React, { useState } from "react";
import "./getStarted.css";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  function mainContent() {
    if (input) {
      navigate("/maincontent");
    } else {
      return;
    }
  }
  return (
    <div className="getstarted">
      <h1>
        {" "}
        <span>Enjoy big movies, hit series and more</span>{" "}
        <span>from ₹ 149.</span>
      </h1>

      <p>Join today. Cancel anytime.</p>
      <p>
        Ready to watch? Enter your email to create or restart your membership
      </p>

      <div className="getStarted__form">
        <form>
          <input
            type="email"
            placeholder="Email address"
            required
            className="email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={mainContent}>Get Started </button>
        </form>
      </div>
    </div>
  );
}

export default GetStarted;
