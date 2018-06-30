import React from "react";
import "../../App.css";
import "./Carousel.css";
import "../../index.css";
import Button from "../../components/Button";

const Carousel = props => {
  return <div className={props.carousel}>
  <h1>{props.heading}</h1>
  <p>{props.info}</p>
  <Button title={props.title} />
  </div>;
};

export default Carousel;
