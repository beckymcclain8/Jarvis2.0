// carousel with bootstrap-- don't know how to style interior

import React from "react";
// import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import { Carousel } from "react-responsive-carousel";
import "../../App.css";
import "./Carousel.css";
import "../../index.css";
// import Button from "../../components/Button";

const Carousel = props => (
//  <div className = "carousel-home">

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://image.freepik.com/free-photo/blur-hospital_1203-7956.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://image.freepik.com/free-photo/doctor-with-a-stethoscope-in-the-hands-and-hospital-background_1423-1.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://image.freepik.com/free-photo/doctor-s-stethoscope-with-blue-background_23-2147652363.jpg" alt="Third slide"/>
    </div>
  </div>
  {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a> */}
</div>

// </div>

  );
  

export default Carousel;