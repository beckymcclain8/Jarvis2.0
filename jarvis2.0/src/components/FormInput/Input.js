import React from "react";
import "./Input.css";
import "../../App.css";
import "../../index.css";

export const Input = props => (
  <div className="form-group">
    <input className="form-control" {...props} />
  </div>
);
