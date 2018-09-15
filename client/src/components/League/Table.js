import React from 'react';
import Card from '@material-ui/core/Card';

const Cards = (props) => {
    console.log('props 1: ', props);
    if(props.leagues) {
        return props.leagues.map((card) => {
            return(
                <Card key={card.leagueId} className="card__component">
                    <div className="card__title">{card.leagueName}</div>
                    <div className="card__description">{card.leagueDescription}</div>
                </Card>
            );
        });
    }
};


export default Cards;