import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import Home from './screens/Home';
import Pricing from './screens/Pricing';

function App() {
  const [isLocked, setIsLocked] = useState(true)
  const [isPremium, setIsPremium] = useState(false)

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Upgrade">
            <Pricing setIsLocked={setIsLocked}
              setIsPremium={setIsPremium} />
          </Route>
          <Route path="/">
            <Home isLocked={isLocked}
              isPremium={isPremium} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
