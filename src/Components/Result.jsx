import React from "react";

function Result(props) {
  return (
    <>
      <div className="show-score">
        Congrats 🎉 You Completed The Quiz <br /> No. of Correct Answer:{" "}
        {props.score}
        /10
      </div>
      ;
      <button className="button" onClick={props.playAgain}>
        Play Again
      </button>
    </>
  );
}

export default Result;
