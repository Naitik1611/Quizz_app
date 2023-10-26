import React, { useState, useEffect } from 'react'
import './style.css'
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'
import Mcq from './Mcq';
import TrueFalse from './TrueFalse';
import Fib from './Fib';

export default function AddQuestion() {

const navigate = useNavigate();

const location = useLocation();


useEffect(() => {
   
  }, []); 

const [mcq, setMcq] = useState(true);
const [tf, setTf] = useState(false);
const [fib, setFib] = useState(false);

const [questionType, setQuestionType] = useState('Multiple Choice');

const changeQuestionFormat = (e) => {
setQuestionType(e);

    switch (e) {
        case "Multiple Choice":
        setMcq(true);
        setTf(false);
        setFib(false);
        break;

      case "True/False":
        setMcq(false);
        setTf(true);
        setFib(false);
        break;

      case "Fill-in-the-Blank":
        setMcq(false);
        setTf(false);
        setFib(true);
        break;

      default:
        break;

      }
};


// Routing
//navigate("/register");

return (
<div className="question-container">

    <div className="question-box">

        <div className="row">
            <div className="col-4">
            <h4>Add Question</h4>
            </div>
            <div className="col-8">
            <label htmlFor="questionType" className="">Select Question Type</label>
                <br />
                <select className="form-select input-box" id="questionType" aria-label="Default select example" value={questionType} onChange={(e) => changeQuestionFormat(e.target.value)}>
                    <option value="Multiple Choice" >Multiple Choice</option>
                    <option value="True/False">True/False</option>
                    <option value="Fill-in-the-Blank">Fill-in-the-Blank</option>
                </select>
            </div>
        </div>
<hr/>
        {mcq && <Mcq />}
        {tf && <TrueFalse />}
        {fib && <Fib />}
       
    </div>

</div>
)
}