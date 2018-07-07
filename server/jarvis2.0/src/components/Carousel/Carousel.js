import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Carousel.css";
import "../../index.css";
// import Button from "../../components/Button";

const Carousel = props => {
  return (
    <div className={props.carousel}>
      <h1>{props.heading}</h1>
      <p>{props.info}</p> 
      <Link to={props.link} className="carousel-link">
        {props.title}
      </Link>
    </div>
  );
};

export default Carousel;
