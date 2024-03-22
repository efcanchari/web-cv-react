import React, { Component } from 'react';
import Project from '../Project/Project';
import projects from './projects.json';
import './ProjectsPage.css';
import Slider from "react-slick";
import certificates from "../Certificates/certificates.json";

class ProjectsPage extends Component {
    render() {
        return (
            <div>
                <h4 className="text-uppercase text-center">Portfolio</h4>
                <div className="container shadow">
                    <div className="projects-container">
                        {projects.map(project => (
                            <Project key={project.id} details={project}/>
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}

export default ProjectsPage;
