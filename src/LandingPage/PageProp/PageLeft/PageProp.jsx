import React from "react";
import "./pageProp.css";

function PageProp({ heading, para, image }) {
  return (
    <div className="page">
      <div className="page__data">
        <div className="images">
          <img src={image} />
        </div>
        <div className="contents">
          <h2>{heading}</h2>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}

export default PageProp;
