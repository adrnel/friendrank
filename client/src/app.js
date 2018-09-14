import React, { Component } from 'react';
import ReactDOM from'react-dom';
import 'typeface-roboto';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import League from './components/League/League';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: 0, route: 'Home'};
        this.updateSelectedIndex = this.updateSelectedIndex.bind(this);
    }

    updateSelectedIndex (value) {
        const routeMap = ['Home', 'League', 'Profile', 'Settings'];
        this.setState({ selectedIndex: value, route: routeMap[value], });
    }

    render() {
        return <Router>
            <div className="app-body">
                <Header title={this.state.route}/>
                <Route exact path="/" render={()=><Home leagues={this.state.leagues} /> } />
                <Route path="/league" component={League} />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
                <Footer selectedIndex={this.state.selectedIndex} updateSelectedIndex={this.updateSelectedIndex}/>
            </div>
        </Router>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));