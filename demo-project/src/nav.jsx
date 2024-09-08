// src/components/Navbar.js
import React from 'react';
import './nav.css';

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <h1><a href="">MedPredict</a></h1>
            </div>
            <ul className="navbar-links">
                <a href="https://github.com/hariom-hub/MedAI_ritansh" target='blank'><img src="./images/GitHub.png" alt="Source" /></a>
                <li><button><a href="https://medicoai-gndd.onrender.com/" target='blank'>Let's Predict</a></button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
