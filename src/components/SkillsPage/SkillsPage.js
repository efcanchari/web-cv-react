import React, { Component } from 'react';
import './SkillsPage.css';
import skillsData from "./skills.json"; // Ensure that this import matches the file name and location
import SkillCard from "../SkillCard/SkillCard";

class SkillsPage extends Component {
    render() {
        return (
            <div>
                <h4 className="text-uppercase text-center">Skills</h4>
                <div className="container">
                    <div className="skills-container">
                        <div className="row">
                            {skillsData.competencies.map(competency => (
                                <div className="col col-md-4 col-sm-4 col-xs-12" key={competency.id}>
                                    <SkillCard competency={competency} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsPage;
