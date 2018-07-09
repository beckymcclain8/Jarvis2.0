import React from "react";
import "./Testimonial.css";
import "../../App.css";
import "../../index.css";

const Testimonial = props => {
  return <div className="testimonial">
  <h5 id="test">{props.testimonial}</h5>
  </div>;
};

export default Testimonial; 
