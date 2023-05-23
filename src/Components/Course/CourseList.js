import Course from "./Course";
import Box from "@mui/material/Box";

const headerTextStyle = {
  color: "#405686",
  fontSize: 30,
  fontWeight: "Bold",
  textAlign: "center",
  pb: 6,
};

function CourseList(props) {
  if (props.courses.length === 0) {
    return <Box sx={headerTextStyle}>No Courses Found</Box>;
  }

  return (
    <ul>
      {props.courses.map((course) => (
        <Course
          key={course.id}
          id={course.id}
          name={course.id + " " + course.name}
          description={course.description}
          progress={course.progress}
          category={course.category}
          url={course.url}
          //    grade = {course.grade}
          //   date={course.date}
        />
      ))}
    </ul>
  );
}

export default CourseList;
