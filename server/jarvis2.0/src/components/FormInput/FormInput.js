import React from "react";

const FormInput = props => (
  <form>
    <div className="form-group">
      <label htmlFor="address">Address:</label>
      <input
        onChange={props.handleInputChange}
        value={props.address}
        name="address"
        type="text"
        className="form-control"
        placeholder="Enter Your Address"
        id="address"
      />
        <label htmlFor="city">City:</label>
      <input
        onChange={props.handleInputChange}
        value={props.city}
        name="city"
        type="text"
        className="form-control"
        placeholder="Enter Your City"
        id="City"
      />
        <label htmlFor="state">State:</label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="state"
        type="text"
        className="form-control"
        placeholder="ST"
        id="state"
      />
        <label htmlFor="zipCode">Zip Code:</label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="zipCode"
        type="number"
        className="form-control"
        placeholder="Zip Code"
        id="zipCode"
      />
        <label htmlFor="radius">Search Radius:</label>
      <input
        onChange={props.handleInputChange}
        value={props.radius}
        name="radius"
        type="number"
        className="form-control"
        placeholder="Enter the number of miles you are willing to travel"
        id="radius"
      />
      <label htmlFor="procedure">Procedure:</label>
      <input
        onChange={props.handleInputChange}
        value={props.procedure}
        name="procedure"
        type="text"
        className="form-control"
        placeholder="Select your procedure"
        id="procedure"
      />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary mt-3"
      >
        Search
      </button>
    </div>
  </form>
);

export default FormInput;


