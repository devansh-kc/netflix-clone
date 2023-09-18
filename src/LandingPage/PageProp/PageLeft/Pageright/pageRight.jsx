import React from "react";
import "./page2.css";

function PageRight({ heading, para, image }) {
  return (
    <div className="bg">
      <div className="bg__data">
        <div className="content">
          <h2>{heading}</h2>
          <p>{para}</p>
        </div>
        <div className="image">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default PageRight;
