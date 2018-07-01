import React from "react";
import "./Feature.css"; 
import "../../App.css";
import "../../index.css";
import Button from "../Button";
import Image from "../Image";

const Feature = props => {
  return (
    <div className = { props.className } {...props }>
      {" "}
      <Image src = { props.src } />
      <br />
      <h4>{props.title}</h4>
      {/* <Button title = { props.title } /> */}
    </div>
  );
}; 

export default Feature;
 