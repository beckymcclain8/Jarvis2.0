import React, { Component } from "react";
import "./Patient.css";
import "./PatientStyle.css";
import "../../App.css";
import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Feature from "../../components/Feature";
import Footer from "../../StaticComponents/Footer";

class Patient extends Component {
  matches = () => {
    //go to /search page
    console.log("See some matches");
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Feature className="feature-a" />
        <Footer />
      </div>
    );
  }
}

export default Patient;
