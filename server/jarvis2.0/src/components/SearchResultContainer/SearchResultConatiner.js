import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

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
      .then(res => this.setState({ localResult: res.data }))
      .catch(err => console.log(err));
  };

  searchMoreHospitals = moreZipRadius => {
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
    this.searchLocalHospitals(this.state.localZipRadius, this.state.procedure)
    this.searchMoreHospitals(this.state.moreZipRadius, this.state.procedure)

     };

  render() {
    return (
      <div>
        <SearchForm
          address={this.state.address}
          city={this.state.city}
          state={this.state.state}
          zipCode={this.state.zipCode}
          radius={this.state.radius}
          procedure={this.state.procedure.value}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList 
          localResult={this.state.localResult}
          moreResults={this.state.moreResults}
               />
      </div>
    );
  }
}

export default SearchResultContainer;
