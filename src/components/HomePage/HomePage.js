import React, { Component } from 'react';
import profile from '../Profile/frank-profile.png';
import './HomePage.css';
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import ContactPage from "../ContactPage/ContactPage";
import Profile from "../Profile/Profile";
import Certificates from "../Certificates/Certificates";
import ExperienceTimeline from "../ExperienceTimeline/ExperienceTimeline";
import EducationTimeline from "../EducationTimeline/EducationTimeline";
import SkillsPage from "../SkillsPage/SkillsPage";

class HomePage extends Component {
    render() {
        return (
            <div>
                <section id="home" className="home-page container-separator">
                    <Profile/>
                </section>

                <section id="certificates" className="container-separator">
                    <Certificates/>
                </section>

                <section id="skills" className="container-separator">
                    <SkillsPage/>
                </section>

                <section id="experience" className="container-separator">
                    <ExperienceTimeline/>
                </section>

                <section id="education" className="container-separator">
                    <EducationTimeline/>
                </section>

                <section id="contact" className="container-separator">
                    <ContactPage/>
                </section>
            </div>
        );
    }
}

export default HomePage;
