import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./divgenerator.css";
function DivGenerator({ question }) {
  return (
    <div className="div">
      <h3>{question}</h3>
      <p>
        <AddIcon />
      </p>
    </div>
  );
}

export default DivGenerator;
