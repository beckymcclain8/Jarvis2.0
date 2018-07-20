import React from "react";
import "../../App.css"; 
import "./FormInput.css";

//put form into a table to make labels show up correctly
const FormInput = props => ( 

<form className="formInput">
    <table className="form-group">
    <tbody>
    <tr>
      {/* <td><label htmlFor="address">Address:</label></td> */}
      <td><input
        onChange={props.handleInputChange} 
        value={props.address}
        name="address"
        type="text"
        className="form-control"
        placeholder="Your Address"
        id="address"
      /></td>
      </tr>
      <tr>
        {/* <td><label htmlFor="city">City:</label></td> */}
      <td><input
        onChange={props.handleInputChange}
        value={props.city}
        name="city"
        type="text"
        className="form-control"
        placeholder="Your City"
        id="City"
      /></td>
      </tr>
      <tr>
        {/* <td><label htmlFor="state">State:</label></td> */}
      <td><input
        onChange={props.handleInputChange}
        value={props.search}
        name="state"
        type="text"
        className="form-control"
        placeholder="Your State"
        id="state"
      /></td>
      </tr>
        <tr>
          {/* <td><label htmlFor="zipCode">Zip Code:</label></td> */}
      <td><input
        onChange={props.handleInputChange}
        value={props.search}
        name="zipCode"
        type="number"
        className="form-control"
        placeholder="Your Zip Code"
        id="zipCode"
      /></td>
      </tr>
      <tr>
        {/* <td><label htmlFor="radius">Search Radius:</label></td> */}
      <td><input
        onChange={props.handleInputChange}
        value={props.radius}
        name="radius"
        type="number"
        className="form-control"
        placeholder="Miles you are willing to travel"
        id="radius"
      /></td>
      </tr>
      
        <tr>
      <td><label htmlFor="procedure">Select Your Procedure:</label></td>
      </tr>
      <tr>
          <td><select value={props.state.value} onChange={props.handleInputChange}>
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
          </select></td>
          </tr>
          <tr>
            {/* <td></td> */}
      <td><button
        onClick={props.handleFormSubmit}
        className="btn btn-primary mt-3"
      >
        Search
      </button></td>
      </tr>
      </tbody> 
    </table>
  </form>
);

export default FormInput;


