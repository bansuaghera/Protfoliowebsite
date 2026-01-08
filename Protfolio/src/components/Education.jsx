import React from 'react';
import { education } from '../data';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">Education Journey</h2>
                <div className="education-main-card glass-card">
                    <div className="timeline">
                        {education.map((edu, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h3 className="edu-degree">{edu.degree}</h3>
                                        <span className="edu-year">{edu.year}</span>
                                    </div>
                                    <h4 className="edu-institution">{edu.institution}</h4>
                                    <p className="edu-desc">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
