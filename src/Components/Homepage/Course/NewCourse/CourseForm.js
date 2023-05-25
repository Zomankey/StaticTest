import { useState } from "react";

function CourseForm(props) {
  const [enteredId, setEnteredId] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  function idChangeHandler(event) {
    setEnteredId(event.target.value);
  }
  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }
  function descriptionChangeHandler(event) {
    setEnteredDescription(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault(); // prevent page reloading from sending request

    const courseData = {
      id: enteredId,
      name: enteredName, // + to ensure values are added as numbers and not strings when adding multiple values
      description: enteredDescription,
    };

    props.onSaveCourseData(courseData); // execute passed in function -> child communicates up to parent

    // reset to nothing
    setEnteredId("");
    setEnteredName("");
    setEnteredDescription("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Course Id</label>
          <input
            type="text"
            value={enteredId} //allows reset of value - aka 2 way-binding: allows change to input after submission
            onChange={idChangeHandler}
          />
        </div>
        <div>
          <label>Course Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div>
          <label>Course Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
      </div>
      <div>
        <button onClick={props.onCancel}> Cancel </button>
        <button type="submit">Add Course</button>
      </div>
    </form>
  );
}

export default CourseForm;
