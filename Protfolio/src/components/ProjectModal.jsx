import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h2>{project.title}</h2>
                    <p className="modal-tech">{project.tech}</p>
                </div>

                <div className="modal-body">
                    <p>{project.description}</p>
                    <div className="gallery-grid">
                        {project.gallery && project.gallery.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img.src} alt={img.caption} />
                                <span className="caption">{img.caption}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
