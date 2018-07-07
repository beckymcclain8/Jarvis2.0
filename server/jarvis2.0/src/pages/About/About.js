import React, { Component } from "react";
import "./About.css";
import "./AboutStyle.css";
import "../../App.css";
import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
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
        <Carousel className="carousel-about" />
        <Footer />
      </div>
    );
  }
}

export default About;
