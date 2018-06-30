import React, { Component } from "react";
import "./Home.css";
import "./HomeStyle.css";
import "../../App.css";
import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
// import Login from "../../components/Login";
import Feature from "../../components/Feature";
// import Input from "../../components/FormInput";
// import Button from "../../components/Button";
// import Selection from "../../components/Selection";
import Footer from "../../StaticComponents/Footer";

class Home extends Component {


  search = () => {
    //go to /search page
    console.log("Let get Searching");
  };

  patientProfile = () => {
    //go to /patientProfile
    console.log("Let's checkout your patient profile");
  };

  providerInfo = () => {
    //go to /providerInfo
    console.log("Let's checkout your provider profile");
  };

  costMap = () => {
    //go to /costMap
    console.log("Let's checkout the Map");
  };

  render(props) {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Carousel />

        <Feature className="feature-a" src={"https://image.flaticon.com/icons/png/512/49/49116.png"} title={"search"} >
        </Feature>
        <Feature className="feature-b" title={"Patient Profile"} >
        </Feature>
        <Feature className="feature-c" title={"Provider"} >
        </Feature>
        <Feature className="feature-d" src={"https://www.teamusa.org/content/images/media/usa_map.png"} title={"Cost Map"}>
        </Feature>

        <Footer />
      </div>
    );
  }
}

export default Home;
