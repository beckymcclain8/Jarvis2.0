import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import SubmitBtn from "../SubmitBtn";
import "../../App.css";
import "../../index.css";

const Cards = props => (
<Card className = {props.className}>
    <CardHeader> 
        <h2> { props.hospital } </h2>
        <h2> { props.genre } </h2>
    </CardHeader>
    <CardBody>
        {/* patient page info */}
      {/* <h4> {props.address} </h4> */}
      <h4> { props.city } </h4>
      <h4> Distance: { props.distance } </h4>
      <h4> Cost of Procedure: {props.procedureCost } </h4>
      <h4> Driving Cost: { props.driveCost } </h4>
      <h2> Total Cost: { props.totalCost } </h2>

      {/* provider page info */}
      <h4> { props.doctor } </h4>
      <h4> { props.address } </h4>
      <h4> { props.rating } </h4>

    </CardBody>
    <CardFooter>
        Save Button
        {/* <SubmitBtn> {props.title} </SubmitBtn> */}
    </CardFooter>
  </Card>
);

export default Cards;