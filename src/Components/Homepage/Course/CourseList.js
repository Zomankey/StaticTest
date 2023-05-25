import { useState } from "react";
import Box from "@mui/material/Box";

import Course from "./Course";

const headerTextStyle = {
  color: "#405686",
  fontSize: 30,
  fontWeight: "Bold",
  textAlign: "center",
  pb: 6,
};

function CourseList(props) {
  const [progress, setProgress] = useState("");

  function changeProgress() {
    setProgress("Completed");
  }

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
          changeProgress={changeProgress}
          //favourite={course.favourite}
          //    grade = {course.grade}
          //   date={course.date}
        />
      ))}
    </ul>
  );
}

export default CourseList;
