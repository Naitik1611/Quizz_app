import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function StartQuizWithTimeLimit() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  const quiz = location.state.quiz;
  const questions = location.state.questions;

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [fib, setFib] = useState('');

  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
      const countdown = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(prevTime => prevTime - 1);
        } else {
          clearInterval(countdown);
          setIndex(questions.questions.length + 1);
          playQuiz();
        }
      }, 1000);
  
      return () => clearInterval(countdown); // Cleanup the interval on unmount or re-render
  }, [timeLeft]);

  const playQuiz = () => {
    console.log(index);
    
    if (index < questions.questions.length) {
      console.log((index+1)/questions.questions.length*100);
      return QuizBox(questions.questions[index]);
    } else {
      console.log("Score "+score)

      questions.questions.forEach((item, index) => {
        if (!item.hasOwnProperty('Answer')) {
          item['Answer'] = "NA"; // Add 'Answer' property with value null
        }
      });
      
      navigate("/result", {state : {id, quiz, questions, correctAnswers, score}});
    }
  };

  const changeQuestion = () => {
    if (index < questions.questions.length) {
      console.log(questions)
      setIndex(index + 1);
      playQuiz();
    }
  };

  const checkAnswer = (ans) => {
    console.log(ans);
    if (ans !== ""){
    var element = document.getElementById(ans);

    if(ans.toLowerCase() ===  questions.questions[index].Correct_answer.toLowerCase()){
      changeColor(element, "green");
      setCorrectAnswers(correctAnswers+1);
      setScore(score + questions.questions[index].Score);
    }
    else{
      changeColor(element, "red");
    }

    questions.questions[index].Answer = ans;
    (console.log(questions.questions[index]['Answer']))
    setTimeout(function() {
      element.style.backgroundColor = "white";
      element.style.color = "black";
      setFib('');
      changeQuestion();
    }, 1000);

  }else{
    changeQuestion();
  }
  };

  const changeColor = (element, color) => {
    element.style.backgroundColor = color;
    element.style.color = "white";
  }

  const QuizBox = ( question ) => {
    
    return (
      <div className="quiz-box">

      <div className="row">
        <div className="col-4 quiz-title-box">
          <h3>
            {quiz.Title}
          </h3>
        </div>
        <div className="col-4 overall-timer">
        <div id="countdown-4">
        Timer: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' + (timeLeft % 60) : timeLeft % 60}
        </div>
        </div>
        <div className="col-4 end-test-col">
        <button type="button" className="btn btn-primary" onClick={() => setIndex(questions.questions.length)}> End Quiz</button>
        </div>
      </div>

      <div className="row detail-row">
        <div className="col-4 progress-col">
          Completed
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: ((index)/questions.questions.length)*100+"%" }} aria-valuenow={index} aria-valuemin="0" aria-valuemax={questions.questions.length}></div>
          </div>
        </div>
        <div className="col-4">
          Question: {index+1} of {questions.questions.length}
        </div>
        <div className="col-4">
          Points: {question.Score}
        </div>
      </div>

      <hr />

      <div className="card attempt-card">
        <div className="form-label card-title">
          <h4>
            {question.Question_text}  
          </h4>
        </div>

        <div className="card-body">
          { question.Question_type === 1 && Array.from({ length: question.Options.length }, (_, i) => <span key={i}>
            <div className="card true-card" id={question.Options[i]} onClick={() => checkAnswer(question.Options[i])}>
            {question.Options[i]}
            </div>
          </span>)}

          { question.Question_type=== 2 && <>
            <div className="row">
              <div className="card true-card" id="true" onClick={() => checkAnswer("true")}>
              True
              </div> 
              <div className="card true-card" id="false" onClick={() => checkAnswer("false")}>
              False
              </div> 
            </div>
          </>
          }

          { question.Question_type === 3 && <>
            <input type="text" id={fib} value={fib} className="form-control input-box" placeholder="Enter answer here..." style={{marginTop:"10px"}} onChange={(e) => setFib(e.target.value)} required></input>
            <button type="button" className="btn btn-primary" onClick={() => checkAnswer(fib)}> Next</button>
            </>
          }

        </div>
      </div>
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
