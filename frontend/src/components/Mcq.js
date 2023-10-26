import React, { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";

export default function Mcq() {
 
   const navigate = useNavigate();

   
const [option, setOption] = useState(2);
const questionType = "Multiple Choice";
const [point, setPoint] = useState(1);
const [question, setQuestion] = useState('');
const [explanation, setExplanation] = useState('');


const addOption = () => {
      setOption(option + 1);
  };

const removeOption = () => {
    if (option > 2) {
      setOption(option - 1);
    }
  };

  const saveQuestion = (e) => {
    e.preventDefault();
    console.log("Save");

    const answerOptionsArray = [];

    for (let i = 0; i < option; i++) {
      answerOptionsArray.push(document.getElementById("option"+i).value);
    }

    const questionDetails = {
        questionType,
        timer : document.getElementById('timer').value,
        point,
        question,
        answerOptions : answerOptionsArray,
        answer : answerOptionsArray[document.querySelector('input[type="radio"]:checked').value],
        explanation
    }

    console.log(questionDetails);

    localStorage.setItem("questionCount", Number(localStorage.getItem("questionCount"))+1);

  const storedArray = JSON.parse(localStorage.getItem('questionArray') || []);
  storedArray.push(questionDetails);
  localStorage.setItem('questionArray', JSON.stringify(storedArray));

    navigate("/create-quiz");
  };

    return (
  <div className="">

<form onSubmit={saveQuestion}>
      <div className="row">

<div className="col">
    <label htmlFor="timer" className="">Set Timer</label><br />
    <select className="form-select input-box" aria-label="Default select example" id="timer" required>
        <option value="None" selected>None</option>
        <option value="15 sec">15 sec</option>
        <option value="30 sec">30 sec</option>
        <option value="1 min">1 min</option>
        <option value="2 min">2 min</option>
    </select>
</div>
<div className="col">

    <label htmlFor="point" className="">Points</label><br />
    <input type="number" id="point" className="input-box" placeholder='' onChange={(e) => setPoint(e.target.value)} required></input>
</div>

</div>

<br/>
         Question
<br />
    <input type="text" id="question" className="input-box" placeholder="Enter the question here..." onChange={(e) => setQuestion(e.target.value)} style={{marginTop:"10px"}} required></input>
            <br />

            <div className="row" style={{marginTop:"10px"}}>
                <div className="col-7">
                <input type="text" id="questionImg" className="input-box" placeholder="Paste image link here..."></input>
                </div>
                <div className="col-5">
                <input type="file" name="image" id="image" accept="image/*" className="" style={{marginTop:"10px"}}/>
                </div>
            </div>
<br/>
            <div className="row">
                        <div className="col-10">
                        Answer Options
                        </div>
                        <div className="col-2">
                        Mark
                        </div>
                    </div>

            {Array.from({ length: option }, (_, i) => <span key={i}>

                <div className="option-row">
                    <div className="row">
                        <div className="col-10">
                        <input type="text" id={"option"+i} className="input-box" placeholder="Enter option..." required></input>
                        </div>

                        <div class="col-2">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" value={i} id={i} style={{marginTop:"15px"}} required/>
</div>
                       
                    </div>
                    
                </div>
            </span>)}

            <div className="row" style={{marginTop:"10px"}}>
                <div className="col-2">
                <button type="button" className="btn btn-primary button-width" onClick={addOption}>Add</button>
                </div>
                <div className="col-10">
                <button type="button" className="btn btn-primary button-width" onClick={removeOption}>Remove</button>
                </div>
        
            </div>

            <input type="text" id="explanation" className="input-box" placeholder="Add Explanation here..." onChange={(e) => setExplanation(e.target.value)} style={{marginTop:"20px"}} required></input>
            <br/>
        
            <div className="row" style={{marginTop:"20px"}}>
                <div className="col-2">
                <button type="button" className="btn btn-primary button-width" onClick={() => navigate("/create-quiz")}>Cancel</button>
                </div>
                <div className="col-10">
                <button type="submit" className="btn btn-primary button-width">Save Question</button>
                </div>
            </div>
            </form> 
  </div>
    )
}