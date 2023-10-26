import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Sidebar() {
 
    const navigate = useNavigate();

    localStorage.setItem("questionCount", 0);
    localStorage.setItem('questionArray', JSON.stringify([]));

    localStorage.setItem("quizName", "");
    localStorage.setItem("quizCategory", "");
    localStorage.setItem("quizTime", "");

    const createQuiz = () => {
         navigate("/create-quiz");
    }
    

    return (
  <div className="sidebar-container">
    <ul className='sidebar-content'>
        <li className="sidebar-item">
            <Button type="button" className="btn btn-primary side-create-btn" onClick={createQuiz}>Create Quiz</Button>
        </li>
        <li className="sidebar-item">
            <button type="button" className="btn side-btn" onClick={() => navigate("/home")}>Dashboard</button>
        </li>
        <li className="sidebar-item">
            <button type="button" className="btn side-btn" onClick={() => navigate("/")}>Quiz Category</button>
        </li>
        <li className="sidebar-item">
        <   button type="button" className="btn side-btn" onClick={() => navigate("/")}>My Quiz</button>
        </li>
        <li className="sidebar-item">
            <button type="button" className="btn side-btn" onClick={() => navigate("/")}>Quiz History</button>
        </li>
        <li className="sidebar-item">
            <button type="button" className="btn side-btn" onClick={() => navigate("/")}>Edit Profile</button>
        </li>
    </ul>
    <div className='sidebar-image'>

    </div>
  </div>
    )
}