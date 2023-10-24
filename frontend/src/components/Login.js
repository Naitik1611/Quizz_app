import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";

export default function Login() {
 
    const navigate = useNavigate();
   
    // Routing
    //navigate("/register");
 

    return (
  <div>
    Login works!
    <button type="button" className="btn btn-primary" onClick={() => navigate("/register")}> Sign Up</button>
   
  </div>
    )
}