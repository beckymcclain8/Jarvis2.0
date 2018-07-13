import React, { Component } from "react";
import FormInput from "../FormInput";
import Result from "../Result";
import API from "../../utils/API";
import "../../App.css";
import "../../index.css";
import "./SearchResultContainer.css";

class SearchResultContainer extends Component {
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
    moreResults: []
  };

  componentDidMount() {
    this.searchLocalZips("85018", "20");
    
  }

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
      .then(res => this.setState({ localResult: res.data,
                                    lowCost: res.average_covered_charges }))
      .catch(err => console.log(err));
  };

  searchMoreHospitals = (moreZipRadius) => {
    API.getMoreHospitals(moreZipRadius)
      .then(res => this.setState({ moreResults: res.data }))
      .catch(err => console.log(err));
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
    this.searchLocalZips(this.state.zipCode, "20")
    this.searchMoreZips(this.state.zipCode, this.state.radius)
    console.log(this.state.zipRadius)
    console.log(this.state.procedure)
    this.searchLocalHospitals(this.state.localZipRadius)
    console.log(this.state.localResult.average_covered_charges)
    this.searchMoreHospitals(this.state.moreZipRadius)
     };

     

  render() {
    var style= {
      gridColumn: "2/6",
      gridRow: "3/7",
      borderRadius: "8px",
      backgroundColor: "yellow",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(116, 12, 12, 0.19)"
        }
        // style= {style}

        var styleResults= {
          gridColumn: "7/-1",
          gridRow: "3/10",
          borderRadius: "8px",
          backgroundColor: "#5c9684",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(116, 12, 12, 0.19)"
            }

            // style= {styleResults}
    return (
      <div className="searchGrid" >
      <div id="formID">
        <FormInput
          address={this.state.address}
          city={this.state.city}
          state={this.state.state}
          zipCode={this.state.zipCode}
          radius={this.state.radius}
          procedure={this.state.procedure.value}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        </div>
        <div id="resultsID">
        <Result 
          localResult={this.state.localResult}
          moreResults={this.state.moreResults}
        /> 
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;
