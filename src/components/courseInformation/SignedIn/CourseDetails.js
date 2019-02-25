import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import NewAssignment from "../../assignments/NewAssignment";
import moment from "moment";

//
// Purpose is to show course details when a course is clicked on
//

const CourseDetails = props => {
  const { course, auth } = props;
  if (course) {
    // console.log(props.location.state.key);
    const list = course.assignments;
    const titles = list.map(i => <li key={i.title}>{i.title}</li>);
    if (auth.uid) {
      return (
        <div>
          <div className="container section course-details">
            <div className="card z-depth">
              <div className="card-content">
                {/* we use curly braces for id because it is dynamic */}
                <span className="card-title">{course.title}</span>
                <h6>Course GPA: {course.rating} </h6>
                <div className="grey-text">
                  Instructor: {course.professor}
                  <p className="grey-text">
                    Year Enrolled:{" "}
                    {moment(course.createdAt.toDate()).format("YYYY")}
                  </p>
                </div>
                <p>{course.description}</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                {/* <div>Posted by the Net Ninja</div>
              <div>2nd September, 2am</div> */}
                <h6 className="text center">Assignments</h6>
                <div>{titles}</div>
                <div>
                  {/* <Link to={"/addassignment/" + course.id} key={course.id}>
                  Add assignment
                </Link> */}
                  <NewAssignment course={course} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
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
                <p>
                  {/* <Link to={"/addassignment/" + course.id} key={course.id}>
                  Add assignment
                </Link> */}
                  {/* <NewAssignment course={course} /> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="container center">
        <p>Loading course...</p>
      </div>
    );
  }
};

// becuase we just want to provide info about one course here
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log("id", id);
  const courses = state.firestore.data.courses;
  const course = courses ? courses[id] : null;
  console.log("course", course);
  return {
    course: course,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "courses" }])
)(CourseDetails);
