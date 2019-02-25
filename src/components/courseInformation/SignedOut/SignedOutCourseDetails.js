import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// import NewAssignment from "../../assignments/NewAssignment";

//
// Purpose is to show course details when a course is clicked on
//

const CourseDetails = props => {
  const { course } = props;
  console.log(course);
  if (course) {
    const list = course.assignments;
    const titles = list.map(i => <li key={i.title}>{i.title}</li>);
    return (
      <div>
        <div className="container section course-details">
          <div className="card z-depth">
            <div className="card-content">
              {/* we use curly braces for id because it is dynamic */}
              <span className="card-title">{course.title}</span>
              <h6>Course GPA: {course.rating} </h6>
              <p className="grey-text">{course.professor}</p>
              <p>{course.description}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              {/* <div>Posted by the Net Ninja</div>
              <div>2nd September, 2am</div> */}
              <h6 className="text center">Assignments</h6>
              <div>{titles}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading course...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const courses = state.firestore.data.courses;
  const course = courses ? courses[id] : null;
  return {
    course: course
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "courses" }])
)(CourseDetails);
