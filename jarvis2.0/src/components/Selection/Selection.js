import React from "react";
import "./Selection.css";
import "../../App.css";
import "../../index.css";

const Selection = props => {
  return (
    <div className="Selection">
      <h1>Selection</h1>
      <img src={props.src} />
    </div>
  );
};

export default Selection;
