import React from 'react';
import ReactDOM from'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import League from './components/League/League';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

class App extends React.Component {
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
            </div>
        </Router>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));