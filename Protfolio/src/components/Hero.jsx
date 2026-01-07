import React from 'react';
import { personalInfo } from '../data';
import './Hero.css';
import profileImg from '../assets/hero-profile.jpg'; // Using the uploaded image as placeholder/profile

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="container hero-wrapper">
                <div className="hero-text-content">
                    <h1 className="hero-greeting">Hi, I'm {personalInfo?.name?.split(' ')[0] || "User"} <br />
                        <span className="last-name">{personalInfo?.name?.split(' ').slice(1).join(' ') || ""}</span>
                    </h1>

                    <div className="role-container">
                        <span className="role-line"></span>
                        <h2 className="hero-role">{personalInfo?.title?.split('|')[0].trim() || "Developer"}</h2>
                    </div>

                    <p className="hero-description">
                        A passionate {personalInfo?.title ? personalInfo.title.toLowerCase() : "developer"} focused on creating user-friendly and efficient digital solutions.
                    </p>

                    <a href="#contact" className="btn-say-hello">
                        Say Hello
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </a>
                </div>

                <div className="hero-image-content">
                    <div className="image-blob"></div>
                    <img src={profileImg} alt="Profile" className="hero-profile-img" />
                </div>
            </div>
            <div className="hero-bg-gradient"></div>
        </section>
    );
};

export default Hero;
