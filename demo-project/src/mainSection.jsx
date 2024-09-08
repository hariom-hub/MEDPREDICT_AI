// src/components/MainSection.js
import React from 'react';
import './mainsection.css';

const MainSection = () => {
    return (
        <main className="main-section">
            <section id="about" className="about">

                <h2>About MedPredict</h2>
                <br />
                <h3>MedPredict is a cutting-edge platform designed   predict diseases based on various symptoms and medical data, utilizing advanced machine learning algorithms.</h3>
            </section>
            <section className="cards">
                <div className="card">
                    <h3>Our Aim</h3>
                    <p>To empower healthcare with early an d accurate disease prediction to improve patient outcomes.</p>
                </div>
                <div className="card">
                    <h3>Features</h3>
                    <p>Real-time predictions, personalized insights, and comprehensive analytics for healthcare professionals.</p>
                </div>
                <div className="card">
                    <h3>How It Works</h3>
                    <p>Our model processes patient data, identifies patterns, and predicts potential diseases using machine learning.</p>
                </div>
                <div></div>
            </section>
        </main>
    );
};

export default MainSection;
