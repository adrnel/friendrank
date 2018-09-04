import React, { Component } from 'react';
import NewLeagueButton from './NewLeagueButton';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div><NewLeagueButton/></div>
        );
    }
}

export default Home;