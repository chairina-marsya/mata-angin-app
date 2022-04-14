import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** pages */
import Navbar from "./container/Navbar";
import LandingPage from "./container/LandingPage";
import Register from "./container/Register";
import Login from "./container/Login";

function App() {
  return (
    <Router>
      <Navbar />
        <div style={{ marginTop: '4%' }}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
