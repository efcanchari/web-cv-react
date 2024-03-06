import React, { Component } from 'react';
import profile from './frank-profile.png';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div>
                <img src={profile} alt="Frank Lapa" className="profile-image"/>
                <h1>Frank Lapa</h1>
                <p className="brand-statement">Atlassian Community Leader</p>
                <p>This is my portfolio site.</p>
            </div>
        );
    }
}

export default Profile;
