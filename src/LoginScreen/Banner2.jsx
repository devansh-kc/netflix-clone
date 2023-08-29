import React from "react";
import "../Banner.css";

function Banner2() {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",

        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
      }}
    >
      <h1>
        The biggest Indian hits. The best Indian stories. All streaming here.
      </h1>

      <p>Watch anywhere. Cancel anytime. </p>

      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <form>
        <input type="email" placeholder="Email address" />
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
}

export default Banner2;
