import React, { Component } from "react";
import CourseList from "../courseInformation/SignedIn/CourseList";
import AllCourses from "../courseInformation/SignedIn/AllCourses";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    // get courses from props
    const { courses } = this.props;
    console.log(courses);
    return (
      <div className="dashboard container">
        {/* this div ensures our two main boxes are alligned in a row */}
        <div className="row">
          {/* this div is for current courses */}
          <div className="col s12 m5 card-panel white">
            {/* this passes courses data from dashboard to course list component */}
            <AllCourses courses={courses} />
            {/* <AllCourses /> */}
          </div>
          {/* this div is for all other courses and assignments */}
          <div className="col s12 m6 offset-m1 card-panel white">
            <CourseList courses={courses} />{" "}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // grab from firestore state property instead of dummy data
    courses: state.firestore.ordered.courses
  };
};

export default compose(
  connect(mapStateToProps),
  // when this component is active (dashboard) we want to listen to courses collection
  firestoreConnect([{ collection: "courses" }])
)(Dashboard);
