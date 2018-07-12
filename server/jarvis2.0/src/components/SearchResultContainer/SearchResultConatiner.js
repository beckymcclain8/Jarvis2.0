import React, { Component } from "react";
import FormInput from "../FormInput";
import Result from "../Result";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    address: "",
    city: "",
    state: "",
    zipCode: "",
    radius: "", 
    procedure: "",
    zipRadius: [],
    results: []
  };

  componentDidMount() {
    this.searchZips("85018");
    
  }

  searchZips = query => {
    API.getZips(query)
    .then(res => this.setState({ zipRadius: res.data.zip_codes }))
    .catch(err => console.log(err));

  };

  searchHospitals = zipRadius => {
    API.getHospitals(zipRadius)
      .then(res => this.setState({ results: res.data }))
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
    this.searchZips(this.state.zipCode)
    console.log(this.state.zipRadius)
    this.searchHospitals(this.state.zipRadius)
     };

  render() {
    return (
      <div>
        <FormInput
          address={this.state.address}
          city={this.state.city}
          state={this.state.state}
          zipCode={this.state.zipCode}
          radius={this.state.radius}
          procedure={this.state.procedure}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Result results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
