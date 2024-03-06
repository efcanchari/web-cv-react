import React, { Component } from 'react';
import Project from './Project';
import projects from './projects.json';
import './ProjectsPage.css';

class ProjectsPage extends Component {
    render() {
        return (
            <div className="projects-container">
                {projects.map(project => (
                    <Project key={project.id} details={project}/>
                ))}
            </div>
        );
    }
}

export default ProjectsPage;
