import React, { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Register() {
 
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');

    const handleSignup = async (e) => {
      e.preventDefault();
      const signupData = {
        username,
        email,
        password,
        cnfPassword
      };
      
      try {
        const res = await axios.post('http://localhost:xxxx/',signupData)
        console.log(res.data);
      } catch (e) {
        alert(e.message)
      }

    };

    return (
  <div className='login-container'>
    <div className="details-container">
      <form title="Sign Up" className="login-form" onSubmit={handleSignup}>
        <h3>Sign Up</h3>
        <label htmlFor="username" className="inp-label">Username</label>
        <input type="text" id="username" className="inp inp-user" placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} required></input>

        <label htmlFor="email" className="inp-label">Email</label>
        <input type="email" id="email" className="inp inp-pass" placeholder='Enter Email Id' onChange={(e) => setEmail(e.target.value)} required></input>

        <label htmlFor="password" className="inp-label">Password</label>
        <input type="password" id="password" className="inp inp-pass" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required></input>
        
        <label htmlFor="cnf-password" className="inp-label">Confirm Password</label>
        <input type="password" id="cnf-password" className="inp inp-pass" placeholder='Confirm Password' onChange={(e) => setCnfPassword(e.target.value)} required></input>
        
        <button type="submit" className="btn btn-primary form-btn">Create Account</button>
      </form>
      <span className='toggle-login'>
      Already have an account? <button type="button" className="btn btn-primary" onClick={() => navigate("/")}>Login</button>
      </span>
    </div>

    <div className="img-container">
      Random Stuff
    </div>

  </div>
    )
}