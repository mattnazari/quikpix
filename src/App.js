import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import Home from './screens/Home';
import Pricing from './screens/Pricing';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Upgrade">
            <Pricing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
