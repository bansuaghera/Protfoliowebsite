import React from 'react';
import { personalInfo } from '../data';
import './Hero.css';
import profileImg from '../assets/hero-profile.jpg';

const Hero = () => {
    return (
        <section id="about" className="hero-container">
            <div className="container hero-wrapper">
                <div className="hero-text-content">
                    <h1 className="hero-greeting">Hi, I'm <br />
                        <span className="last-name">{personalInfo?.name || "User"}</span>
                    </h1>

                    <div className="role-container">
                        <span className="role-line"></span>
                        <h2 className="hero-role">{personalInfo?.title?.split('|')[0].trim() || "Developer"}</h2>
                        <span className="role-line"></span>
                    </div>

                    <p className="hero-description">
                        {personalInfo.about ? personalInfo.about[0] : "A passionate developer."}
                    </p>

                    <div className="hero-stats">
                        <div className="stat-box glass-card">
                            <h3 className="stat-number">{personalInfo.stats?.experience || "0+"}</h3>
                            <span className="stat-label">Experience</span>
                        </div>
                        <div className="stat-box glass-card">
                            <h3 className="stat-number">{personalInfo.stats?.projects || "0+"}</h3>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-box glass-card">
                            <h3 className="stat-number">{personalInfo.stats?.clients || "0+"}</h3>
                            <span className="stat-label">Clients</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn-primary">
                            Say Hello
                            <i className='bx bx-send'></i>
                        </a>
                        <a href={personalInfo.resume || "#"} download="RESUME_BANSI.pdf" className="btn-secondary">
                            Download CV
                            <i className='bx bx-download'></i>
                        </a>
                    </div>
                </div>

                <div className="hero-image-content">
                    <div className="image-blob"></div>
                    <img src={profileImg} alt="Profile" className="hero-profile-img" />

                    {/* Floating Tech Badges can go here if we want to add more flair later */}
                </div>
            </div>
            <div className="hero-bg-gradient"></div>
        </section>
    );
};

export default Hero;
