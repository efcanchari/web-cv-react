import React, { Component } from 'react';
import profile from './frank-profile.png';
import './Profile.css';
import socialLinks from './social.json';

class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={profile} alt="Frank Lapa" className="profile-image"/>
                    <h1>Frank Lapa</h1>
                    <h3>DevOps & Atlassian Solution Architect</h3>
                    <h4>Atlassian Community Leader</h4>

                    <ul className="text-center list-inline">
                        {socialLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    <ion-icon name={link.icon}></ion-icon>
                                </a>
                            </li>
                        ))}
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
                                Hey there! 👋 I’m a seasoned Platform & DevOps Lead Engineer with a deep passion for
                                designing and implementing cutting-edge technology solutions.
                                Over the past decade, I've led numerous projects from inception to completion,
                                specializing in migrations, new implementations, and integrations,
                                including extensive work on cloud projects. My expertise in Infrastructure as Code
                                (IaaC) with tools like Terraform and Ansible, alongside Kubernetes, complements my
                                architectural and development skills, ensuring robust and scalable systems. Currently,
                                I'm an active Atlassian Community Leader and Emeritus Expert, guiding fellow Atlassian
                                aficionados. With a rich background in both the technical and leadership aspects of
                                projects, I'm your go-to expert for transforming complex challenges into successful
                                deployments. 🚀
                            </p>
                        </div>
                    </div>

                    <div className="row text-center"> {/* Moved text-center here for alignment */}
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="iframe-container">
                                <iframe
                                    src="https://www.youtube.com/embed/I9YT8UTn-II?si=9Mln_oCy5neFXHaB"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Atlassian ACE Event"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="iframe-container">
                                <iframe
                                    src="https://www.youtube.com/embed/p5pMQYQjnMY?si=CqbuBLdjKtB9F3DT"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    title="ACP-620 Preparation"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="iframe-container">
                                <iframe
                                    src="https://www.youtube.com/embed/PGBNNkE5I_k?si=EIQjUZ6LIPrIazPs"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    title="Atlassian Unleash in Dublin"
                                ></iframe>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="row-spacing col-xs-12 col-sm-12 col-md-12 text-center">
                            <a href="cv/CV_Elvis_Canchari_EN_SRE.pdf" download="CV_Elvis_Canchari_EN.pdf"
                               className="btn btn-primary btn-download">Download CV</a>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default Profile;
