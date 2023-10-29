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
  const [score, setScore] = useState(0);
  const [fib, setFib] = useState('');

  const [timeLeft, setTimeLeft] = useState(5);

  const changeQuestion = () => {
    if (index < questions.questions.length) {
      console.log(questions)
      setIndex(index + 1);
      playQuiz();
    }
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prevTime => prevTime - 1);
      } else {
        clearInterval(countdown);
        changeQuestion();
        setTimeLeft(5); // Reset the timer to 5 seconds for the next question
      }
    }, 1000);

    return () => clearInterval(countdown);
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
          item['Answer'] = null; // Add 'Answer' property with value null
        }
      });
      return result();
    }
  };

  

  const checkAnswer = (ans) => {
    console.log(ans);
    if (ans !== ""){
    var element = document.getElementById(ans);

    if(ans.toLowerCase() ===  questions.questions[index].Correct_answer.toLowerCase()){
      changeColor(element, "green");
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
    }, 2000);

  }else{
    changeQuestion();
  }
  };

  const changeColor = (element, color) => {
    element.style.backgroundColor = color;
    element.style.color = "white";
  }

  const result = () => {
    return <div className="quiz-box">Result</div>;
  };

  const QuizBox = ( question) => {
   
    return (
      <div className="quiz-box">
        {quiz.Title}
        <div className="row">
        <div className="col">
          Completed
        <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: ((index)/questions.questions.length)*100+"%" }} aria-valuenow={index} aria-valuemin="0" aria-valuemax={questions.questions.length}></div>
</div>
        </div>
        <div className="col">
          Question {index+1} of {questions.questions.length}
        </div>
        <div className="col">
          Points: {question.Score}
        </div>
        <div className="col">
      
        <div id="countdown">
        Timer: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' + (timeLeft % 60) : timeLeft % 60}

        </div>
        </div>

        </div>

  
      <hr />

      <div className="card">
      {question.Question_text}
      Time Left: 
      <div id="qt"></div>
      </div>

      { question.Question_type === 1 && Array.from({ length: question.Options.length }, (_, i) => <span key={i}>

      <div className="card" id={question.Options[i]} onClick={() => checkAnswer(question.Options[i])}>
      {question.Options[i]}
      </div>
            </span>)}

      { question.Question_type=== 2 && <>
      <div className="card" id="true" onClick={() => checkAnswer("true")}>
      True
      </div> 
      <div className="card" id="false" onClick={() => checkAnswer("false")}>
      False
      </div> 
      </>
      }

{ question.Question_type === 3 && <>
      <div className="card" id="true">
      <input type="text" id={fib} value={fib} className="input-box" placeholder="Enter answer here..." style={{marginTop:"10px"}} onChange={(e) => setFib(e.target.value)} required></input>
      </div> 
      <button type="button" className="btn btn-primary" onClick={() => checkAnswer(fib)}> Next</button>
      </>
      }

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
