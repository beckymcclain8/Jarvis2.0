import React, { Component } from "react";
import "./About.css";
import "./AboutStyle.css";
import "../../App.css";
import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Footer from "../../StaticComponents/Footer";

class About extends Component {
  scroll = () => {
    //go to /search page
    console.log("Scroll the carousel");
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <div className="about" >
           <div className="aboutText">
           <h1> JARVIS </h1>
          <hr></hr>
          <br></br>
          <h2 >
            We takes the guesswork out of finding hospitals that will
            perform your medical procedure at the lowest cost.
          </h2>
          <br></br>
          <h2>
            We created JARVIS in an effort to show people that costs vary,
            sometimes greatly, depending on where you are located. After doing
            some research, we found that sometimes you can save a good amount of
            money just by traveling a few hundred miles.{" "}
          </h2>
          <br></br>
          <h2 >
            It is our hope that people will begin to see the value of a car trip
            and a hotel stay if it saves them thousands of dollars on a medical
            procedure.{" "}
          </h2>
          </div>
        </div>
        {/* <Carousel className="carousel-about" /> */}
        <Footer />
      </div>
    );
  }
}

export default About;
