import React from "react";
import Rating from "react-rating";
import "./StarVote.css";
import "../../App.css";
import "../../index.css";

const StarVote = props => {
  return (
    <div className={props.className}>
      <h2>How did you like Jarvis? </h2>
      <Rating
        emptySymbol={
          <img alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2000px-Five-pointed_star.svg.png"
            className="icon"
          />
        }
        fullSymbol={
          <img alt=""
            src="http://wallpaperen.com/wp-content/uploads/2018/01/best-star-without-background-star-transparent-background-star-without-background.png"
            className="icon"
          />
        }
      />
    </div>
  );
};

export default StarVote;
