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
                            <li><a href="#header">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#clients">Recommendations</a></li>
                            <li><a href="#portfolios">Projects</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#interest">Interest</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
    );
    }
}

export default Header;
