import React, { useState, useEffect} from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
 
    const navigate = useNavigate();
    const [quizArray, setquizArray] = useState([]);
    const [recommendedArray, setrecommendedArray] = useState([]);

    var num = 1
    useEffect((async) => {
        if (num===1) {
            getQuiz();
            getRecommended();
            num++;
        }
        
    }, []);

    const getQuiz = async (e) => {
        try {
            const res = await axios.get('http://localhost:8080/quiz',{
                headers: {
                    'authorization': localStorage.getItem("token") // Setting the 'Authorization' header with the token
                }
            });
            setquizArray(res.data);
        } catch (e) {
            alert(e.message)
        }
    };

    const getRecommended = async (e) => {
        try {
            const res = await axios.get('http://localhost:8080/quiz',{
                headers: {
                    'authorization': localStorage.getItem("token") // Setting the 'Authorization' header with the token
                }
            });
            setrecommendedArray(res.data);
        } catch (e) {
            alert(e.message)
        }
    };

    return (
    <div className="main-container">
        <Form className="home-search">
            <Form.Group className="mb-3" controlId="search-box">
                <Form.Control type='text' className='search-box' placeholder='Search for quizzes on any topic'/>
            </Form.Group>
        </Form>

        <div className='home-categories-container'>
            <Row className='home-head'>
                <Col md={3} className='home-categories-label'>Latest Quizzes</Col>
                <Col md={{span:2, offset:6}}>
                    <Button variant="primary" className="btn" onClick={() => navigate("/quiz-category")}>See More</Button>
                </Col>
            </Row>
            <div className='home-items'>
                <Row xs={1} md={4} className="g-4">
                    {quizArray.slice(0,4).map((quiz) => (
                        <Col key={quiz._id}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>{ quiz.Title }</Card.Title>
                                <Card.Text>Category: {quiz.Category}</Card.Text>
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
            </Row>
            <div className='home-items'>
                <Row xs={1} md={4} className="g-4">
                    {recommendedArray.slice(4,8).map((quiz) => (
                        <Col key={quiz._id}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>{ quiz.Title }</Card.Title>
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