import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import "./Result.css";
import "../../App.css";
import "../../index.css";

// saveHospital = (result) => {

// }

var cardStyle = {
  width: "25%",
  display: "inline-block"
  // gridColumn: "5/7",
  // gridRow: "2/4"
  // gridArea: "2/5/4/7",
  // margin: "5px"
};

var moreCards = {
  width: "33%",
  // gridArea: "2/8/10/12",
  // float: "right",
  display: "inline-block"
};

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
  <div style={cardStyle}>
    <div className={props.className}>
      <Card key={props.id}>
        <CardHeader>
          <h3> {props.provider_name} </h3>
        </CardHeader>
        <CardBody>
          <h4> {props.provider_street_address} </h4>
          <h4>
            {" "}
            {props.provider_city}, {props.provider_state}{" "}
            {props.provider_zip_code}{" "}
          </h4>
          <h4> Cost of Procedure: ${props.average_covered_charges} </h4>
          <h4> Driving Cost: ${props.driveCost} </h4>
          <br />
          <hr />
          <h2> Total Cost: {props.totalCost} </h2>
        </CardBody>
        <CardFooter>
          <button onClick={() => props.saveHospital(props.id)}>Save</button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

export default Result;

//This will be mapped through when the result return for the hospitals
