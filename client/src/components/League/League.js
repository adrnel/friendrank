import React, { Component } from 'react';
import Table from './Table';
import './League.css';

class League extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('league props: ', this.props);
        if (this.props.league) {
            return (
                <div className="leaderboard">
                    <div className="leaderboard__header">
                        <div className="leaderboard__header-title">{this.props.league.leagueName}</div>
                        <div className="leaderboard__header-image"><img src={this.props.league.leagueImageURL}></img></div>
                        <div className="leaderboard__header-description">{this.props.league.leagueDescription}</div>
                    </div>
                </div>
            );
        } else {
            return <div>No League Selected</div>;
        }

    }
}

export default League;