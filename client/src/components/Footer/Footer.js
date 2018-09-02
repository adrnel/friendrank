import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import LeagueIcon from '@material-ui/icons/Gamepad';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import { withRouter }  from 'react-router-dom';
import './Footer.css';

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
                MuiBottomNavigation={{color: 'gold'}}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="League" icon={<LeagueIcon />} />
                <BottomNavigationAction label="Profile" icon={<ProfileIcon />} />
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
            </BottomNavigation>
        );
    }
}

export default withStyles(styles)(withRouter(Footer));