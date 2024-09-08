// src/components/Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <br />
            <hr />
            <ul className="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="https://x.com/singhhariom01" target='blank'>Support</a></li>
            </ul>
            <br />
            <p>&copy; 2024 MedPredict. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
