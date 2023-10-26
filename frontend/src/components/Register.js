import React, { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
 
    const navigate = useNavigate();

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');

    
    const handleSignup = async (e) => {
      e.preventDefault();
      if (password === cnfPassword){
        const signupData = {
          "firstName": fname,
          "lastName": lname,
          "email": email,
          "password": password 
        };
        
        try {
          const res = await axios.post('http://localhost:8080/api/users/',signupData)
          navigate("/")
          console.log(res.data);
        } catch (e) {
          alert(e.message)
        }
      } else {
        alert("Passwords Dont Match")
      }

    };

    return (
      <div className="login-container">
        <div className='details-container'>
          <Form className="login-form" onSubmit={handleSignup}>
            <h3>Sign Up/Register</h3>

            <Form.Group className="mb-3" >
              <Form.Label htmlFor="fname" className="inp-label">First Name</Form.Label>
              <Form.Control type="text" id="fname" className="inp inp-user" placeholder='Enter First Name' onChange={(e) => setfname(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label htmlFor="lname" className="inp-label">Last Name</Form.Label>
              <Form.Control type="text" id="lname" className="inp inp-user" placeholder='Enter Last Name' onChange={(e) => setlname(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="email" className="inp-label">Email address</Form.Label>
              <Form.Control type="email" id="email" className="inp inp-user" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label htmlFor="password" className="inp-label">Password</Form.Label>
              <Form.Control type="password" id="password" className="inp inp-pass" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label htmlFor="cnf-password" className="inp-label">Password</Form.Label>
              <Form.Control type="password" id="cnf-password" className="inp inp-pass" placeholder='Confirm Password' onChange={(e) => setCnfPassword(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn btn-primary form-btn">
              Sign Up
            </Button>

            <Form.Group className='toggle-login'>
            Dont have an account? <Button type="button" className="btn btn-primary" onClick={() => navigate("/")}> Login</Button>
            </Form.Group>
          </Form>
        </div>
        
        <div className="img-container">
          Random Stuff
        </div>
      </div>


  // <div className='login-container'>
  //   <div className="details-container">
      
  //   <form title="Sign Up" className="login-form" onSubmit={handleSignup}>
  //       <h3>Sign Up</h3>
  //       <label htmlFor="fname" className="inp-label">First Name</label>
  //       <input type="text" id="fname" className="inp inp-user" placeholder='Enter First Name' onChange={(e) => setfname(e.target.value)} required></input>
        
  //       <label htmlFor="lname" className="inp-label">Last name</label>
  //       <input type="text" id="lname" className="inp inp-pass" placeholder='Enter Last Name' onChange={(e) => setlname(e.target.value)} required></input>

  //       <label htmlFor="email" className="inp-label">Email</label>
  //       <input type="email" id="email" className="inp inp-pass" placeholder='Enter Email Id' onChange={(e) => setEmail(e.target.value)} required></input>

  //       <label htmlFor="password" className="inp-label">Password</label>
  //       <input type="password" id="password" className="inp inp-pass" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required></input>

  //       <label htmlFor="cnfPassword" className="inp-label">Confirm Password</label>
  //       <input type="password" id="cnf-password" className="inp inp-pass" placeholder='Confirm Password' onChange={(e) => setCnfPassword(e.target.value)} required></input>

  //       <button type="submit" className="btn btn-primary form-btn">Create Account</button>
  //     </form>
  //      <span className='toggle-login'>
  //     Already have an account? <button type="button" className="btn btn-primary" onClick={() => navigate("/")}>Login</button>
      
  //     </span>
  //   </div>

  //   <div className="img-container">
  //     Random Stuff
  //   </div>

  // </div>
    )
}