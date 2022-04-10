import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/** pages */
import LandingPage from './container/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route
              exact
              path="/"
              component={LandingPage}
            />
      </Switch>
    </Router>
  );
}

export default App;
