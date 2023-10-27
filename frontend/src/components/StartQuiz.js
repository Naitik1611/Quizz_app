import React, { useState, useEffect } from 'react'
import './style.css'
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

export default function StartQuiz() {
 
    const navigate = useNavigate();
    const location = useLocation();
  const quiz = location.state.quiz;
  console.log(quiz.Questions);
/*
    var num = 1
    useEffect((async) => {
        if (num===1) {
          
            }
            num++;
}, []);
*/

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
      {quiz.Questions[0]}
      </div>
    </div>
  );
  

    return (
      <div className="start-quiz-container">
           {quizBox()}
      </div>
    )
}