import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import "./Result.css";
import "../../App.css";
import "../../index.css"; 

// saveHospital = (result) => {

// }

var cardStyle = {
  width: "25%",
  display: "inline-block",
  // gridColumn: "5/7",
  // gridRow: "2/4"
  // gridArea: "2/5/4/7",
  // margin: "5px"
}

var moreCards = {
  width: "33%",
  // gridArea: "2/8/10/12",
  // float: "right",
  display: "inline-block"
}

// var listGroup = {
//   gridColumn: "5/-1",
//   gridRow: "2/11"
// }

// var localResult = {
//   gridArea: "2/5/3/2"
// }

// var radiusResults = {
//   gridArea: "2/8/8/5"
// }

const Result = props => (
  
 <div className="list-group" >
 <div style={cardStyle} id = "localResults">
  {props.localResult.map(result => (
    // <h4>Below is your lowest cost local result:</h4>
    // <div id="localResult" >
    <Card  key={result.id} >
    <CardHeader>
      <h3> {result.provider_name} </h3>
    </CardHeader>
    <CardBody>
      
    <h4> {result.provider_street_address} </h4>
    <h4> {result.provider_city}, {result.provider_state} {result.provider_zip_code} </h4>
    <h4> Cost of Procedure: ${result.average_covered_charges} </h4>
      <h4> Driving Cost: ${props.driveCost} </h4>
      <br />
      <hr />
      <h2> Total Cost: {props.totalCost} </h2>
    </CardBody>
    </Card> 
    
  ))}
  </div>
    {/* <h4>Below are lower cost options if you choose to travel:</h4> */}
    <div id="resultsID">
    {props.moreResults.map(result => (
      
      <Card  className="list-group-item" key={result.id} style={moreCards} >
      <CardHeader>
      <h4>{result.provider_name}</h4>
      </CardHeader>
      <CardBody>
      <h4> {result.provider_street_address} </h4>
      <h4> {result.provider_city}, {result.provider_state} {result.provider_zip_code} </h4>
      <h4> Cost of Procedure: {result.average_covered_charges} </h4>
      </CardBody>
      <CardFooter>
        <button
        onclick={this.saveHospital.bind(this)}>Save</button>
        </CardFooter>
      </Card>
    ))}
    </div>
  </div>
);

export default Result;

//This will be mapped through when the result return for the hospitals
