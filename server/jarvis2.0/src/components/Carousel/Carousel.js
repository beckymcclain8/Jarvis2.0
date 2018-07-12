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
      <div class="carousel-caption d-none d-md-block">
      <h1 className="car1"> Jarvis was quick and easy to use and helped me find the right hospital. </h1>
      <br></br>
      <h3 className="car1"> - Jack Anderson, California </h3>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="http://backgroundcheckall.com/wp-content/uploads/2017/12/hospital-background-7.jpg" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
      <h1 className="car2"> I was able to save thousands of dollars by driving to a hospital just a few hours away. </h1>
      <br></br>
      <h3 className="car2"> - Don Jones, Iowa </h3>
      </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://image.freepik.com/free-photo/blurred-abstract-background-interior-view-looking-out-toward-to-empty-office-lobby-and-entrance-doors-and-glass-curtain-wall-with-frame_1339-6352.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
      <h1 className="car2"> I was able to save thousands of dollars by driving to a hospital just a few hours away. </h1>
      <br></br>
      <h3 className="car2"> - Don Jones, Iowa </h3>
      </div>
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