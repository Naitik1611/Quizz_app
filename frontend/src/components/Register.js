import React, { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Register() {
 
    const navigate = useNavigate();

    const [fname, setfname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lname, setlname] = useState('');


    const handleSignup = async (e) => {
      e.preventDefault();
      const signupData = {
        "firstName" : fname,
        "lastName": lname,
        "email" : email,
        "password": password 
      };
      
      try {
        const res = await axios.post('http://localhost:8080/api/users/',signupData)
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
        <label htmlFor="fname" className="inp-label">First Name</label>
        <input type="text" id="fname" className="inp inp-user" placeholder='Enter First Name' onChange={(e) => setfname(e.target.value)} required></input>
        
        <label htmlFor="lname" className="inp-label">Last name</label>
        <input type="text" id="lname" className="inp inp-pass" placeholder='Enter Last Name' onChange={(e) => setlname(e.target.value)} required></input>

        <label htmlFor="email" className="inp-label">Email</label>
        <input type="email" id="email" className="inp inp-pass" placeholder='Enter Email Id' onChange={(e) => setEmail(e.target.value)} required></input>
<label htmlFor="password" className="inp-label">Password</label>
        <input type="password" id="password" className="inp inp-pass" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required></input>
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