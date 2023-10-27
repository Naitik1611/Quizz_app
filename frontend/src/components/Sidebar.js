import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            <Button variant="none" className="btn" onClick={() => navigate("/home")}>Dashboard</Button>
        </li>
        <li className="sidebar-item">
            <Button variant="none" className="btn" onClick={() => navigate("/quiz-category")}>Quiz Category</Button>
        </li>
        <li className="sidebar-item">
            <Button variant="none" className="btn" onClick={() => navigate("/my-quiz")}>My Quiz</Button>
        </li>
        <li className="sidebar-item">
            <Button variant="none" className="btn" onClick={() => navigate("/quiz-history")}>Quiz History</Button>
        </li>
        <li className="sidebar-item">
            <Button variant="none" className="btn" onClick={() => navigate("/")}>Edit Profile</Button>
        </li>
        <Card className='sidebar-image'>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Sidebar</Card.Title>
            </Card.Body>
        </Card>
    </ul>
  </div>
    )
}