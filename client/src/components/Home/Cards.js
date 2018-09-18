import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import { withRouter }  from 'react-router-dom';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    navigateToLeague(card) {
        this.props.selectLeague(card.leagueId);
        this.props.history.push('/league');
    }

    render () {
        console.log('props 1: ', this.props);
        if (this.props.leagues) {
            return this.props.leagues.map((card) => {
                return (
                    <Card key={card.leagueId} className="card__component"
                        onClick={() => this.navigateToLeague(card)}>
                        <div className="card__title">{card.leagueName}</div>
                        <div className="card__description">{card.leagueDescription}</div>
                    </Card>
                );
            });
        } else {
            return <div>There are no players in this league</div>;
        }
    }
}


export default withRouter(Cards);