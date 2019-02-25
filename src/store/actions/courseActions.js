export const createCourse = course => {
  // dispatch dispatches an action to the reducer, and getState is there in case we need it
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database (it was paused to ensure its async)
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("courses")
      .add({
        // this gets properties passed in from project (title, content, professor, description, assignments)
        ...course,
        createdAt: new Date(),
        rating: 4,
        authorId: authorId,
        assignments: [
          {
            title: "Read Syllabus",
            description: "Read the the entirity of the syllabus"
          },
          {
            title: "Chapter 1 textbook problems",
            description: "Read chapter 1 of textbook and do the problems"
          }
        ]
      })
      .then(() => {
        dispatch({ type: "CREATE_COURSE", course: course });
      })
      .catch(err => {
        dispatch({ type: "CREATE_COURSE_ERROR", err });
      });
  };
};

export const createAssignment = (assignment, userId) => {
  // dispatch dispatches an action to the reducer, and getState is there in case we need it
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const courses = getState().firestore.data.courses;
    console.log(courses.P0n8lnKrSoqdThDAdYBk);

    // {
    //   courses &&
    //     courses.map(course => {
    //       // return (
    //       //   // output some jsx for each individual course
    //       //   <Link to={"/course/" + course.id} key={course.id}>
    //       //     <CourseSummary course={course} />
    //       //   </Link>
    //       // );
    //       console.log(course.id);
    //     });
    // }
    //console.log(courses);
    //console.log(authorId);
    console.log(assignment);
    console.log("state", getState());
    // make async call to database (it was paused to ensure its async)
    dispatch({
      type: "CREATE_ASSIGNMENT",
      assignment: assignment,
      state: getState()
    });
  };
};
// .database().ref('users/' + userId).set({
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// });

//     firestore
//       .collection("courses").ref('')
//       .push({
//         // this gets properties passed in from project (title, content, professor, description, assignments)
//         ...course,
//         assignments: [
//           {
//             title: "Read Syllabus",
//             description: "Read the the entirity of the syllabus"
//           },
//           {
//             title: "Chapter 1 textbook problems",
//             description: "Read chapter 1 of textbook and do the problems"
//           },
//           assignment
//         ]
//       })
//       .then(() => {
//         dispatch({ type: "CREATE_ASSIGNMENT", course: course });
//       })
//   };
// };
