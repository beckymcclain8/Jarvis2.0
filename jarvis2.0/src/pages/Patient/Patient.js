import React, { Component } from "react";
import "./Patient.css";
import "./PatientStyle.css";
import "../../App.css";
import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Result from "../../components/Result";
// import Feature from "../../components/Feature";
import Footer from "../../StaticComponents/Footer";
import Calender from "../../components/Calender";
import StarVote from "../../components/StarVotes";

class Patient extends Component {
  matches = () => {
    //go to /search page
    console.log("See some matches");
  };

  render(props) { 
    return (
      <div className="container">
        <Navbar />
        <Header />
        <h1 id="fav">Your Favorites</h1>
        <h1 id="greeting">Hello!</h1>
        <Calender />
        <StarVote />
        <Result 
        className = "result-a"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
        title = {"Save"}
        />

        <Result 
        className = "result-b"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
        title = {"Save"}
        />

        <Result 
        className = "result-c"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
        title = {"Save"}
        />

        <Result 
        className = "result-d"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
        title = {"Save"}
        />

<Result 
        className = "result-e"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
        title = {"Save"}
        />

        <Result 
        className = "result-f"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
        title = {"Save"}
        />

        <Footer />
      </div>
    );
  }
}

export default Patient;
