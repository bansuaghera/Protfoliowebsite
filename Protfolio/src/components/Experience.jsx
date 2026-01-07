import React from 'react';
import { experience } from '../data';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Internship</h2>
                <div className="experience-container">
                    {experience.map((exp, index) => (
                        <div key={index} className="experience-card glass-card">
                            <h3 className="exp-role">{exp.role}</h3>
                            <h4 className="exp-company">{exp.company}</h4>
                            <p className="exp-tech">{exp.tech}</p>
                            <p className="exp-desc">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
