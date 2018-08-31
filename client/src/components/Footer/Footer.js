import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { withRouter }  from 'react-router-dom';

const styles = {
    root: {
        width: 500,
    },
};

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event, value) {
        this.props.updateSelectedIndex(value);
        switch (value) {
        case 0: this.props.history.push('/');
            break;
        case 1: this.props.history.push('/league');
            break;
        case 2: this.props.history.push('/profile');
            break;
        case 3: this.props.history.push('/settings');
            break;
        }
    }

    render() {
        return (
            <BottomNavigation
                value={this.props.selectedIndex}
                onChange={this.handleChange}
                showLabels
                style={{position: 'fixed', bottom:'0', width:'100%'}}
            >
                <BottomNavigationAction label="home" icon={<RestoreIcon />} />
                <BottomNavigationAction label="league" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="profile" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="settings" icon={<LocationOnIcon />} />
            </BottomNavigation>
        );
    }
}

export default withStyles(styles)(withRouter(Footer));