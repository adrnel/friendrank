import React from 'react';
import Card from '@material-ui/core/Card';

const cardBuilder = (props) => {
    console.log('props 2: ', props);
    const cardsArray = [];
    if(props.leagues) {
        props.leagues.forEach((card) => {
            cardsArray.push(
                <Card className="card__component">
                    <div className="card__title">{card.leagueName}</div>
                    <div className="card__description">{card.leagueDescription}</div>
                </Card>
            );
        });
    }
    return cardsArray;
};

const Cards = (props) => {
    console.log('props 1: ', props);
    return (
        <div>
            {cardBuilder(props)}
        </div>
    );
};


export default Cards;