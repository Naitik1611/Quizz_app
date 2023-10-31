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
          <h2 className="res-name">
            Quiz Result
          </h2>
          <br/>
          <div className="row">
            <div className="col-4">
              <div className="card res-det">
                  Total Questions:
                  <br />
                  {questions.questions.length}
              </div>
            </div>

            <div className="col-4">
               <div className="card res-det">
                Total Correct Answers:
                <br />
                {correctAnswers}
              </div>
            </div>

            <div className="col-4">
            <div className="card res-det">
                Your Points:
                <br />
                {score} / {maxScore}
                </div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-12">
              <div className="card score-disp">
                  <h4>
                    Your Score
                  </h4>
                <br />
                  <h2>
                    {Math.ceil((score/maxScore) * 100)}%
                  </h2>
              </div>
            </div>
          </div>
          <br />
          <div className="res-page-btn">
            <button type="button" className="btn btn-info review-btn" onClick={() => navigate('/home')}> View Leaderboard </button>
            <button type="button" className="btn btn-secondary review-btn" onClick={() => navigate('/home')}> Review Quiz </button>
            <button type="button" className="btn btn-warning review-btn" onClick={() => navigate('/home')}> Go to Dashboard</button>
          </div>
         </div>
  </div>)
}
