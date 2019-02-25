import React, { Component } from "react";
import { connect } from "react-redux";
import { createAssignment } from "../../store/actions/courseActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class NewAssignment extends Component {
  state = {
    title: "",
    description: "",
    courseId: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
      // courseId: course.title
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createAssignment(this.state);
  };

  render() {
    // console.log(this.state);
    const { courses, course } = this.props;
    // const id = this.props.match.params.id;
    // console.log("id", id);
    console.log("course", course);
    console.log("here");
    console.log("props", this.props);
    console.log(course.title);
    this.state.courseTitle = course.title;
    console.log(this.state.courseTitle);
    console.log("here");
    // courseId = course.title;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add New Assignment</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="description">Assignment Description</label>
            <textarea
              id="description"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn black lighten-1 z-depth-0">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

// export default connect(
//   null,
//   mapDispatchToProps
// )(NewAssignment);

// const mapStateToProps = state => {
//   console.log("Courses:" + state.firestore.ordered.courses);
//   return {
//     // grab from firestore state property instead of dummy data
//     courses: state.firestore.ordered.courses
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    createAssignment: assignment => dispatch(createAssignment(assignment))
  };
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NewAssignment);

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  // when this component is active (dashboard) we want to listen to courses collection
  firestoreConnect([{ collection: "courses" }])
)(NewAssignment);
