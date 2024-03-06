import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./Header";
import HomePage from "./HomePage";
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
