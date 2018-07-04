import React from "react";
import "./ContactBadge.css";
import "../../App.css";
import "../../index.css";

const ContactBadge = props => (

  <div className={props.className} {...props}>
  <h2>{props.genre}</h2>
  <h3>{props.doctor}</h3>
  <h4>{props.address}</h4>
  <h4>{props.rating}</h4>
 
  </div>
);

export default ContactBadge;
