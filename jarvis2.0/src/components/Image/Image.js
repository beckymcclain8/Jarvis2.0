import React from "react";
// import "./Profile.css";
import "../../App.css";
import "../../index.css";

const Image = props => {
  return (
    <img src={props.src} className="profile-image" />
  ); 
};  

export default Image;
