import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import PageLoader from "./components/PageLoader/PageLoader";

class App extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({ loading: false });
        }, 500);
    }

    componentWillUnmount() {
        // Make sure to clear the timer if the component is unmounted
        clearTimeout(this.timer);
    }

    render() {
        const { loading } = this.state;

        return (
            <div className="App">
                {loading && <PageLoader />}
                <Header />
                <HomePage />
            </div>
        );
    }
}

export default App;
