// carousel with bootstrap-- don't know how to style interior

import React from "react";
import "../../App.css";
import "./Carousel.css";
import "../../index.css";

const Carousel = props => (

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
      <h1 className="car2"> Thanks to Jarvis I found a hospital that could perfrom my procedure and save me money. </h1>
      <br></br>
      <h3 className="car2"> - Paula Kelley, Tennessee </h3>
      </div>
    </div>
  </div>
</div>

  );
  

export default Carousel;