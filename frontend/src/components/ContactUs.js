import React from 'react'
import './style.css'
// import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card'

export default function ContactUs() {
 
    // const navigate = useNavigate();

    return (
      <div className='contact-container'>
       
        <h4 className="res-name"> Contact Us</h4>
        <div className="row" style={{padding:"0", margin:"0"}}>
            <div className="col-3 score-box">
              <div className="card res-det">
              <Card.Title className='contact-name'>Shivani Eranjikal</Card.Title>
                        <Card.Subtitle>Software Developer</Card.Subtitle>
             <span className="figure">   </span>  
              </div>
            </div>

            <div className="col-3 score-box">
               <div className="card res-det">
               <Card.Title className='contact-name'>Naitik Shah</Card.Title>
                        <Card.Subtitle>Software Developer</Card.Subtitle>
                <span className="figure">   </span>  
              </div>
            </div>

            <div className="col-3 score-box">
            <div className="card res-det">
            <Card.Title className='contact-name'>Sankaralingam</Card.Title>
                        <Card.Subtitle>Software Developer</Card.Subtitle>
                <span className="figure">   </span>  
                </div>
            </div>

            <div className="col-3 score-box">
            <div className="card res-det">
            <Card.Title className='contact-name'>Shubham Bhattad</Card.Title>
                        <Card.Subtitle>Software Developer</Card.Subtitle>
            
                <span className="figure">  </span>  
                </div>
            </div>
          </div>
          <br />

<div style={{color:"#702963"}}>
<h5>Have questions, suggestions, or feedback? We'd love to hear from you. Please feel free to reach out to us using any of the following methods:</h5>

<br/>

<h5 style={{fontWeight:"bold"}}>Contact Information</h5>
Email: contact@yourwebsite.com<br/>
Phone: +91 9090909090<br/>
Address: 123 Main Street,Pleasantville, India<br/>
<br/><br/>
<h5 style={{fontWeight:"bold"}}>Customer Support</h5>
Our support team is available to assist you during our business hours:

Monday - Friday: 9:00 AM - 5:00 PM (Your Time Zone)
<br/>&nbsp;
</div>

    {/*    <div className='row contact-row'>
            <div className='col-3 contact-col'>
                <Card>
                    <Card.Img variant="top" src="user1.png" className='contact-img'></Card.Img>
                    <Card.Body className='contact-body'>
                        <Card.Title className='contact-name'>Shivani Eranjikal</Card.Title>
                        <Card.Subtitle>Software Developer</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-3 contact-col'>
                <Card>
                    <Card.Img variant="top" src="user1.png" className='contact-img'></Card.Img>
                    <Card.Body className='contact-body'>
                        <Card.Title className='contact-name'>Naitik Shah</Card.Title>
                        <Card.Subtitle>Software Developer</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-3 contact-col'>
                <Card>
                    <Card.Img variant="top" src="user1.png" className='contact-img'></Card.Img>
                    <Card.Body className='contact-body'>
                        <Card.Title className='contact-name'>Sankaralingam</Card.Title>
                        <Card.Subtitle>Software Developer</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-3 contact-col'>
                <Card>
                    <Card.Img variant="top" src="user1.png" className='contact-img'></Card.Img>
                    <Card.Body className='contact-body'>
                        <Card.Title className='contact-name'>Shubham Bhattad</Card.Title>
                        <Card.Subtitle>Software Developer</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </div>
        */}

      </div>
    )
}