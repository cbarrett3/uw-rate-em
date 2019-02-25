import React from "react";
import CourseSummary from "./CourseSummary";
import { Link } from "react-router-dom";
//
// Purpose is to list ALL courses on homepage
//

const AllCourses = ({ courses }) => {
  return (
    <div className="all-courses section">
      <h5 className="card-title">All Courses</h5>
      {courses &&
        courses.map(course => {
          return (
            <Link to={"/course/" + course.id} key={course.id}>
              <CourseSummary course={course} />
            </Link>
          );
        })}
    </div>
  );
};

export default AllCourses;
