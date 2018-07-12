import React from "react";
import "./Testimonial.css";
import "../../App.css";
import "../../index.css";

const Testimonial = props => {
  return <div className={props.className}>
  <h5 id={props.id}>{props.testimonial}</h5>
  </div>;
};

export default Testimonial;  
