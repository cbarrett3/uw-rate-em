import React from "react";

//
// Purpose is for a preview when course is listed on homepage
//

const SignedOutCourseSummary = ({ course }) => {
  // return some jsx
  return (
    <div className="card z-depth-0 course-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{course.title}</span>
        <p>{course.content}</p>
        <p className="grey-text">{course.professor}</p>
      </div>
    </div>
  );
};

export default SignedOutCourseSummary;
