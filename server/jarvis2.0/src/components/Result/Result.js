import React from "react";
import SubmitBtn from "../SubmitBtn";
import "./Result.css";
import "../../App.css";
import "../../index.css";

const Result = props => (
 
    <div className={props.className} {...props}>
      <h2> {props.hospital} </h2>
      <h2> {props.address} </h2>
      <h2> {props.city} </h2>
      <h3> Distance: {props.distance} </h3>
      <h3> Cost of Procedure: {props.procedureCost} </h3>
      <h3> Driving Cost: {props.driveCost} </h3>
      <h2> Total Cost: {props.totalCost} </h2>

      {/* <SubmitBtn> {props.title} </SubmitBtn> */}
    </div>

);

export default Result;

//This will be mapped through when the result return for the hospitals
