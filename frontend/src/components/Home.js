import React from 'react'
import './style.css'
// import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
 
    // const navigate = useNavigate();

    return (
    <div className="main-container">
        <Form className="home-search">
            <Form.Group className="mb-3" controlId="search-box">
                <Form.Control type='text' className='search-box' placeholder='Search for quizzes on any topic'/>
            </Form.Group>
        </Form>

        <div className='home-categories-container'>
            <Row className='home-head'>
                <Col md={1} className='home-categories-label'>Categories</Col>
                <Col md={{span:2, offset:8}}>
                    <Button variant="primary" className="btn">See More</Button>
                </Col>
            </Row>
            <div className='home-items'>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Category Name</Card.Title>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>

        <div className='home-recommended-container'>
            <Row className='home-head'>
                <Col md={3} className='home-recommended-label'>Recommended for you</Col>
                <Col md={{span:2, offset:6}}>
                    <Button variant="primary" className="btn">See More</Button>
                </Col>
            </Row>
            <div className='home-items'>
                <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Recommended Quiz</Card.Title>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    </div>
    )
}