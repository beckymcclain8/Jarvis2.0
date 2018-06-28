import React from "react";
import "./Feature.css";
import "../../App.css";
import "../../index.css";

const Feature = props => {
  return (
    <div className={props.className} {...props}>
      {" "}
      Feature Selection
    </div>
  );
};

export default Feature;
