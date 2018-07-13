import React from "react";
import "../../App.css";
import "./FormInput.css";

//put form into a table to make labels show up correctly
const FormInput = props => ( 

<form className="formInput">
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
      <label htmlFor="procedure">Seclect Your Procedure:</label>
          <select value={props.state.value} onChange={props.handleInputChange}>
            <option value="418 - LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W CC">Laparoscopic Gall Bladder Removal with comorbidities</option>
            <option value="419 - LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W/O CC/MCC">Laparoscopic Gall Bladder Removal without comorbidities</option>
            <option value="469 - MAJOR JOINT REPLACEMENT OR REATTACHMENT OF LOWER EXTREMITY W MCC">Knee Joint Replacement with comorbidities</option>
            <option value="470 - MAJOR JOINT REPLACEMENT OR REATTACHMENT OF LOWER EXTREMITY W/O MCC">Knee Joint Replacement without comorbidities</option>
            <option value="481 - HIP & FEMUR PROCEDURES EXCEPT MAJOR JOINT W CC">Hip Replacement with comorbidities</option>
            <option value="482 - HIP & FEMUR PROCEDURES EXCEPT MAJOR JOINT W/O CC/MCC">Hip Replacement without cormorbidities</option>
            <option value="470 - MAJOR JOINT REPLACEMENT OR REATTACHMENT OF LOWER EXTREMITY W/O MCC">Knee Joint Replacement without comorbidities</option>
            <option value="552 - MEDICAL BACK PROBLEMS W/O MCC">Back Problems</option>
            <option value="638 - DIABETES W CC">Diabetes Treatment</option>
            <option value="897 - ALCOHOL/DRUG ABUSE OR DEPENDENCE W/O REHABILITATION THERAPY W/O MCC">Substance Abuse Rehabilitation</option>  
          </select>
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


