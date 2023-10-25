import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
 
    const navigate = useNavigate();

    return (
  <div className="navbar-container">
    <div className="navbar-app">
        <span className='app-logo'>App Logo</span>
        <span className='app-name'>AppName</span>
    </div>
    <div className='navbar-right'>
      <div className='nav-user'>
        <span className='nav-user-profile'>User Profile</span>
        <span className='nav-username'>Username</span>
      </div>
      <div className='nav-buttons'>
        <button type="button" className="btn btn-primary nav-btn" onClick={() => navigate("/")}>Logout</button>
        <button type="button" className="btn btn-primary nav-btn" onClick={() => navigate("/")}>Contact Us</button>
      </div>
    </div>
  </div>
    )
}