import React, { Component } from "react";
import Calendar from 'react-calendar';
import "./Patient.css";
import "./PatientStyle.css";
import "../../App.css";
import "../../index.css"; 
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Footer from "../../StaticComponents/Footer";
import StarVote from "../../components/StarVotes";

class Patient extends Component {

  state = {
    date: new Date(),
  }

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
        {/* <h1 id="greeting">Hello!</h1> */}
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <StarVote 
        className={"starVote"}
        />
        
        <Cards
        className = "result-a"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"} 
        city = {"Chandler, AZ"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
     
        />        

        <Cards
        className = "result-b"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler, AZ"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
        title = {"Save"}
        />

        <Cards
        className = "result-c"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler, AZ"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
        title = {"Save"}
        />

        <Cards
        className = "result-d"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler, AZ"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
        title = {"Save"}
        />

        <Cards
        className = "result-e"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler, AZ"}
        distance = {"300 miles"}
        procedureCost = {"$2300"}
        driveCost = {"$200"}
        totalCost = {"$2500"}
        title = {"Save"}
        />

        <Cards
        className = "result-f"
        hospital = {"Best Hospital"}
        address = {"123 Oak St"}
        city = {"Chandler, AZ"}
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
