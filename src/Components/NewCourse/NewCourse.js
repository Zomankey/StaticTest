import { useState } from "react";

import CourseForm from "./CourseForm";

function NewCourse(props) {
  const [displayForm, setDisplayForm] = useState(false);

  function displayHandler() {
    setDisplayForm(true);
  }

  function cancelDisplayHandler() {
    setDisplayForm(false);
  }

  function SaveCourseDataHandler(enteredCourseData) {
    const courseData = {
      ...enteredCourseData,
    };

    // sends expense data to parent that calls the function
    props.onAddCourse(courseData);
    setDisplayForm(false);
  }

  return (
    <div>
      {displayForm === true && (
        <div>
          <CourseForm
            onSaveCourseData={SaveCourseDataHandler}
            onCancel={cancelDisplayHandler}
          />
        </div>
      )}
      {displayForm === false && (
        <button onClick={displayHandler}>Add New Course</button>
      )}
    </div>
  );
}

export default NewCourse;
