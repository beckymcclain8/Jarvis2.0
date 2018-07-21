import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import "./PatientResult.css";
import "../../App.css";
import "../../index.css";

const PatientResult = props => (
  <div className="list-group flex-container">
    {props.results.map(result => (
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
            <button onClick={() => props.revealTotalCost(props.driveCost)}>
              {" "}
              Reveal Total Cost: {props.totalCost}
            </button>
          </CardBody>
          <CardFooter>
            <button
              onClick={() => props.deleteHospital(result.provider_id)}
              id={result.provider_id}
            >
              Delete
            </button>
          </CardFooter>
        </Card>
      </div>
    ))}

    {/* <h4>Below are lower cost options if you choose to travel:</h4> */}
  </div>
);

export default PatientResult;
