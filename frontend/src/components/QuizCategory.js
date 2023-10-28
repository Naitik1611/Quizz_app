import React, { useState, useEffect } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function QuizCategory() {
    
    const navigate = useNavigate();
    const [filterModal, setFilterModal] = useState(false);
    const [startModal, setStartModal] = useState(false);

    const [filterCategory, setfilterCategory] = useState('');

    const [quizArray, setquizArray] = useState([]);

    var num = 1
    useEffect((async) => {
        if (num===1) {
           getQuiz();
            }
            num++;
    }, []);

    const getQuiz = async (e) => {
        try {
            if(!filterCategory) {
                const res = await axios.get('http://localhost:8080/quiz/',{
                    headers: {
                        'authorization': localStorage.getItem("token") // Setting the 'Authorization' header with the token
                    }
                });
                setquizArray(res.data);
            } else {
                const res = await axios.get('http://localhost:8080/filter/'+filterCategory, {
                    headers: {
                        'authorization': localStorage.getItem("token") // Setting the 'Authorization' header with the token
                    }
                });
                setquizArray(res.data);
            }
            
        } catch (e) {
            alert(e.message)
        }
    };

    const startQuiz = async (id) => {
        try {    
            const res = await axios.get('http://localhost:8080/quiz/byId/'+id, {
                headers: {
                    'authorization': localStorage.getItem("token") // Setting the 'Authorization' header with the token
                }
            });
            const quiz = res.data;

            const questionRes = await axios.get('http://localhost:8080/attempt_quiz/'+id, {
                headers: {
                    'authorization': localStorage.getItem("token") // Setting the 'Authorization' header with the token
                }
            });
            const questions = questionRes.data;
            console.log(questions)

            navigate("/start-quiz", {state : {quiz, questions}});
        } catch (e) {
            alert(e.message)
        }
    }

    const filterQuiz = async (e) => {
        e.preventDefault();
        getQuiz()
        setFilterModal(false);
    }

    return (
        <div className="main-container">
            <Row className='quiz-category'>
                <Col md={2}>Quiz Category</Col>
                <Col md={{ span: 3, offset: 7 }}>
                    <Button variant="primary" className="btn filter-btn" onClick={() => setFilterModal(true)}>
                    Filter by Category
                    </Button>

                    <Modal show={filterModal} onHide={() => setFilterModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Choose Category</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={filterQuiz}>
                            <Modal.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor='quizCategory' className='quiz-label'>Quiz Category</Form.Label>
                                        <Form.Select id='quizCategory' className='quiz-category-inp' onChange={(e) => setfilterCategory(e.target.value)} required>
                                            <option>Select</option>
                                            <option value=''>All Quizzes</option>
                                            <option value="Computer Science">Computer Science</option>
                                            <option value="General Knowledge">General Knowledge</option>
                                            <option value="Geography">Geography</option>
                                            <option value="History">History</option>
                                            <option value="Math">Math</option>
                                            <option value="Science">Science</option>                                
                                        </Form.Select>
                                    </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" className='btn' onClick={() => setFilterModal(false)}>
                                    Close
                                </Button>
                                <Button variant="success" className='btn' type='submit'>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </Col>
            </Row>
            
            <div>
                <Row xs={1} md={2} className="g-4">
                    {quizArray.map((data) => (
                        <Col key={data._id}>
                        <Card className='quiz-card'>
                            <Card.Header className='card-header'>{data.Title}</Card.Header>
                            <Card.Body className='card-body'>
                                <Row>
                                    <Col md={4}>
                                        <Card.Img variant="top" src="holder.js/100px160" className='quiz-img'/> 
                                    </Col>
                                    <Col md={{span: 7, offset:1}}>
                                        <Card.Text className='quiz-details'>Category: {data.Category} </Card.Text>
                                        <Card.Text className='quiz-details'>Questions: {data.Questions.length}</Card.Text>
                                        <Card.Text className='quiz-details'>Duration: No limit</Card.Text>
                                        <Card.Text className='quiz-details'>Date: {data.Created_at}</Card.Text>
                                        <Button variant="info" className='btn btn-leaderboard' >
                                            Leaderboard
                                        </Button>{" "}
                                        <Button variant="success" className='btn' onClick={() => setStartModal(true)}>
                                            Start Quiz
                                        </Button>

                                        <Modal show={startModal} onHide={() => setStartModal(false)}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Start Quiz</Modal.Title>
                                            </Modal.Header>
                                            <Form>
                                                <Modal.Body>
                                                        <Form.Group className="mb-3">
                                                            Proceed to Start Quiz?
                                                        </Form.Group>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="danger" className='btn' onClick={() => setStartModal(false)}>
                                                        Cancel
                                                    </Button>
                                                    <Button variant="success" className='btn' type='button' onClick={() => startQuiz(data._id)}>
                                                        Start Quiz
                                                    </Button>
                                                </Modal.Footer>
                                            </Form>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}