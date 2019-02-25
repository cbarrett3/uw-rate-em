import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="center">
      {" "}
      <NavLink to="/" className="brand-logo">
        {" "}
        UW Rate 'em!{" "}
      </NavLink>
      {/* <li>
        <NavLink to="/">View Courses</NavLink>{" "}
      </li> */}
      <li>
        <NavLink to="/signup">Signup</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>{" "}
      </li>
      {/* <li>
        <NavLink to="/">
          <a onClick={props.signIn}>Login</a>{" "}
        </NavLink>
      </li> */}
    </ul>
  );
};

// export so we can use it in app.js (it will be used all the time in app.js)
export default SignedOutLinks;
