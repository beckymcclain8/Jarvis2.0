import React, { Component } from "react";
import Calendar from "react-calendar";
import "./Patient.css";
import "./PatientStyle.css";
import "../../App.css";
import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
// import Cards from "../../components/Cards";
import Footer from "../../StaticComponents/Footer";
import StarVote from "../../components/StarVotes";
import API from "../../../src/utils/API";
import PatientResult from "../../../../jarvis2.0/src/components/PatientResult";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

class Patient extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date(),
      results: [],
      driveCost: 0
    };
  }

  // state = {

  // };

  componentDidMount() {
    API.getHospitals()
      .then(res => {
        console.log(res);
        this.setState({ results: res.data[0].hospitals });
      })
      .catch(err =>
        console.log(
          "There was an error trying to get the current users saved hospitals: ",
          err
        )
      );
  }

  matches = () => {
    //go to /search page
    return console.log("See some matches");
  };

  revealTotalCost = driveCost => {
    return console.log("here is your drive cost", this.state.driveCost);
  };

  getHospitals = () => {
    console.log("Getting hospitals...");
    API.getHospital()
      .then(res => {
        console.log(res);
        this.setState({ results: res.data.hospitals });
      })
      .catch(err =>
        console.log(
          "There was an error trying to get the current users saved hospitals: ",
          err
        )
      );
  };


  deleteHospital = id => {
    this.state.results.map(hospital => {
      console.log(
        "this is the current user ID:" + JSON.stringify(this.props.auth)
      );
      if (hospital.provider_id === id) {
        API.deleteHospital(hospital)
          .then(res => {
            console.log(res);
            this.getHospitals();
          })
          .catch(err =>
            console.log(
              "There was an error trying to delete the hospital: ",
              err
            )
          );
      }
    });
  };

  render(props) {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <h1 id="fav">Your Favorites</h1>
        {/* <h1 id="greeting">Hello!</h1> */}
        <Calendar onChange={this.onChange} value={this.state.date} />
        <StarVote className={"starVote"} />
        <div id="resultsID">
          <PatientResult
            results={this.state.results}
            deleteHospital={this.deleteHospital}
            revealTotalCost={this.revealTotalCost}
          />
          {/* {this.state.results.map(result => {
            <Card key={result.id}>
              <CardHeader>
                <h4> {result.provider_name} </h4>
              </CardHeader>
            </Card>;
          })} */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Patient;
