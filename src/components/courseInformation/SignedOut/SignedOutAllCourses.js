import React from "react";
import CourseSummary from "../SignedIn/CourseSummary";
import { Link } from "react-router-dom";

//
// Purpose is to list ALL courses on homepage
//

const SignedOutAllCourses = ({ courses }) => {
  return (
    <div className="signedout-all-courses section">
      <h5 className="card-title">All Courses</h5>
      {courses &&
        courses.map(course => {
          return (
            // output some jsx for each individual course
            <Link to={"/course/" + course.id} key={course.id}>
              <CourseSummary course={course} />
            </Link>
          );
        })}
    </div>
  );
};

export default SignedOutAllCourses;
