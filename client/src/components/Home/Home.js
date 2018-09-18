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
        if (this.props.leagues){
            return (
                <div>
                    <Cards leagues={this.props.leagues} selectLeague={this.props.selectLeague}/>
                    <NewLeagueButton/>
                </div>
            );
        } else {
            return <div>Please select a league2</div>;
        }

    }
}

export default Home;