import React, { useState, useEffect } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Leaderboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const quizId = location.state.id;
  const quiz = location.state.quiz;
  const [scoreArray, setScoreArray] = useState([]);
  const [isResult, setIsResult] = useState(true);

  var num = 1;
  useEffect((async) => {
    if (num === 1) {
        getLeaderboard();
        console.log(quiz)
        //To deal with go back button
        if (localStorage.getItem("path") === "/result") {
            setIsResult(false);
        }
    }
    num++;
  }, []);

  const getLeaderboard = async () => {
    console.log(quizId);
    console.log(quiz);
    try {
      const res = await axios.get(
        "https://quiz-app-ieqe.onrender.com/leaderboard/" + quizId,
        {
          headers: {
            authorization: localStorage.getItem("token"), // Setting the 'Authorization' header with the token
          },
        }
      );

      //Remove duplicates if any and find User
      res.data = res.data.reduce((acc, current) => {
        const x = acc.find((item) => item.user_id === current.user_id);
        if (!x) {
          return acc.concat([current]);
        }
        return acc;
      }, []);
      console.log(res.data);
      setScoreArray(res.data);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="start-quiz-container">
      <div className="leaderboard-box">
        <div class="d-flex justify-content-center">
          <h3> Leaderboard</h3>
        </div>
        <h5
          style={{ textAlign: "left", marginTop: "20px", marginBottom: "20px" }}
        >
          Quiz Title : {quiz.Title}
        </h5>

        <hr />
        <div className="row quiz-header">
          <div className="col-3 lead-det">
            Quiz Category: {quiz.Category}
          </div>
          <div className="col-3 lead-det lead-ques">
            Total Questions: {quiz.Questions.length}
          </div>
          <div className="col-3 lead-det">
            Duration: {quiz.Timer.TimerDuration
              ? quiz.Timer.TimerDuration / 60 + " min"
              : "No time limit"}
          </div>
          <div className="col-3 lead-det lead-total">
            Total Score: {quiz.total_socre}
          </div>
        </div>

        <hr />

        <div className="ranks-board">
          <Row className="g-1 rank-row">
            <Col className="rank-col">Rank</Col>
            <Col className="username-col">Username</Col>
            <Col className="points-col">Points</Col>
          </Row>

          {scoreArray.map((data, idx) => (
            <Row
              key={idx}
              className="g-1"
              style={{
                borderTop: "2px solid #d9d9d9",
                padding: "10px",
                fontWeight:
                  data.user_id === localStorage.getItem("userId")
                    ? "bold"
                    : "normal",
              }}
            >
              <Col className="rank-col">{idx + 1}</Col>
              <Col className="username-col">
                <img alt="User" src="user1.png" width="30" height="30" />
                &nbsp;&nbsp;{data.firstName + " " + data.lastName}
                &nbsp;{" "}
                {data.user_id === localStorage.getItem("userId") ? "(me)" : ""}
              </Col>
              <Col className="points-col">
                {data.score}
              </Col>
            </Row>
          ))}
          <div
            class="d-flex justify-content-center"
            style={{ marginTop: "40px" }}
          >
            {isResult && (
              <Button
                variant="primary"
                className="btn"
                onClick={() => navigate(localStorage.getItem("path"))}
              >
                Go Back
              </Button>
            )}
            <Button
              variant="primary"
              className="btn"
              onClick={() => navigate("/home")}
            >
              Go To Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
