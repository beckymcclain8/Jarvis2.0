import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import SubmitBtn from "../SubmitBtn";
import "../../App.css";
import "../../index.css";

const CardsProvider = props => (
<Card className = {props.className}>
    <CardHeader> 
      <h2> { props.genre } </h2>
    </CardHeader>
    <CardBody>
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

export default CardsProvider;