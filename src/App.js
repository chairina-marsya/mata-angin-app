import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** pages */
import Navbar from "./container/Navbar";
import LandingPage from "./container/LandingPage";
import Register from "./container/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "130px" }} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
