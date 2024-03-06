import React, { Component } from 'react';
import profile from './frank-profile.png';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <img src={profile} alt="Frank Lapa" />
                <h1>Frank Lapa</h1>
                <p className="brand-statement">Atlassian Community Leader</p>
                <p>This is my portfolio site.</p>
            </div>
        );
    }
}

export default HomePage;
