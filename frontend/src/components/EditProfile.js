import React, { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function EditProfile() {
 
    const navigate = useNavigate();
    
    const [profilePic, setProfilePic] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const id = 1;

    const handleEditProfile = async (e) => {
        e.preventDefault();
          const editData = {
            "firstName": fname,
            "lastName": lname,
          };
          console.log(editData);
          
          try {
            const res = await axios.put('http://localhost:8080/api/users/update/'+id,editData, {
              headers: {
                  'authorization': localStorage.getItem("token") // Setting the 'Authorization' header with the token
              }
          })
            navigate("/home")
            console.log(res.data);
          } catch (e) {
            alert(e.message)
          }
  
      };

    return (
      <div className="main-container">
          <Form className="login-form" onSubmit={handleEditProfile}>
            <h3>Edit Profile</h3>

            <Form.Group className="mb-3" controlId="profile-pic">
              <Form.Label className="inp-label">Profile Photo</Form.Label>
              <Form.Control type="file" className="inp inp-user" placeholder='Enter First Name' onChange={(e) => setProfilePic(e.target.value)} accept='.png, .jpg' />
            </Form.Group>

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
              <Form.Control type="email" className="inp inp-user" placeholder='Enter Email' disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="inp-label">Password</Form.Label>
              <Form.Control type="password" className="inp inp-pass" placeholder='Enter Password' disabled />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn form-btn">
              Edit
            </Button>

          </Form>
      </div>
    )
}