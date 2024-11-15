// src/components/MainSection.js
import React from 'react';
import './mainsection.css';

const MainSection = () => {
    return (
        <main className="main-section">
            <section id="about" className="about">

                <h1>About MedPredict</h1>
                <br />
                <h3>MedPredict is a cutting-edge platform designed   predict diseases based on various symptoms and medical data, utilizing advanced machine learning algorithms.</h3>
            </section>
            <section className="cards">
                <div className="card">
                    <h3>Our Aim</h3>
                    <p>MedPredict is a cutting-edge platform designed to predict diseases based on various symptoms and medical data. It utilizes advanced machine learning algorithms to empower healthcare with early and accurate disease prediction, ultimately aiming to improve patient outcomes.</p>

                </div>
                <div className="card">
                    <h3>Features</h3>
                    <p>Real-time predictions, personalized insights, and comprehensive analytics for healthcare professionals.</p>
                    <p>Medpredict allows are user to choose from multiple parameters of diseases like cough, sneezing, headache, swelling and many more. </p>
                </div>
                <div className="card">
                    <h3>How It Works</h3>
                    <p>Our model processes patient data, identifies patterns, and predicts potential diseases using machine learning.</p>
                    <p>It uses linear regression algorithm that allows a patient to get the most accurate disease prediction out there.</p>
                </div>
                <div className="card">
                    <h3>ChatBot Assistant</h3>
                    <p>Medpredict comes with an interesting feature of assisting a patient with a chatbot from <b>Chatbase.co</b></p>
                    <p>Chatbot helps you answer your queries related to the chatbot.</p>
                </div>
                <div className="card">
                    <h3>Technologies used</h3>
                    <ol>
                    <li><p><b>React + Vite</b> in the front-end.</p></li>
                    <li><p><b>Streamlit</b> in the backend.</p></li>
                    <li><p><b>Chatbase API</b> for chatbot assist.</p></li>
                    <li><p><b>Pandas and scikit learn and linear regression algorithm</b> for prediction.</p></li>
                    <li><p><b>Vercel</b> for deployment.</p></li>
                    </ol>

                </div>
            </section>
        </main>
    );
};

export default MainSection;
