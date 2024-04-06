import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="app-header shadow navbar-fixed-top">
                <nav className="navbar">
                    <div className="container-fluid">
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#certificates">Certificates</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a
                                href="https://www.linkedin.com/in/efcanchari/details/recommendations/?detailScreenTabIndex=0"
                                target="_blank">Recommendations</a></li>
                            <li><a href="https://www.meetup.com/dublin-atlassian-community-events/"
                                   target="_blank">Events</a></li>
                            <li><a href="https://www.linkedin.com/in/efcanchari/recent-activity/all/"
                                   target="_blank">Posts</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
