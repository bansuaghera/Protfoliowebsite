import React from 'react';
import { skills } from '../data';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Tech Stack</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-card glass-card">
                            <h3 className="skill-category">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            <div className="skill-tags">
                                {items.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
