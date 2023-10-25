import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
 
    const navigate = useNavigate();

    return (
  <div className="sidebar-container">
    <ul className='sidebar-content'>
        <li className="sidebar-item">
            <button type="button" className="btn btn-primary side-create-btn" onClick={() => navigate("/")}>Create Quiz</button>
        </li>
        <li className="sidebar-item">
            <button type="button" className="btn side-btn" onClick={() => navigate("/")}>Dashboard</button>
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