import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Navbar() {
 
    const navigate = useNavigate();

    return (
    <NavBar className="website-navbar">
        
            <NavBar.Brand href="#home" className='app-detail' onClick={() => navigate('/home')} style={{color:"white"}}>
                <img alt="Logo" src="logo.jpg" width="120" height="60" className="app-logo"/>{' '}
                Quiz App
            </NavBar.Brand>
            <NavBar.Toggle />
            <NavBar.Collapse className="justify-content-end">
                <NavBar.Text className='nav-user'>
                    <img alt="User" src="user1.png" width="40" height="40"/>{' '}
                    User Name
                </NavBar.Text>
                <Button variant="danger" className="btn lgt-btn" onClick={() => navigate("/")}>Logout</Button>
                <Button variant='primary' className="btn ctc-btn" onClick={() => navigate("/")}>Contact Us</Button>
            </NavBar.Collapse>
       
    </NavBar>
    )
}