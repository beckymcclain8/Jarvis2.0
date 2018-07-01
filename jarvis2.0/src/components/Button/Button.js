import React from "react";
import "./Button.css";
import "../../App.css";
import "../../index.css";
 
const Button = props => {
  return <button className="button">{props.title}</button>;
};
 
export default Button;
 