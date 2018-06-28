import React from "react";
import "./Feature.css";
import "../../App.css";
import "../../index.css";
import Button from "../Button";
import Image from "../Image";

const Feature = props => {
  return (
    <div className={props.className} {...props}>
      {" "}
      Feature Selection
      <Image />
      <Button />
    </div>
  );
};

export default Feature;
