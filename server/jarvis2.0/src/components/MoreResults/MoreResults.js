import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import "./Result.css";
import "../../App.css";
import "../../index.css"; 

var cardStyle = {
  width: "25%",
}

var moreCards = {
  width: "25%",
  float: "right"
}

var listGroup = {
  gridColumn: "5/-1",
  gridRow: "3/11"
}

// var localResult = {
//   gridArea: "2/5/3/2"
// }

// var radiusResults = {
//   gridArea: "2/8/8/5"
// }

const MoreResults = props => (
  
 <div className="list-group" style={listGroup} >
 {/* // //   {props.localResult.map(result => (
// // //     // <h4>Below is your lowest cost local result:</h4>
// // //     <div id="localResult" >
// // //     <Card className={props.className} className="list-group-item" key={result.id} style={cardStyle}>
// // //     <CardHeader>
// // //       <h3> {result.provider_name} </h3>
// // //     </CardHeader>
// // //     <CardBody>
      
// // //     <h4> {result.provider_street_address} </h4>
// // //     <h4> {result.provider_city}, {result.provider_state} {result.provider_zip_code} </h4>
// // //     <h4> Cost of Procedure: ${result.average_covered_charges} </h4>
// // //       <h4> Driving Cost: ${props.driveCost} </h4>
// // //       <br />
// // //       <hr />
// // //       <h2> Total Cost: {props.totalCost} </h2>
// // //     </CardBody>
// // //     </Card> 
// // //     </div>
// // //   ))} */}
    {/* <h4>Below are lower cost options if you choose to travel:</h4> */}
     <div >
    {props.moreResults.map(result => (
      
      <Card  className="list-group-item" key={result.id} style={moreCards}>
      <CardHeader>
      <h4>{result.provider_name}</h4>
      </CardHeader>
      <CardBody>
      <h4> {result.provider_street_address} </h4>
      <h4> {result.provider_city}, {result.provider_state} {result.provider_zip_code} </h4>
      <h4> Cost of Procedure: {result.average_covered_charges} </h4>
      </CardBody>
      </Card>
    ))}
    </div>
  </div>
);

export default MoreResults;

//This will be mapped through when the result return for the hospitals
