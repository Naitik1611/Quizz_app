import React, { useState, useEffect } from 'react'
import './style.css'
import { useNavigate, useLocation } from "react-router-dom";
// import axios from 'axios'
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
               
                questionArray.forEach((question => {
                   
                        const ul = document.getElementById('list');
                        const li = document.createElement('li');
                        li.innerHTML = `
                        <div class="card">
                        <div class="row">
                          <div class="col-1">
                            Q1
                          </div>
                          <div class="col-11">
                            ${question.question}
                          </div>
                        </div>   
                        <div class="row">
                          <div class="col-6">
                            Question Type: ${question.questionType}
                          </div>
                          <div class="col-3">
                            Time: ${question.timer}
                          </div>
                          <div class="col-3">
                            Point: ${question.point}
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
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='quizImage' className='quiz-label'>Image</Form.Label>
                            <Form.Control type='file' id='quizImage' className='inp-file'/>
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
                            <Form.Control type='text' id='quizCategory' className='quiz-category-inp' value={quizCategory} onChange={(e) => setQuizCategory(e.target.value)} required/>
                        </Form.Group>
                    </div>
                    <div className='row'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='quizTime' className='quiz-label'>Set overall Test Timer</Form.Label>
                            <Form.Select id='quizTime' className='quiz-time-inp'value={quizTime}  onChange={(e) => setQuizTime(e.target.value)} required>
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
                            <Button type="button" className="btn btn-primary btn-add-ques" onClick={addQuestion}>Add Question</Button>
                        </div>
                        <div className='col-2'>
                            <Button type="submit" className="btn btn-done">Done</Button>
                        </div>
                        <div id='ques-container'>

                        </div>
                    </div>

                    <div className='row'>
                            <div className='row'>
                            <div className='col-10'>
                                   
                                </div>
                                <div className='col-1'>
                                    <Button type='button' className='btn btn-primary'>Edit</Button>
                                </div>
                                <div className='col-1'>
                                    <Button type='button' className='btn btn-cancel'>Delete</Button>
                                </div>
                            </div>

                         
                                <ul id="list">
                                </ul>
                            
                       
                    </div>
                </div>
            </div>  
        </Form>
    </div>
    )
}