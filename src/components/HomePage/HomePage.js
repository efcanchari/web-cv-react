import React, { Component } from 'react';
import profile from '../Profile/frank-profile.png';
import './HomePage.css';
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import ContactPage from "../ContactPage/ContactPage";
import Profile from "../Profile/Profile";
import Certificates from "../Certificates/Certificates";

class HomePage extends Component {
    render() {
        return (
            <div>
                <section id="home" className="home-page">
                    <Profile/>
                </section>

                <section id="certificates">
                    <Certificates/>
                </section>

                <section id="projects">
                    <ProjectsPage/>
                </section>

                <section id="contact">
                    <ContactPage/>
                </section>
            </div>
        );
    }
}

export default HomePage;
