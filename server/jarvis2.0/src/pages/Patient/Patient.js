import React, { Component } from "react";
import { connect } from "react-redux";
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

class Patient extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date(),
      results: [],
      driveCost: 0,

      name: "",

      distance: 0
    };
  }

  // state = {

  // };

  componentDidMount() {
    API.getHospitals()
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data[0].hospitals,
          name: res.data[0].googleName
        });
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

  //im not sure where to put this function.
  //  getDistance = () => {
  //     API.getDistance((result.provider_street_address + " " + result.provider_zip_code),
  //     (props.address+ " " + props.zipCode))
  //     .then( res => {this.setState({ distance: res.data.route.distance})}
  //     )
  //   }

  revealTotalCost = () => {
    const totalCost = (this.distance * 0.545 * 2).toFixed(2);
    console.log(totalCost);
    this.setState({ driveCost: totalCost });
    return console.log("here is your drive cost", this.state.driveCost);
  };

  // getHospitals = () => {
  //   console.log("Getting hospitals...");
  //   API.getHospital()
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         results: res.data[0].hospitals,
  //         name: res.data[0].googleName
  //       });
  //     })
  //     .catch(err =>
  //       console.log(
  //         "There was an error trying to get the current users saved hospitals: ",
  //         err
  //       )
  //     );
  // };

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
        <h1 id="greeting">
          Welcome Back {this.state.name.split(" ").shift()} !
        </h1>
        <Calendar onChange={this.onChange} value={this.state.date} />
        <StarVote className={"starVote"} />
        <div id="patientResultsID">
          <PatientResult
            results={this.state.results}
            deleteHospital={this.deleteHospital}
            revealTotalCost={this.revealTotalCost}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Patient);
