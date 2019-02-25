import React, { Component } from "react";
import AllCourses from "../courseInformation/SignedIn/AllCourses";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class SignedOutDashboard extends Component {
  render() {
    // return some jsx
    // get courses from props
    const { courses } = this.props;
    // if (!uth.uid) return <Redirect to="/dashboard" />;
    return (
      <div className="dashboard container">
        {/* this div ensures our two main boxes are alligned in a row */}
        <div className="row">
          {/* this div is for all other courses and assignments */}
          <div className="col s10 push-s1 pull-s1 card-panel white center">
            <AllCourses courses={courses} />{" "}
          </div>
        </div>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = state => {
  // object returned represents which properties are attatched to the proponents so we can access them in there
  return {
    // we are referencing the courses property from root reducer -> courses reducer
    courses: state.firestore.ordered.courses
  };
};

export default compose(
  connect(mapStateToProps),
  // when this component is active (dashboard) we want to listen to courses collection
  firestoreConnect([{ collection: "courses" }])
)(SignedOutDashboard);
