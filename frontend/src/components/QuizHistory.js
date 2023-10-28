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

export default function QuizHistory() {
    
    const navigate = useNavigate();
    const [filterModal, setFilterModal] = useState(false);

    const [filterCategory, setFilterCategory] = useState('');

    const [quizArray, setquizArray] = useState([]);

    var num = 1
    useEffect((async) => {
        if (num===1) {
            getQuiz();
            num++;
        }
        
    }, []);

    const filterQuiz = async (e) => {
        e.preventDefault();
        getQuiz()
        setFilterModal(false);
    }
    
    const getQuiz = async (e) => {
        
        try {
            if(!filterCategory) {
                const res = await axios.get('http://localhost:8080/quiz/');
                setquizArray(res.data);
            } else {
                const res = await axios.get('http://localhost:8080/filter/'+filterCategory);
                setquizArray(res.data);
            }
            
        } catch (e) {
            alert(e.message)
        }
    };

    return (
        <div className="main-container">
            <Row className='my-quiz'>
                <Col md={2}>Quizzes History</Col>
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
                                        <Form.Select id='quizCategory' className='quiz-category-inp' onChange={(e) => setFilterCategory(e.target.value)} required >
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
            
            <div >
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
                                        <Card.Text className='quiz-details'>Category: {data.Category}</Card.Text>
                                        <Card.Text className='quiz-details'>Questions: {data.Questions.length}</Card.Text>
                                        <Card.Text className='quiz-details'>Score: xx/yy</Card.Text>
                                        <Card.Text className='quiz-details'>Date: </Card.Text>
                                        <Button variant="info" className='btn btn-leaderboard' onClick={() => navigate("/leaderboard")}>
                                            Leaderboard
                                        </Button>

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