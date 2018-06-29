import React from "react";
import "./Button.css";
import "../../App.css";
import "../../index.css";
 
const Button = props => {
  return <button className="button"><h1>{props.title}</h1></button>;
};
 
export default Button;
