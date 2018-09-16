import React from 'react';
import Card from '@material-ui/core/Card';

const Cards = (props) => {
    console.log('props 1: ', props);
    if(props.players) {
        return (
            <table className="leaderboard__table">
                <tbody>
                    {props.players.map((player, index) => {
                        return(
                            <tr key={player.id}>
                                <td>{index + 1}</td>
                                <td><img src={player.profileImageURL}></img></td>
                                <td>{player.name}</td>
                                <td>{player.elo}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
};


export default Cards;