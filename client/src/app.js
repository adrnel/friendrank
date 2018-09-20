import React, { Component } from 'react';
import ReactDOM from'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import League from './components/League/League';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { withRouter }  from 'react-router-dom';
// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';
import './app.css';

// These imports load individual services into the firebase namespace.
import 'firebase/database';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: 0, route: 'Home', leagues: [], selectedLeague: {}};
        this.updateSelectedIndex = this.updateSelectedIndex.bind(this);
        this.selectLeague = this.selectLeague.bind(this);
        var config = {
            apiKey: process.env.LEADERBOARD_API_KEY,
            authDomain: process.env.LEADERBOARD_AUTH_DOMAIN,
            databaseURL: process.env.LEADERBOARD_DATABASE_URL,
            projectId: process.env.LEADERBOARD_PROJECT_ID,
            storageBucket: process.env.LEADERBOARD_STORAGE_BUCKET,
            messagingSenderId: process.env.LEADERBOARD_MESSAGING_SENDER_ID
        };
        firebase.initializeApp(config);
        const dbref = firebase.database().ref().child('leagues');
        dbref.on('value', (snapshot) => {
            const value = snapshot.val();
            console.log(value);
            this.setState({ leagues: value, selectedLeague:value[0] }, () => console.log('state: ', this.state));
        });

    }

    updateSelectedIndex (value) {
        const routeMap = ['Home', 'League', 'Profile', 'Settings'];
        this.setState({ selectedIndex: value, route: routeMap[value], });
    }

    selectLeague (selectedLeagueId) {
        const selectedLeague = this.state.leagues.find((league) => league.leagueId === selectedLeagueId);
        this.setState({ selectedLeague }, () => console.log('state: ', this.state));
        this.updateSelectedIndex(1);
    }

    render() {
        return <Router>
            <div className="app-body">
                <Header title={this.state.route}/>
                <Route exact path="/" render={()=><Home leagues={this.state.leagues} selectLeague={this.selectLeague} /> } />
                <Route path="/league" render={()=><League league={this.state.selectedLeague} /> } />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
                <Footer selectedIndex={this.state.selectedIndex} updateSelectedIndex={this.updateSelectedIndex}/>
            </div>
        </Router>;
    }
}

export default withRouter(App);
ReactDOM.render(<App />, document.getElementById('root'));