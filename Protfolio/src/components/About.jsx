import React from 'react';
import { personalInfo } from '../data';
import './About.css';
// Re-using the same image or a different about image if available. 
// Ideally should use a different one, but for now using the same reference.
import aboutImg from '../assets/about-circle.png';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <span className="section-subtitle">My Introduction</span>
                </div>

                <div className="about-container">
                    <div className="about-img-wrapper">
                        <img src={aboutImg} alt="About Me" className="about-img" />
                    </div>

                    <div className="about-data">
                        <div className="about-info">
                            {/* Experience Card */}
                            <div className="about-box">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="about-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <h3 className="about-title">Experience</h3>
                                <span className="about-subtitle">{personalInfo.stats?.experience || "0+"}</span>
                            </div>

                            {/* Projects Card */}
                            <div className="about-box">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="about-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                <h3 className="about-title">Completed</h3>
                                <span className="about-subtitle">{personalInfo.stats?.projects || "0+"}</span>
                            </div>

                            {/* Clients Card */}
                            <div className="about-box">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="about-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                <h3 className="about-title">Support</h3>
                                <span className="about-subtitle">Online 24/7</span>
                            </div>
                        </div>

                        <div className="about-description">
                            {personalInfo.about && personalInfo.about.map((paragraph, index) => (
                                <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
                            ))}
                        </div>

                        <a href={personalInfo.resume || "#"} download="RESUME_BANSI.pdf" className="btn-primary btn-resume">
                            Download Resume
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
