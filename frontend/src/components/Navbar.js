import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Navbar() {
 
    const navigate = useNavigate();

    return (
    <NavBar className="navbar-container">
        <Container>
            <NavBar.Brand href="#home" className='app-detail' onClick={() => navigate('/home')}>
                <img alt="Logo" src="/img/logo.svg" width="30" height="30" className="app-logo"/>{' '}
                App Name
            </NavBar.Brand>
            <NavBar.Toggle />
            <NavBar.Collapse className="justify-content-end">
                <NavBar.Text className='nav-user'>
                    <img alt="User" src="/img/logo.svg" width="30" height="30" className="nav-user-profile"/>{' '}
                    User Name
                </NavBar.Text>
                <Button variant="danger" className="btn nav-btn" onClick={() => navigate("/")}>Logout</Button>
                <Button variant='primary' className="btn nav-btn" onClick={() => navigate("/")}>Contact Us</Button>
            </NavBar.Collapse>
        </Container>
    </NavBar>
    )
}