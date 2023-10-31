import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Leaderboard() {
 
    const navigate = useNavigate();

    return (
        
        <div className='quiz-leaderboard'>
            <div className='details-quiz'>
                <Row>
                    <Col md={2}>Quiz Name</Col>
                    <Col md={2}>Quiz Category</Col>
                    <Col md={{span:2, offset:1}}>Total Questions: xx</Col>
                    <Col md={2}>Duration: xx</Col>
                    <Col md={2}>Total Score:</Col>
                </Row>
            </div>

            <div className='ranks-board'>
                <Row className="g-1">
                    <Col md={{span: 1, offset: 1}}>Rank</Col>
                    <Col md={{span: 3, offset: 2}}>
                        Username
                    </Col>
                    <Col md={{span:2, offset: 2}}>Points</Col>
                </Row>
                <Row className="g-1">
                    <Col md={{span: 1, offset: 1}}>My Rank</Col>
                    <Col md={{span: 3, offset: 2}}>
                        My Username
                    </Col>
                    <Col md={{span:2, offset: 2}}>My Points</Col>
                </Row>
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Row key={idx} className="g-1">
                        <Col md={{span: 1, offset: 1}}>{idx+1}</Col>
                        <Col md={{span: 3, offset: 2}}>
                            <img alt="User" src="/img/logo.svg" width="20" height="20" className="nav-user-profile" />{' '}User Name
                        </Col>
                        <Col md={{span:2, offset: 2}}>Points</Col>
                    </Row>
                ))}
                <Button variant="primary" className='btn' onClick={() => navigate('/home')}>
                    Go To Dashboard
                </Button>
            </div>
        </div>

    )
}