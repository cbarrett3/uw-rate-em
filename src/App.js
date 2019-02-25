import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import CourseDetails from "./components/courseInformation/SignedIn/CourseDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NewAssignment from "./components/assignments/NewAssignment";
import NewCourse from "./components/courseInformation/SignedIn/NewCourse";
import SignedOutDashboard from "./components/dashboard/SignedOutDashboard";
import SignedOutCourseDetails from "./components/courseInformation/SignedOut/SignedOutCourseDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            {/* // when a user goes to forward slash, load the dashboard component here inside the app component */}
            <Route exact path="/" component={SignedOutDashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/course/:id" component={CourseDetails} />
            <Route
              path="/courseDetails/:id"
              component={SignedOutCourseDetails}
            />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/addassignment/:id" component={NewAssignment} />
            <Route path="/addcourse" component={NewCourse} />
            {/* <Route path="/signedoutdashboard" component={SignedOutDashboard} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
