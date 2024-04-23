import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profile from './profile-pic-v2.jpeg';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="app-header shadow navbar-fixed-top">
                <nav className="navbar">
                    <div className="container-fluid">
                        {/* Menu Option */}
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="cv/CV_Elvis_Canchari_EN_SRE.pdf"
                                   download="CV_Elvis_Canchari_EN.pdf">PDF CV</a>
                            </li>
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
                        </ul>

                        {/* Menu Option
                        <a href="#0"
                           data-activates="nav-mobile"
                           id="nav-btn"
                           className="button-collapse nav-icon">
                            <i className="ion-navicon"></i>
                        </a>
                        <div id="side-nav">
                            <div id="nav-header">
                                <div id="nav-profile" className="center-block">
                                    <img src={profile} alt="Frank Lapa" className="nav-profile-image"/>
                                </div>
                                <h6 className="text-center text-capitalize">Elvis Frank Canchari</h6>
                            </div>
                            <div id="nav-link-wrapper">
                                <ul>
                                    <li><a className="nav-link" href="#header">About</a></li>
                                    <li><a className="nav-link" href="#experience">Experience</a></li>
                                    <li><a className="nav-link" href="#skills">Skills</a></li>
                                    <li><a className="nav-link" href="#education">Education</a></li>
                                    <li><a className="nav-link" href="#portfolios">Projects</a></li>
                                    <li><a className="nav-link" href="#services">Services</a></li>
                                    <li><a className="nav-link" href="#clients">Recommendations</a></li>
                                    <li><a className="nav-link" href="#interest">Interest</a></li>
                                    <li><a className="nav-link" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        */}

                        {/* Side Nav Mask
                        <div id="side-nav-mask" className=""></div>
                        */}
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
