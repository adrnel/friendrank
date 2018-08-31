import React from 'react';
import ReactDOM from'react-dom';
import 'typeface-roboto';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import League from './components/League/League';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: 0};
        this.updateSelectedIndex = this.updateSelectedIndex.bind(this);
    }

    updateSelectedIndex (value) {
        this.setState({ selectedIndex: value });
    }

    render() {
        return <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/league">League</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>

                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/league" component={League} />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
                <Footer selectedIndex={this.state.selectedIndex} updateSelectedIndex={this.updateSelectedIndex}/>
            </div>
        </Router>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));