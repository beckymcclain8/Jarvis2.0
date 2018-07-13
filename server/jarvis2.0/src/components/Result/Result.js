import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import "./Result.css";
import "../../App.css";
import "../../index.css"; 


const Result = props => (
 <ul className="list-group">
  {props.localResult.map(result => (
    // <h4>Below is your lowest cost local result:</h4>
    <Card className={props.className} className="list-group-item" key={result.id}>
    <CardHeader>
      <h2> {result.provider_name} </h2>
    </CardHeader>
    <CardBody>
    <h4> {result.provider_street_address} </h4>
    <h4> {result.provider_city}, {result.provider_state} {result.provider_zip_code} </h4>
    <h4> Cost of Procedure: {result.average_covered_charges} </h4>
      <h4> Driving Cost: {props.driveCost} </h4>
      <br />
      <hr />
      <h2> Total Cost: {props.totalCost} </h2>
    </CardBody>
    </Card> 
  ))}
    {/* <h4>Below are lower cost options if you choose to travel:</h4> */}

    {props.moreResults.map(result => (
      <Card className={props.className} className="list-group-item" key={result.id}>
      <CardHeader>
      <h4>Hospital Name: {result.provider_name}</h4>
      </CardHeader>
      <CardBody>
      <h4> {result.provider_street_address} </h4>
      <h4> {result.provider_city}, {result.provider_state} {result.provider_zip_code} </h4>
      <h4> Cost of Procedure: {result.average_covered_charges} </h4>
      </CardBody>
      </Card>
    ))}
  </ul>
);

export default Result;

//This will be mapped through when the result return for the hospitals
