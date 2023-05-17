import Course from "./Course";

function CourseList(props) {
  if (props.courses.length === 0) {
    return <h2> No courses found.</h2>;
  }

  return (
    <ul>
      {props.courses.map((course) => (
        <Course
          key={course.id}
          id={course.id}
          name={course.name}
          description={course.description}
          //    grade = {course.grade}
          //   date={course.date}
        />
      ))}
    </ul>
  );
}

export default CourseList;
