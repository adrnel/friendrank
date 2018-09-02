import React from 'react';
import ReactDOM from'react-dom';
import 'typeface-roboto';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import League from './components/League/League';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends React.Component {
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
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/league" component={League} />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
                <Header title={this.state.route}/>
                <Footer selectedIndex={this.state.selectedIndex} updateSelectedIndex={this.updateSelectedIndex}/>
            </div>
        </Router>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));