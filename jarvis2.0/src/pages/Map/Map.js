import React, { Component } from "react";
import "../../App.css";
import "../../index.css";
import "./Map.css";
import "./MapStyle.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Footer from "../../StaticComponents/Footer";
import StarVote from "../../components/StarVotes";
import ContactBadge from "../../components/ContactBadge";

class Map extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <div className="map">MAP GOES HERE </div>
        <div className="aside">
          RADIUS HOSPITAL RESULTS OF THE USER GO HERE{" "}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Map;
