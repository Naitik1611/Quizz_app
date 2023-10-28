import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function StartQuiz() {
  const navigate = useNavigate();
  const location = useLocation();
  const quiz = location.state.quiz;
  const questions = location.state.questions;

  const [index, setIndex] = useState(0);

  var num = 1;
  useEffect((async) => {
    if (num === 1) {
      // playQuiz();
    }
    num++;
  }, []);

  const playQuiz = () => {
    console.log(index);
    if (index < questions.questions.length) {
      console.log(questions.questions[index])
      return quizBox(questions.questions[index]);
    } else {
      return result();
    }
  };

  const changeQuestion = () => {
    if (index < questions.questions.length) {
      setIndex(index + 1);
      playQuiz();
    }
  };

  const result = () => {
    return <div className="quiz-box">Result</div>;
  };

  const quizBox = (question) => {
    return (
      <div className="quiz-box">
        {quiz.Title}
        <div className="row">
        <div className="col">
          Progress bar
        </div>
        <div className="col">
          Question 1 of 10
        </div>
        <div className="col">
          Points
        </div>
        <div className="col">
          Timer
        </div>
      
  
      <hr />

      <div className="card">
      {question.Question_text}
      </div>

      {Array.from({ length: question.Options.length }, (_, i) => <span key={i}>

      <div className="card">
      {question.Options[i]}
      </div>
            </span>)}
    </div>
        <button type="button" className="btn btn-primary" onClick={() => changeQuestion()}> Next</button>
      </div>
    );
  };

  /*

const quizBox = () => (
    <div className="quiz-box">
     {quiz.Title}
      */
  return <div className="start-quiz-container">{playQuiz()}</div>;
}
