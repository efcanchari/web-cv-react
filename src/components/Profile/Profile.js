import React, { Component } from 'react';
import profile from './frank-profile.png';
import './Profile.css';
// Ensure you have Bootstrap CSS imported in your project, e.g., in your index.js or App.js

class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={profile} alt="Frank Lapa" className="profile-image"/>
                    <h1>Frank Lapa</h1>
                    <h3 className="brand-statement">Atlassian Community Leader</h3>
                    <p>DevOps & Atlassian SME</p>
                    <ul className="text-center list-inline">
                        <li>
                            <a href="https://www.facebook.com/ef.canchari" target="_blank"
                               rel="noopener noreferrer">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/elvis-frank-canchari-lapa-71a78a24"
                               target="_blank" rel="noopener noreferrer">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/e.f.canchari" target="_blank"
                               rel="noopener noreferrer">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="container shadow">
                    <div className="row">
                        <div className="col col-xs-12 col-sm-12 col-md-12 text-center">
                            <div className="iframe-container">
                                <iframe
                                    src="https://www.youtube.com/embed/sIBFvui5faU?autoplay=1&rel=0&color=white"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Responsive Video"
                                ></iframe>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col col-md-12">
                            <p className="text-justify about">
                                Hey there! 👋 I'm a passionate Solution Architect who loves diving deep into the vast
                                oceans of DevOps and emerging with some shiny, techy treasures. With over a decade of
                                decoding the tech realm, I've also donned the entrepreneurial hat, founding and leading
                                a slew of digital startups—including being the captain (CEO) of one! 🚀

                                Currently championing the cause of Atlassian enthusiasts in Dublin (though I rock out in
                                London), I wear the proud badge of Atlassian Community Leader. Plus, I've got the
                                Atlassian
                                Certified Expert shield in my inventory, making me your go-to wizard for all things
                                Jira,
                                Confluence, and more.
                            </p>
                        </div>
                    </div>

                    <div className="row text-center"> {/* Moved text-center here for alignment */}
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="iframe-container">
                                <iframe
                                    src="https://www.youtube.com/embed/zxztVqlvadQ?rel=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Video 1"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="iframe-container">
                                <iframe
                                    src="https://www.youtube.com/embed/giNSb5AisC4?rel=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Video 2"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="iframe-container">
                                <iframe
                                    src="https://www.youtube.com/embed/3Cv23wescdk?rel=0"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Video 3"
                                ></iframe>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="row-spacing col-xs-12 col-sm-12 col-md-12 text-center">
                            <a href="cv/CV_Elvis_Canchari_EN.pdf" download="CV_Elvis_Canchari_EN.pdf"
                               className="btn btn-primary btn-download">Download CV</a>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default Profile;
