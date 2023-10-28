import React, { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

      const storeToken = (token) => {
        localStorage.setItem("token", token.data);
      };

      try {
        const res = await axios.post('http://localhost:8080/api/auth',loginData)
        storeToken(res.data);
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
        <div className='details-container'>
          <Form className="login-form" onSubmit={handleLogin}>
            <h3>Login</h3>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="inp-label">Email address</Form.Label>
              <Form.Control type="email" className="inp inp-user" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} autoComplete='email' required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="inp-label">Password</Form.Label>
              <Form.Control type="password" className="inp inp-pass" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn form-btn">
              Login
            </Button>

            <Form.Group className='toggle-login'>
                Dont have an account?{' '}<Button variant='primary' className="btn" onClick={() => navigate("/register")}> Sign Up</Button>
            </Form.Group>
          </Form>
        </div>
        
        <div className="img-container">
          Random Stuff
        </div>
      </div>

    )
}