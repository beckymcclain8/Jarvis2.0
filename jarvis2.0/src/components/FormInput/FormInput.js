import "./FormInput.css";
import "../../App.css";
import "../../index.css";

import React, { Component } from "react";
import "./FormInput.css";

class FormInput extends Component {
  // Setting the component's initial state
  state = {
    address: "",
    city: "",
    state: "",
    zipCode: "",
    radius: "",
    procedure: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
       
        <form className="form">
          <input
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Enter your address"
          />
          <input
            value={this.state.city}
            name="city"
            onChange={this.handleInputChange}
            type="text"
            placeholder="City"
          />
          <input
            value={this.state.state}
            name="state"
            onChange={this.handleInputChange}
            type="text"
            placeholder="State"
          />
           <input
            value={this.state.zipCode}
            name="zipCode"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Zip Code"
          />
            <input
            value={this.state.radius}
            name="radius"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search Radius"
          />
            <input
            value={this.state.procedure}
            name="procedure"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Procedure list here"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormInput;
