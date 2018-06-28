import React, { Component } from "react";
import "./Home.css";
import "./HomeStyle.css";
import "../../App.css";
import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Login from "../../components/Login";
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

  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Carousel />
        {/*<form>*/}
        <Login />
        <Feature className="feature-a" />
        <Feature className="feature-b" />
        <Feature className="feature-c" />
        <Feature className="feature-d" />
        {/* <Selection /> */}
        {/* <Option src={"`https://placeimg.com/100/100/tech"} /> */}
        {/* <Input />
          //add login stuff... need more info about facebook/google or do we
          just want input fields for username and password */}
        {/* <SubmitBtn /> */}
        {/* </form> */}
        {/* <Option
          src={"https://placeimg.com/100/100/tech"}
          <Button onClick={this.search}>Search</Button> 
        />
        <Option
          src={"https://placeimg.com/100/100/tech"}
          <Button onClick={this.patientProfile}>User Profile</Button> 
        />
        <Option
          src={"https://placeimg.com/100/100/tech"}
          <Button onClick={this.providerInfo}>Provider</Button> 
        />
        <Option
          src={"https://placeimg.com/100/100/tech"}
          <Button onClick={this.costMap}>Cost Map</Button> 
        /> */}
        <Footer />
      </div>
    );
  }
}

export default Home;
