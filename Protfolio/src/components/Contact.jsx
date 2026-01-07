import React from 'react';
import { personalInfo } from '../data';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <span className="section-subtitle">Get in Touch</span>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3 className="contact-title">Talk to me</h3>

                        <div className="contact-card">
                            <i className='bx bx-mail-send contact-card-icon'></i>
                            <h3 className="contact-card-title">Email</h3>
                            <span className="contact-card-data">{personalInfo.connect.email}</span>

                            <a href={`mailto:${personalInfo.connect.email}`} className="contact-button">
                                Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
                            </a>
                        </div>

                        <div className="contact-card">
                            <i className='bx bxl-whatsapp contact-card-icon'></i>
                            <h3 className="contact-card-title">LinkedIn</h3>
                            <span className="contact-card-data">Bansi Aghera</span>

                            <a href={personalInfo.connect.linkedin} target="_blank" rel="noreferrer" className="contact-button">
                                Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i>
                            </a>
                        </div>
                    </div>

                    <div className="contact-content">
                        <h3 className="contact-title">Write me your project</h3>

                        <form action="https://formsubmit.co/agherabansi2@gmail.com" method="POST" className="contact-form">
                            <div className="contact-form-div">
                                <label className="contact-form-tag">Name</label>
                                <input type="text" name="name" placeholder="Insert your name" className="contact-form-input" required />
                            </div>

                            <div className="contact-form-div">
                                <label className="contact-form-tag">Mail</label>
                                <input type="email" name="email" placeholder="Insert your email" className="contact-form-input" required />
                            </div>

                            <div className="contact-form-div contact-form-area">
                                <label className="contact-form-tag">Project</label>
                                <textarea name="message" cols="30" rows="10" placeholder="Write your project" className="contact-form-input" required></textarea>
                            </div>

                            {/* Hidden configurations for FormSubmit */}
                            <input type="hidden" name="_next" value="http://localhost:5173/" /> {/* Note: Ideally this should be dynamically set or just standard redirect */}
                            <input type="hidden" name="_captcha" value="false" />

                            <button type="submit" className="button contact-button-submit">
                                Send Message
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '0.5rem' }}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
