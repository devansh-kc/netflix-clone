import React from "react";
import "./faq.css";
import DivGenerator from "./DivGenerator";

function Faq() {
  return (
    <div className="main">
      <h2>Frequently Asked Questions</h2>

      <DivGenerator question="What is Netflix" />
      <DivGenerator question="How much does Netflix cost ?" />
      <DivGenerator question="Where can I watch ?" />
      <DivGenerator question="How do I cancel ?" />
      <DivGenerator question="What can I watch on Netflix ?" />
      <DivGenerator question="Is Netflix is good for kids ?" />
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="faq__form">
        <form>
          <input type="email" placeholder="Email address" />
          <button>Get Started </button>
        </form>
      </div>
    </div>
  );
}

export default Faq;
