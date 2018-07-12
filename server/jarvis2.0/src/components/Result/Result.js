import React from "react";
import "./Result.css";
import "../../App.css";
import "../../index.css";

const Result = props => (
 <ul className="list-group">
  {props.localResult.map(result => (
    <li className="list-group-item" key={result.id}>
    <h4>Below is your lowest cost local result:</h4>
    <h4>Hospital Name: {result.provider_name}</h4>
    <h4> {result.provider_street_address} </h4>
    <h4> {result.provider_city}, {result.provider_state} {result.provider_zip_code} </h4>
    <h4> Cost of Procedure: {result.average_covered_charges} </h4>

    </li>
  ))}
    <h4>Below are lower cost options if you choose to travel:</h4>

    {props.moreResults.map(result => (
      <li className="list-group-item" key={result.id}>
      <h4>Hospital Name: {result.provider_name}</h4>
      <h4> {result.provider_street_address} </h4>
      <h4> {result.provider_city}, {result.provider_state} {result.provider_zip_code} </h4>
      <h4> Cost of Procedure: {result.average_covered_charges} </h4>

      </li>
    ))}
  </ul>
);

export default Result;

//This will be mapped through when the result return for the hospitals
