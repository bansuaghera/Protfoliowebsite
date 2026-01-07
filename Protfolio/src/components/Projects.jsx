import React, { useState } from 'react';
import { projects } from '../data';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        if (project.gallery) {
            setSelectedProject(project);
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card glass-card ${project.gallery ? 'clickable' : ''}`}
                            onClick={() => handleProjectClick(project)}
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-tech">{project.tech}</p>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-features">
                                    <span>✨ {project.features}</span>
                                </div>
                                {project.gallery && (
                                    <div className="click-hint">
                                        Click to view details ↗
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
