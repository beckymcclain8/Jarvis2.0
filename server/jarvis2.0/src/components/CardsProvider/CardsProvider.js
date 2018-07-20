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
      <h3> { props.doctor } </h3>
      <h3> { props.address } </h3>
      <h3> { props.cityState } </h3>

    </CardBody>
    {/* <CardFooter>
        Save Button
    </CardFooter> */}
  </Card>
);

export default CardsProvider;