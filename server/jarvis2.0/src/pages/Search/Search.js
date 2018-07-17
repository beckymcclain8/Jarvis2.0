import React, { Component } from "react";
import "./Search.css";
import "../../App.css";
import "../../index.css";
import Navbar from "../../StaticComponents/Navbar";
import Header from "../../components/Header";
import Footer from "../../StaticComponents/Footer";
import FormInput from "../../components/FormInput/FormInput";
import API from "../../../src/utils/API";
import Result from "../../../../jarvis2.0/src/components/Result";

class Search extends Component {
  state = {
    address: "",
    city: "",
    state: "",
    zipCode: "",
    radius: "",
    procedure: "",
    localZipRadius: [],
    moreZipRadius: [],
    localResult: [],
    lowCost: [],
    moreResults: [],
    distance: []
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchLocalZips(this.state.zipCode, "20");
    this.searchMoreZips(this.state.zipCode, this.state.radius);
    console.log(this.state.zipRadius);
    console.log(this.state.procedure);
    this.searchLocalHospitals(this.state.localZipRadius);
    console.log(this.state.lowCost);
    this.searchMoreHospitals(this.state.moreZipRadius);
    this.getDistance();
    console.log(this.state.distance);
  };

  // componentDidMount() {
  //   this.searchLocalZips(this.state.zipCode, "20");

  // }
  saveHospital = id => {
    const saveHospital = this.state.moreResults.map(hospital => {
      // console.log(hospital);
      if (hospital.provider_id === id) {
        console.log(
          "This is the hospital id you clicked on",
          hospital.provider_id
        );
        console.log("This is the hospital that you are saving: ", hospital);
      }
    });
  };

  searchLocalZips = (query, radius) => {
    API.getZips(query, radius)
      .then(res => this.setState({ localZipRadius: res.data.zip_codes }))
      .catch(err => console.log(err));
  };

  searchMoreZips = (query, radius) => {
    API.getZips(query, radius)
      .then(res => this.setState({ moreZipRadius: res.data.zip_codes }))
      .catch(err => console.log(err));
  };

  searchLocalHospitals = localZipRadius => {
    API.getLocalHospitals(localZipRadius)
      .then(res =>
        this.setState({
          localResult: res.data,
          lowCost: res.average_covered_charges
        })
      )
      .catch(err => console.log(err));
  };

  searchMoreHospitals = moreZipRadius => {
    API.getMoreHospitals(moreZipRadius)
      .then(res => this.setState({ moreResults: res.data }))
      .catch(err => console.log(err));
  };

  getDistance = (userAddress, hospitalAddress) =>
    API.getDistance(userAddress, hospitalAddress).then(res =>
      this.setState({ distance: res.data.distance })
    );

  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />

        {/* <div className="searchGrid" > */}
        <div id="formID">
          <FormInput
            address={this.state.address}
            city={this.state.city}
            state={this.state.state}
            zipCode={this.state.zipCode}
            radius={this.state.radius}
            procedure={this.state.procedure.value}
            handleFormSubmit={this.handleFormSubmit.bind(this)}
            handleInputChange={this.handleInputChange.bind(this)}
          />
        </div>

        {/* <div id="resultsID"> */}
        <Result
          localResult={this.state.localResult}
          moreResults={this.state.moreResults}
          saveHospital={this.saveHospital}
        />
        {/* </div> */}
        {/* </div> */}

        <Footer />
      </div>
    );
  }
}
export default Search;
