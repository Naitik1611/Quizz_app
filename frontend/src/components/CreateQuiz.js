import React, { useState, useEffect } from 'react'
import './style.css'
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CreateQuiz() {
 
    const navigate = useNavigate();

    const location = useLocation();

    const [quizName, setQuizName] = useState('');
    const [quizCategory, setQuizCategory] = useState('');
    const [quizTime, setQuizTime] = useState('');
    const [quizTimeMin, setQuizTimeMin] = useState('');

    var num = 1
    useEffect(() => {

        setQuizName(localStorage.getItem("quizName"));
        setQuizCategory(localStorage.getItem("quizCategory"));
        setQuizTime(localStorage.getItem("quizTime"));
      
        if (num===1) {
            console.log(localStorage.getItem("questionCount"));
            console.log(localStorage.getItem("questionArray"));
            let questionCount = localStorage.getItem("questionCount") ;
            
            if(questionCount>0){
                let questionArray = JSON.parse(localStorage.getItem("questionArray"));
                let i=1
                questionArray.forEach((question => {    
                        const ul = document.getElementById('list');
                        const li = document.createElement('li');
                        li.innerHTML = `
                        <div class="card">
                        <div class="row">
                          <div class="col-1">
                            Q${i++}
                          </div>
                          <div class="col-11">
                            ${question.Question_text}
                          </div>
                        </div>   
                        <div class="row">
                          <div class="col-6">
                            Question Type: ${question.Question_type}
                          </div>
                          <div class="col-3">
                            Time: ${question.Time}
                          </div>
                          <div class="col-3">
                            Point: ${question.Score}
                          </div>
                        </div> 
                      </div>
                            `;
                        ul.appendChild(li);
                }));
            }
            num++;
        }
    }, []);

/*
    localStorage.removeItem("quizName");
    localStorage.removeItem("quizCategory");
    localStorage.removeItem("quizTime");
    localStorage.removeItem("quizTimeMin");   
*/
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
            localStorage.setItem("quizTimeMin", quizTimeMin); 

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

            let questionArray = JSON.parse(localStorage.getItem("questionArray"));

            if(questionArray.length>0){
                const quizDetails = {
                    "Title": quizName,
                    "Category": quizCategory,
                    "Questions": questionArray,
                    "Timer": {
                    "TimerAvailable": quizTime
                    }
                }

                try {
                    const res = await axios.post('http://localhost:8080/quiz/create',quizDetails,{
                            headers: {
                                'authorization': localStorage.getItem("token") // Setting the 'Authorization' header with the token
                            }
                        }); 
                console.log(res.data);
                } catch (e) {
                    alert(e.message)
                }
                navigate("/home")
            }
        };
    }

      const addQuestion = () => {

        localStorage.setItem("quizName", quizName);
        localStorage.setItem("quizCategory", quizCategory);
        localStorage.setItem("quizTime", quizTime);

        navigate("/add-question")
      }

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
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='quizName' className='quiz-label'>Quiz Name</Form.Label>
                            <Form.Control type='text' id="quizName" className='quiz-name-inp' value={quizName} onChange={(e) => setQuizName(e.target.value)} required/>
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='quizCategory' className='quiz-label'>Quiz Category</Form.Label>
                            <Form.Select type='text' id='quizCategory' className='quiz-category-inp' value={quizCategory} onChange={(e) => setQuizCategory(e.target.value)} required>
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
                            <Button type="button" className="btn btn-primary btn-add-ques" onClick={addQuestion}>Add Question</Button>
                        </div>
                        <div className='col-2'>
                            <Button type="submit" variant="success" className="btn">Done</Button>
                        </div>
                        <div id='ques-container'>

                        </div>
                    </div>

                    <div className='row'>
                         
                        <ul id="list">
                        </ul>
                            
                    </div>
                </div>
            </div>  
        </Form>
    </div>
    )
}