import React from "react";
import "./ContactBadge.css";
import "../../App.css";
import "../../index.css";

const ContactBadge = props => (

  <div className={props.className} {...props}>
  <h1>{props.genre}</h1>
  <h2>{props.doctor}</h2>
  <h3>{props.address}</h3>
  <h3>{props.rating}</h3>
 
  </div>
);

export default ContactBadge;
