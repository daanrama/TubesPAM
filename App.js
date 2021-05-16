import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './src/components/Home';
import Game from './src/components/Game';
import SkorTinggi from './src/components/SkorTinggi';

function App() {
    return (
        <Router>
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/skortinggi" component={SkorTinggi} />
            </div>
        </Router>
    );
}

export default App;
