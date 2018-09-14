import React, { Component } from 'react';
import NewLeagueButton from './NewLeagueButton';
import Cards from './Cards';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Cards leagues={this.props.leagues}/>
                <NewLeagueButton/>
            </div>
        );
    }
}

export default Home;