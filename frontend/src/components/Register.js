import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";

export default function Register() {
 
    const navigate = useNavigate();

    return (
  <div>
    Register works!
<button type="button" className="btn btn-primary" onClick={() => navigate("/")}> Login</button>
  </div>
    )
}