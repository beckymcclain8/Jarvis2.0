import React from "react";
import { Link } from "react-router-dom";
import "./Feature.css";
import "../../App.css";
import "../../index.css";
import Image from "../Image";

const Feature = props => (
  <div className={props.className} {...props}>
    {" "}
    <Image src={props.src} />
    <br />
    <Link to={props.link} className="feature-link">
      {props.title}
    </Link>
  </div>
);

export default Feature;
