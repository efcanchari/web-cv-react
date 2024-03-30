import React, { Component } from 'react';
import './SkillCard.css'; // Make sure this points to the location of your CSS file.

class SkillCard extends Component {
    render() {
        const { competency } = this.props; // Assumes skills is passed as a prop to SkillCard

        return (
            <div className="card content-wrapper skill-wrapper">
                <h5 className="text-center skill-title">{competency.name}</h5>
                {competency.skills.map((skill, index) => (
                    <div className="skill-progress-div" key={index}>
                        <p>{skill.name}<span>{skill.level}</span></p>
                        <div className="progress skill-progress" style={{ width: skill.level }}>
                            <div className="determinate skill-determinate">
                                <i className="skill-determinate-circle fa fa-circle"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default SkillCard;
