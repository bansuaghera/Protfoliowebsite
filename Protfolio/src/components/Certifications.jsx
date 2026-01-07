import React from 'react';
import { certifications, achievements } from '../data';
import './Certifications.css';

const Certifications = () => {
    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Certifications & Achievements</h2>
                    <span className="section-subtitle">My Credentials</span>
                </div>

                <div className="cert-list">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="cert-item">
                            <div className="cert-content">
                                <h3 className="cert-title">{cert.title}</h3>
                                <div className="cert-meta">
                                    <span className="cert-issuer">{cert.issuer}</span>
                                    <span className="cert-separator">•</span>
                                    <span className="cert-date">{cert.date}</span>
                                </div>
                                {cert.skills && (
                                    <div className="cert-skills">
                                        Skills: {cert.skills}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {achievements.length > 0 && (
                    <div className="achievements-wrapper">
                        <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Special Achievements</h3>
                        {achievements.map((item) => (
                            <div key={item.id} className="achievement-card">
                                <div className="achievement-icon">{item.icon}</div>
                                <div className="achievement-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
