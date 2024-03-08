import React, { Component } from 'react';
import './Certificates.css';
import certExinItil from './cert-exin-itil.png';
import certificates from './certificates.json';

class Certificates extends Component {
    render() {
        return (
            <div>
                <h4 className="text-uppercase text-center">Certifications</h4>

                <div className="container shadow">
                    <div className="row justify-content-center">

                        {certificates.map((cert, index) => (
                            <div key={index} className="content col-md-2 col-sm-4 col-6">
                                <div className="client-photo text-center">
                                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                        <img className="cert-container" src={`${process.env.PUBLIC_URL}/${cert.imageUrl}`} alt={cert.title}/>
                                        <br/>
                                        {cert.title}
                                    </a>
                                    <br/>
                                    <b>{cert.issuer}</b>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        );
    }
}

export default Certificates;
