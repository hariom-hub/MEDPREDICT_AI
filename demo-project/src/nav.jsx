// src/components/Navbar.js
import React from 'react';
import './nav.css';
import img from './img';

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <h1><a href="">MedPredict</a></h1>
                <img src={img} alt="medpredict-logo" />
            </div>
            <ul className="navbar-links">
                <a href="https://github.com/hariom-hub/MEDPREDICT_AI" target='blank'><img src="./images/GitHub.png" alt="Source Code" /></a>
                <li><button><a href="https://medicoai-gndd.onrender.com/" >Let's Predict</a></button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
