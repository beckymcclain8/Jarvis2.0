import React from "react";
// import "./Profile.css";
import "../../App.css";
import "../../index.css";

const Image = props => {
  return (
    <img alt="" src={props.src} className="profile-image" />
  ); 
};  

export default Image; 
