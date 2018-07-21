import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import "./Result.css";
import "../../App.css";
import "../../index.css";

const Result = props => (
  <div className="list-group" className="flex-container">
    {props.localResult.map(result => (
      // <h4>Below is your lowest cost local result:</h4>
      <div>
        <Card key={result.id}>
          <CardHeader>
            <h4> {result.provider_name} </h4>
          </CardHeader>
          <CardBody>
            {/* <h4> {result.provider_street_address} </h4> */}
            <h5>
              {" "}
              {result.provider_city}, {result.provider_state}{" "}
              {/* {result.provider_zip_code}{" "} */}
            </h5>
            <h5> Cost of Procedure: ${result.average_covered_charges} </h5>
            <h5> Driving Cost: ${props.driveCost} </h5>
            <br />
            {/* <hr /> */}
            <h4> Total Cost: {props.totalCost} </h4>
          </CardBody>
          <CardFooter>
            <button
              onClick={() => props.saveHospital(result.provider_id)}
              id={result.provider_id}
            >
              Save
            </button>
          </CardFooter>
        </Card>
      </div>
    ))}

    {/* <h4>Below are lower cost options if you choose to travel:</h4> */}

    {props.moreResults.map(result => (
      <div>
        <Card className="list-group-item" key={result.id}>
          <CardHeader>
            <h4>{result.provider_name}</h4>
          </CardHeader>
          <CardBody>
            {/* <h5> {result.provider_street_address} </h5> */}
            <h5>
              {" "}
              {result.provider_city}, {result.provider_state}{" "}
              {/* {result.provider_zip_code}{" "} */}
            </h5>
            <h5> Cost of Procedure: {result.average_covered_charges} </h5>
            <h5> Driving Cost: ${props.driveCost} </h5>
            <br />
            {/* <hr /> */}
            <h4> Total Cost: {props.totalCost} </h4>
          </CardBody>
          <CardFooter>
            <button
              onClick={() => props.saveHospital(result.provider_id)}
              id={result.provider_id}
            >
              Save
            </button>
          </CardFooter>
        </Card>
      </div>
    ))}
  </div>
);

export default Result;
