import React, { useState } from "react";
import { Questions } from "../QuizData/Questions";
import Result from "./Result";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setClickedOption(0);
    setCurrentQuestion(0);
    setScore(0);
  };

  const updateScore = () => {
    if (clickedOption === Questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <div className="heading">Welcome To My One-Piece Quiz App</div>
      <div className="information">
        Some quick information about this quiz- <br /> 1.Created on: July 8,2024{" "}
        <br />
        2.Category: <span className="tag">Anime</span>{" "}
        <span className="tag">One-Piece</span>{" "}
        <span className="tag">Manga</span> <br />
        3.Questions: 10 question <br />
        4.Language: English
      </div>
      <div className="container">
        <p className="heading-txt">One-Piece Quiz App</p>
        {showResult ? (
          <Result score={score} playAgain={resetAll} />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt">
                {Questions[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {Questions[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${
                      clickedOption === i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <button id="next-button" onClick={changeQuestion}>
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
