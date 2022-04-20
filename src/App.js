import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** pages */
import Navbar from "./container/Navbar";
import LandingPage from "./container/LandingPage";
import RegisterMentee from "./container/Register/mentee";
import RegisterMentor from "./container/Register/mentor";
import ContextProvider from "./context";

import Login from "./container/Login";
import HomePage from "./container/Home";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <div style={{ marginTop: "4%" }}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/register-mentee" component={RegisterMentee} />
            <Route path="/register-mentor" component={RegisterMentor} />
            <Route path="/login" component={Login} />
            <Route path="/homepage" component={HomePage} />
          </Switch>
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
