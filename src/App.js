import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/** pages */
import Navbar from './container/Navbar';
import LandingPage from './container/LandingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{marginTop: '130px'}}/>
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
