import React, { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Login() {
 
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      const loginData = {
        email,
        password,
      }

      try {
        const res = await axios.post('http://localhost:8080/api/auth',loginData)
        navigate("/home")
        console.log(res.data);
      } catch (e) {
        alert(e.message)
      }

    };


    // Routing
    //navigate("/register");
 
    return (
  <div className="login-container">
    <div className="details-container">
      <form title="Login" className="login-form" onSubmit={handleLogin}>
        <h3>Login</h3>
        <label htmlFor="email" className="inp-label">Email</label>
        <input type="email" id="email" className="inp inp-user" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required></input>

        <label htmlFor="password" className="inp-label">Password</label>
        <input type="password" id="password" className="inp inp-pass" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required></input>
        
        <button type="submit" className="btn btn-primary form-btn">Login</button>
      </form>
      <span className='toggle-login'>
      Dont have an account? <button type="button" className="btn btn-primary" onClick={() => navigate("/register")}> Sign Up</button>
      </span>
    </div>

    <div className="img-container">
      Random Stuff
    </div>

  </div>
    )
}