const initState = {
  courses: [
    {
      id: "1",
      title: "COMPSCI 508",
      content: "Software Engineering",
      description: "Working in teams to build software",
      professor: "Tracy Lewis Williams"
    },
    {
      id: "2",
      title: "COMPSCI 638",
      content: "Data Science",
      description: "Predicting things with data",
      professor: "John Smith"
    },
    {
      id: "3",
      title: "MATH 222",
      content: "Intermediate Calculus",
      description: "Derivatives and Integrals",
      professor: "Andrew Bascom"
    },
    {
      id: "4",
      title: "MATH 340",
      content: "Linear Algebra",
      description:
        "Math concerning linear equations, matrices, and vector spaces",
      professor: "OJ Juice"
    }
  ]
};
// when we don't have a state, it uses initState value
const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_COURSE":
      console.log("created course", action.course);
      return state;
    case "CREATE_COURSE_ERROR":
      console.log("create course error", action.err);
      return state;
    case "CREATE_ASSIGNMENT":
      var i;
      var correctClass;
      var correctClassIndex;
      for (i = 0; i < state.courses.length - 1; i++) {
        // find correct course to add assignment to
        if (state.courses[i].title === action.assignment.courseTitle) {
          // console.log(state.courses[i].title);
          correctClass = state.courses[i].title;
          correctClassIndex = i;
          console.log(correctClass);
          break;
          // found class, now want to add this assignment to that class's document
        }
      }
      console.log("created assignment", action.assignment);
      // found class, now want to add this assignment to that class's document (rather than return state)
      console.log("state", state);
      // state.courses[correctClassIndex].assignments.add(action.assignment);
      return state;
    // return {
    //   ...state,
    //   assignments: state.assignments.concat(action.assignment)
    // };
    // return initialState.push(action.portfolio);
    default:
      return state;
  }
};

export default courseReducer;
