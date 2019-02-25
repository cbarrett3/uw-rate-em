import React, { Component } from "react";
import { connect } from "react-redux";
import { createCourse } from "../../../store/actions/courseActions";
import { Redirect } from "react-router-dom";

class NewCourse extends Component {
  state = {
    title: "",
    content: "",
    description: "",
    professor: "",
    rating: "",
    assignments: [
      {
        title: "",
        description: ""
      }
    ]
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createCourse(this.state);
    this.props.history.push("/dashboard");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/dashboard" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add New Course</h5>
          <div className="input-field">
            <label htmlFor="title">
              Department Abbreviation and Course Number (Ex: COMPSCI 506)
            </label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Course Name</label>
            <input
              type="text"
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="professor">Professor Name</label>
            <input
              type="text"
              id="professor"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="description">Course Description</label>
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

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCourse: course => dispatch(createCourse(course))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCourse);
