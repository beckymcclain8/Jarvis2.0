import React from "react";
import SubmitBtn from "../SubmitBtn";
import "./Result.css";
import "../../App.css";
import "../../index.css";

const Result = props => (
 
    <div className={props.className} {...props}>
      <h2> {props.hospital} </h2>
      <h4> {props.address} </h4>
      <h4> {props.city} </h4>
      <h4> Distance: {props.distance} </h4>
      <h4> Cost of Procedure: {props.procedureCost} </h4>
      <h4> Driving Cost: {props.driveCost} </h4>
      <h2> Total Cost: {props.totalCost} </h2>

      {/* <SubmitBtn> {props.title} </SubmitBtn> */}
    </div>

);

export default Result;

//This will be mapped through when the result return for the hospitals
