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

/** admin menus */
import DashboardAdmin from "./container/AdminMenus/Dashboard";

/** mentor menus */
import Course from "./container/MentorMenteeMenus/Course";
import MentorCourse from "./container/MentorMenteeMenus/Course/mentorCourse";
import RegisteredCourse from "./container/MentorMenteeMenus/Course/registeredCourse";
import DetailCourse from "./container/MentorMenteeMenus/Course/detailCourse";
import DetailCourseMentor from "./container/MentorMenteeMenus/Course/detailCourseMentor";
import JoinCourse from "./container/MentorMenteeMenus/Course/joinCourse";
import RecordedCourse from "./container/MentorMenteeMenus/Course/recordedCourse";
import Schedule from "./container/MentorMenteeMenus/Schedule";

function App() {

  return (
    <Router>
      <ContextProvider>
        <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/register-mentee" component={RegisterMentee} />
            <Route path="/register-mentor" component={RegisterMentor} />
            <Route path="/login" component={Login} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/dashboard-admin" component={DashboardAdmin} />
            <Route path="/course-mentee" component={Course} />
            <Route path="/course-mentor" component={MentorCourse} />
            <Route path="/registered-course" component={RegisteredCourse}/>
            <Route path="/detail-course" component={DetailCourse}/>
            <Route path="/detail-course-mentor" component={DetailCourseMentor}/>
            <Route path="/join-course" component={JoinCourse}/>
            <Route path="/recorded-course" component={RecordedCourse}/>
            <Route path="/schedule" component={Schedule}/>
          </Switch>
      </ContextProvider>
    </Router>
  );
}

export default App;
