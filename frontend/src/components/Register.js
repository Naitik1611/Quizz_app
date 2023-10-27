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

            <Form.Group className="mb-3" controlId="fname">
              <Form.Label className="inp-label">First Name</Form.Label>
              <Form.Control type="text" className="inp inp-user" placeholder='Enter First Name' onChange={(e) => setfname(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lname">
              <Form.Label className="inp-label">Last Name</Form.Label>
              <Form.Control type="text" className="inp inp-user" placeholder='Enter Last Name' onChange={(e) => setlname(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="inp-label">Email address</Form.Label>
              <Form.Control type="email" className="inp inp-user" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} autoComplete='off' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="inp-label">Password</Form.Label>
              <Form.Control type="password" className="inp inp-pass" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cnf-password">
              <Form.Label className="inp-label">Password</Form.Label>
              <Form.Control type="password" className="inp inp-pass" placeholder='Confirm Password' onChange={(e) => setCnfPassword(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn form-btn">
              Sign Up
            </Button>

            <Form.Group className='toggle-login'>
              Dont have an account?{" "}<Button variant='primary' className="btn" onClick={() => navigate("/")}> Login</Button>
            </Form.Group>
          </Form>
        </div>
        
        <div className="img-container">
          Random Stuff
        </div>
      </div>

    )
}