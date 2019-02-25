import React from "react";
import moment from "moment";
//
// Purpose is for a preview when course is listed on homepage
//

const CourseSummary = ({ course }) => {
  // return some jsx
  return (
    <div className="card z-depth-0 course-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{course.title}</span>
        <p>{course.content}</p>
        <div className="grey-text">
          Instructor: {course.professor}
          <p className="grey-text">
            Year Enrolled: {moment(course.createdAt.toDate()).format("YYYY")}
          </p>
        </div>
        <p />
        {/* <Link to="/">Add course description</Link> */}
        <p>{course.description}</p>
        <p />
      </div>
    </div>
  );
};

export default CourseSummary;
