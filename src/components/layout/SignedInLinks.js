import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="center">
      <NavLink to="/dashboard" className="brand-logo">
        {" "}
        UW Rate 'em!{" "}
      </NavLink>
      {/* <li>
        <NavLink to="/signin">Log Out</NavLink>
      </li> */}
      <li>
        <NavLink to="/">
          <div onClick={props.signOut}>Log Out</div>{" "}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="btn btn-primary black lighten-1">
          {props.profile.firstName}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
