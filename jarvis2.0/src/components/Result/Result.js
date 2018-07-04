import React from "react";
import SubmitBtn from "../SubmitBtn";
import "./Result.css";
import "../../App.css";
import "../../index.css";

const Result = props => (
 
    <div className={props.className} {...props}>
      <h1> {props.hospital} </h1>
      <h3> {props.address} </h3>
      <h3> {props.city} </h3>
      <h2> Distance: {props.distance} </h2>
      <h2> Cost of Procedure: {props.procedureCost} </h2>
      <h2> Driving Cost: {props.driveCost} </h2>
      <h1> Total Cost: {props.totalCost} </h1>

      {/* <SubmitBtn> {props.title} </SubmitBtn> */}
    </div>

);

export default Result;

//This will be mapped through when the result return for the hospitals
