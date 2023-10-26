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
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='quizImage' className='quiz-label'>Image</Form.Label>
                            <Form.Control type='file' id='quizImage' className='inp-file'/>
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='quizName' className='quiz-label'>Quiz Name</Form.Label>
                            <Form.Control type='text' id="quizName" className='quiz-name-inp' onChange={(e) => setQuizName(e.target.value)} required/>
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='quizCategory' className='quiz-label'>Quiz Category</Form.Label>
                            <Form.Control type='text' id='quizCategory' className='quiz-category-inp' onChange={(e) => setQuizCategory(e.target.value)} required/>
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='quizTime' className='quiz-label'>Set overall Test Timer</Form.Label>
                            <Form.Select id='quizTime' className='quiz-time-inp' onChange={(e) => setQuizTime(e.target.value)} required>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='quizTimeMin' className='quiz-label'>Set Test Time in Minutes</Form.Label>
                            <Form.Control type='number' className='quiz-time' id='quizTimeMin' min="1" onChange={(e) => setQuizTimeMin(e.target.value)}/>
                        </Form.Group>
                    </div>                    
                </div>

                <div className='col-9'>
                    <div className='row'>
                        <div className="col-2">
                            <Button type="button" className="btn btn-cancel" onClick={() => navigate("/home")}>Cancel</Button>
                        </div>
                        <div className='col-6'></div>
                        <div className='col-2'>
                            <Button type="button" className="btn btn-primary btn-add-ques" onClick={() => navigate("/")}>Add Question</Button>
                        </div>
                        <div className='col-2'>
                            <Button type="submit" className="btn btn-done">Done</Button>
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
                                    <Button type='button' className='btn btn-primary'>Edit</Button>
                                </div>
                                <div className='col-1'>
                                    <Button type='button' className='btn btn-cancel'>Delete</Button>
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