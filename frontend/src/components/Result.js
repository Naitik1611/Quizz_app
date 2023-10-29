import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  const quiz = location.state.quiz;
  const questions = location.state.questions;
  const correctAnswers = location.state.correctAnswers;
  const score = location.state.score;


  var num = 1
    useEffect((async) => {
        if (num===1) {
           submitQuiz();
            }
            num++;
    }, []);

    const submitQuiz = async () => {

      const answers = questions.questions.map(question => {
        console.log(question);
        return {
            Question_id: question['_id'],
            Answer: question['Answer']
        };
    });
  
      const quizAnswers = {
          "userId": "6538f646a0e1b8b5da91744c",
          "answers": answers
      }
  
      console.log(answers);
      console.log(quizAnswers);
  
      try {    
          const res = await axios.post('http://localhost:8080/attempt_quiz/'+id, quizAnswers, {
              headers: {
                  'authorization': localStorage.getItem("token") // Setting the 'Authorization' header with the token
              }
          });
          console.log(res.data);

   
      } catch (e) {
          alert(e.message)
      }
  }
  

  const maxScore = questions.questions.reduce((accumulator, currentQuestion) => {
    return accumulator + currentQuestion['Score'];
}, 0);
 
  
  return (<div className="start-quiz-container">
         <div className="quiz-box">
          Quiz Result
          <div className="row">
            <div className="col">
              <div className="card">
                  Total Questions
                  <br />
                  {questions.questions.length}
              </div>
            </div>

            <div className="col">
               <div className="card">
                Total Correct Answers
                <br />
                {correctAnswers}
              </div>
            </div>

            <div className="col">
            <div className="card">
                Your Points
                <br />
                {score} / {maxScore}
                </div>
            </div>
          </div>

          <div className="row">
            <div className="card">
              Your Score
              <br />
              {Math.ceil((score/maxScore) * 100)}%
            </div>
          </div>

          <button type="button" className="btn btn-primary" onClick={() => navigate('')}> Review Quiz </button>
          <button type="button" className="btn btn-primary" onClick={() => navigate('')}> View Leaderboard </button>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/home')}> Go to Dashboard</button>
         </div>
  </div>)
}
