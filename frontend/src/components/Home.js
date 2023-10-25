import React from 'react'
import './style.css'
// import { useNavigate } from "react-router-dom";

export default function Home() {
 
    // const navigate = useNavigate();

    return (
  <div className="home-container">
    <div className="home-search">
        <input type='text' className='search-box' placeholder='Search for quizzes on any topic'></input>
    </div>

    <div className='home-categories-container'>
        <div className='home-head'>
            <span className='home-categories-label'>Categories</span>
            <span className='home-more'>See more</span>
        </div>
        <div className='home-items'>
            <ul className='category-items'>
                <li className='item-card'>1</li>
                <li className='item-card'>2</li>
                <li className='item-card'>3</li>
                <li className='item-card'>4</li>
            </ul>
        </div>
    </div>

    <div className='home-recommended-container'>
        <div className='home-head'>
            <span className='home-recommended-label'>Recommended for you</span>
            <span className='home-more'>See more</span>
        </div>
        <div className='home-items'>
            <ul className='recommended-items'>
                <li className='item-card'>1</li>
                <li className='item-card'>2</li>
                <li className='item-card'>3</li>
                <li className='item-card'>4</li>
            </ul>
        </div>
    </div>
  </div>
    )
}