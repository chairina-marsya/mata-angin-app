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
import EditCourse from "./container/MentorMenteeMenus/Course/editCourse";
import CreateCourse from "./container/MentorMenteeMenus/Course/createCourse";

import Schedule from "./container/MentorMenteeMenus/Schedule";

import MenteeList from "./container/MentorMenteeMenus/MentorMenteeList/MenteeList";
import MentorList from "./container/MentorMenteeMenus/MentorMenteeList/MentorList";
import DetailMentor from "./container/MentorMenteeMenus/MentorMenteeList/detailMentor";

import Discussion from "./container/MentorMenteeMenus/Discussion";
import CreateDiscussion from "./container/MentorMenteeMenus/Discussion/createDiscussion";

import Feedback from "./container/MentorMenteeMenus/Feedback";
import CreateFeedback from "./container/MentorMenteeMenus/Feedback/createFeedback";

import Announcement from "./container/MentorMenteeMenus/Announcement";

import Subscription from "./container/MentorMenteeMenus/Subscription";
import DetailSubscription from "./container/MentorMenteeMenus/Subscription/detailSubscription";
import Payment from "./container/MentorMenteeMenus/Subscription/payment";
import Invoice from "./container/MentorMenteeMenus/Subscription/paymentInvoice";

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
            <Route path="/edit-course" component={EditCourse}/>
            <Route path="/create-course" component={CreateCourse}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/mentee-list" component={MenteeList}/>
            <Route path="/mentor-list" component={MentorList}/>
            <Route path="/detail-mentor" component={DetailMentor}/>
            <Route path="/discussion" component={Discussion}/>
            <Route path="/create-discussion" component={CreateDiscussion}/>
            <Route path="/feedback" component={Feedback}/>
            <Route path="/create-feedback" component={CreateFeedback}/>
            <Route path="/announcement" component={Announcement}/>
            <Route path="/subscription" component={Subscription}/>
            <Route path="/detail-subscription" component={DetailSubscription}/>
            <Route path="/payment" component={Payment}/>
            <Route path="/invoice" component={Invoice}/>
          </Switch>
      </ContextProvider>
    </Router>
  );
}

export default App;
