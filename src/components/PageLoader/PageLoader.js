import React, { Component } from 'react';
import './PageLoader.css';

class PageLoader extends Component {
    render() {
        return (
            <div id="page-loader">
                <div className="animated bounceInDown">
                    <div className="spinner"></div>
                </div>
                <div className="text-div text-center animated zoomIn">
                    <p className="text-uppercase">INTRODUCING<br />HTML</p>
                    <h6 className="text-uppercase">ELVIS FRANK CANCHARI</h6>
                </div>
            </div>
        );
    }
}

export default PageLoader;
