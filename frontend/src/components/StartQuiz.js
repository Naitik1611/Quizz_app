import React, { useState, useEffect } from 'react'
import './style.css'
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

export default function StartQuiz() {
 
    const navigate = useNavigate();
    const location = useLocation();
    const quiz = location.state.quiz;
    const questions = location.state.questions;
  

    var num = 1
    useEffect((async) => {
        if (num===1) {
          playQuiz();
            }
            num++;
}, []);

const playQuiz = () => {
    var i = 0;
  
    while(i === 0){
      console.log(questions.questions[i].Question_text);

      if(i===0){
        document.getElementById("question").innerHTML = quizBox;
      }
      i++;
    }
  
}

const quizBox = () => (
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
      </div>
  
      <hr />

      <div className="card">
      {questions.questions[0].Question_text}
      </div>

      {Array.from({ length: questions.questions[0].Options.length }, (_, i) => <span key={i}>

      <div className="card">
      {questions.questions[0].Options[i]}
      </div>
            </span>)}
    </div>
  );
  

    return (
      <div className="start-quiz-container">
        <div id="question"></div>
           
      </div>
    )
}