import React from 'react';
import { certifications, achievements } from '../data';
import './Certifications.css';

const Certifications = () => {
    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Certifications & Achievements</h2>

                </div>

                <div className="cert-list-container">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="cert-row glass-card">
                            <div className="cert-icon-box">
                                <i className='bx bxs-certification'></i>
                            </div>

                            <div className="cert-details">
                                <h3 className="cert-name">{cert.title}</h3>
                                <div className="cert-org">
                                    <span className="issuer">{cert.issuer}</span>
                                    {cert.credentialId && <span className="credential-id">• {cert.credentialId}</span>}
                                </div>
                            </div>

                            <div className="cert-meta-side">
                                <span className="cert-year">{cert.date}</span>
                                {cert.skills && (
                                    <div className="cert-tags">
                                        {cert.skills.split(', ').slice(0, 2).map((skill, i) => (
                                            <span key={i} className="mini-tag">{skill}</span>
                                        ))}
                                        {cert.skills.split(', ').length > 2 && <span className="mini-tag">+{cert.skills.split(', ').length - 2}</span>}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {achievements.length > 0 && (
                    <div className="achievements-section">
                        <h3 className="section-title-small">Achievements</h3>
                        <div className="achievements-list">
                            {achievements.map((item) => (
                                <div key={item.id} className="achievement-row">
                                    <div className="achievement-icon-small">{item.icon}</div>
                                    <div className="achievement-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
