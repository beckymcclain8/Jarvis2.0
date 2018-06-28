import React, { Component } from "react";
import Navbar from "../../StaticComponents/Navbar";
// import Carousel from "../../components/Carousel";
// import { Login, SubmitBtn } from "../../components/Login";
// import Input from "../../components/FormInput";
// import Button from "../../components/Button";
// import Options from "../../components/Options";
import Footer from "../../StaticComponents/Footer";
import "../../App.css";
import "../../index.css";

class Home extends Component {
  search = () => {
    //go to /search page
  };

  patientProfile = () => {
    //go to /patientProfile
  };

  providerInfo = () => {
    //go to /providerInfo
  };

  costMap = () => {
    //go to /costMap
  };

  render() {
    return (
      <div className="Home">
        <Navbar />
        {/* <Carousel />
        <form>
          <Login />
          <Input />
          //add login stuff... need more info about facebook/google or do we
          just want input fields for username and password
          <SubmitBtn />
        </form>
        <Options>
          <img> # </img>
          <Button onClick={this.search}>Search</Button>
        </Options>
        <Options>
          <img> # </img>
          <Button onClick={this.patientProfile}>User Profile</Button>
        </Options>
        <Options>
          <img> # </img>
          <Button onClick={this.providerInfo}>Provider</Button>
        </Options>
        <Options>
          <img> # </img>
          <Button onClick={this.costMap}>Cost Map</Button>
        </Options> */}
        <Footer />
      </div>
    );
  }
}

export default Home;
