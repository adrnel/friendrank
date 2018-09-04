import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const NewLeagueButton = () => {
    return (
        <div className='home__button'>
            <Button variant="fab" color="primary" aria-label="Add">
                <AddIcon />
            </Button>
        </div>
    );
};


export default NewLeagueButton;