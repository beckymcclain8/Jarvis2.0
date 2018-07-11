import React from "react";
import SubmitBtn from "../SubmitBtn";
import "./Result.css";
import "../../App.css";
import "../../index.css";

const Result = props => (
 
  <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" key={result.id}>
      <h4>Hospital Name: {result.provider_name}</h4>
      <h4> {result.provider_street_addresss} </h4>
      <h4> {result.provider_city}, {result.provider_state} {result.provider_zip_code} </h4>
      <h4> Cost of Procedure: {result.average_covered_charges} </h4>

      </li>
    ))}
  </ul>
);

);


export default Result;

//This will be mapped through when the result return for the hospitals
