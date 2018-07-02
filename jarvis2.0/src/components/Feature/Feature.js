import React from "react";
import { Link } from "react-router-dom";
import "./Feature.css"; 
import "../../App.css";
import "../../index.css";
// import Button from "../Button";
import Image from "../Image";

const Feature = props => (

    <div className = { props.className } {...props }>
      {" "}
      <Image src = { props.src } />
      <br />
      {/* <h4>{props.title}</h4> */}
      <Link to={props.link} className="feature-link">
      {props.title}
          </Link>
      {/* <Button title = { props.title } /> */}
    </div>
  );


export default Feature;


 