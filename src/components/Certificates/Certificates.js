import React, { Component } from 'react';
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Default styling
import 'slick-carousel/slick/slick-theme.css'; // Theme styling (optional)
import './Certificates.css';
import certificates from './certificates.json';

class Certificates extends Component {
    render() {
        // Updated settings for the carousel
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 8, // Display 4 certificates at a time
            slidesToScroll: 1, // Scroll through 4 certificates at a time
            autoplay: true, // Enable auto-play
            autoplaySpeed: 10000, // Set auto-play speed to 10 seconds
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                <h4 className="text-uppercase text-center">Certifications</h4>
                <Slider {...settings}>
                    {certificates.map((cert, index) => (
                        <div key={index} className="content content-cert">
                            <div className="client-photo text-center">
                                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                    <img className="cert-container"
                                         src={`${process.env.PUBLIC_URL}/${cert.imageUrl}`} alt={cert.description}/>
                                </a>
                                <small><b>{cert.issuer}</b></small>
                                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                    <p>{cert.title}</p>
                                </a>

                            </div>
                        </div>
                    ))}
                </Slider>


                <br/>

            </div>
        );
    }
}

export default Certificates;
