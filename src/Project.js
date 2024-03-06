import React, { Component } from 'react';
import './Project.css';
import projectLogo from './project-logo.png';

class Project extends Component {
    render() {
        const { title, description, link, repo, image } = this.props.details;
        return (
            <div className="project-container">
                <div className="project-image">
                    <img src={projectLogo} alt={`Screenshot of ${title}`}/>
                </div>
                <div className="project-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    Deployed Version: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a><br/>
                    GitHub Repo: <a href={repo} target="_blank" rel="noopener noreferrer">{repo}</a>
                </div>
            </div>
        );
    }
}

export default Project;
