import React from "react";
import { Link } from "react-router-dom";
import CourseSummary from "./CourseSummary";

//
// Purpose is to list USERS course summaries on the homepage
//

const CourseList = ({ courses }) => {
  return (
    <div className="course-list section">
      <h5 className="card-title">My Courses</h5>
      <div className="card-action">
        <p>
          <Link to="/addcourse">Add a course</Link>{" "}
        </p>
      </div>
      {courses &&
        courses.map(course => {
          return (
            // output some jsx for each individual course
            <Link to={"/course/" + course.id} key={course.id} data={course.id}>
              <CourseSummary course={course} />
            </Link>
          );
        })}
    </div>
  );
};

export default CourseList;
