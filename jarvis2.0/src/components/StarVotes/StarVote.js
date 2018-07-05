import React from "react";
import "./StarVote.css";
import "../../App.css";
import "../../index.css";

const StarVote = props => {

  return <div className={props.className}> 
  <h2>How did you like Jarvis? </h2>
  {/* <h6>Please rate our app</h6> */}
  <img src="http://via.placeholder.com/50x50" className="img" />
  </div>
};

export default StarVote;
