import React, { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
// import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CreateQuiz() {
 
    const navigate = useNavigate();

    const [quizName, setQuizName] = useState('');
    const [quizCategory, setQuizCategory] = useState('');
    const [quizTime, setQuizTime] = useState('');
    const [quizTimeMin, setQuizTimeMin] = useState('');


    const createQuiz = async (e) => {
        e.preventDefault();
        if (quizCategory==="") {
            alert("Please Select a Category")
        } else {
            if(quizTime===true) {
                const quizData = {
                    quizName,
                    quizCategory,
                    quizTime,
                    quizTimeMin
                }
                console.log(quizData);

            } else {
                const quizData = {
                    quizName,
                    quizCategory,
                    quizTime
                }
                console.log(quizData);
            }
        }
        // navigate("/home")
  
        // try {
        //   const res = await axios.post('http://localhost:8080/api/auth',quizData)
        //   navigate("/home")
        //   console.log(res.data);
        // } catch (e) {
        //   alert(e.message)
        // }
  
      };

    return (
    <div className="create-container">
        <Form onSubmit={createQuiz}>
            <div className="row">
                <div className="col-3">
                    <div className='row quiz-detail'>Quiz Details</div>
                    <div className='row'>
                        <Form.Group className="mb-3" controlId='quizImage'>
                            <Form.Label className='quiz-label'>Image</Form.Label>
                            <Form.Control type='file' className='inp-file'/>
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3" controlId='quizName'>
                            <Form.Label className='quiz-label'>Quiz Name</Form.Label>
                            <Form.Control type='text' className='quiz-name-inp' onChange={(e) => setQuizName(e.target.value)} required/>
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3" controlId='quizCategory'>
                            <Form.Label className='quiz-label'>Quiz Category</Form.Label>
                            <Form.Select className='quiz-category-inp' onChange={(e) => setQuizCategory(e.target.value)} required>
                                <option>Select</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="General Knowledge">General Knowledge</option>
                                <option value="Geography">Geography</option>
                                <option value="History">History</option>
                                <option value="Math">Math</option>
                                <option value="Science">Science</option>                                
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3" controlId='quizTime'>
                            <Form.Label className='quiz-label'>Set overall Test Timer</Form.Label>
                            <Form.Select className='quiz-time-inp' onChange={(e) => setQuizTime(e.target.value)} required>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3" controlId='quizTimeMin'>
                            <Form.Label className='quiz-label'>Set Test Time in Minutes</Form.Label>
                            <Form.Control type='number' className='quiz-time' min="1" onChange={(e) => setQuizTimeMin(e.target.value)}/>
                        </Form.Group>
                    </div>                    
                </div>

                <div className='col-9'>
                    <div className='row'>
                        <div className="col-2">
                            <Button variant="danger" className="btn" onClick={() => navigate("/home")}>Cancel</Button>
                        </div>
                        <div className='col-6'></div>
                        <div className='col-2'>
                            <Button variant="primary" className="btn btn-add-ques" onClick={() => navigate("/")}>Add Question</Button>
                        </div>
                        <div className='col-2'>
                            <Button type="submit" variant="success" className="btn">Done</Button>
                        </div>
                        <div id='ques-container'>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-1'>
                                    Q No
                                </div>
                                <div className='col-11'>
                                    Question
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-3'>Question Type</div>
                                <div className='col-1'></div>
                                <div className='col-2'>Time: </div>
                                <div className='col-1'></div>
                                <div className='col-2'>Points: </div>
                                <div className='col-1'></div>
                                <div className='col-1'>
                                    <Button variant="primary" className='btn btn-edit'>Edit</Button>
                                </div>
                                <div className='col-1'>
                                    <Button variant="danger" className='btn'>Delete</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </Form>
    </div>
    )
}