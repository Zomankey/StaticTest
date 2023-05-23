import { useState } from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";

import { DUMMY_COURSES } from "./Data/Data";
import SettingsDrawer from "./Components/Account/AccountSettingsDrawer";
import NewCourse from "./Components/NewCourse/NewCourse";
import CourseProgressDrawer from "./Components/Course/CourseProgressDrawer";
import CourseDisplay from "./Components/Course/CourseDisplay";

const headerBoxStyle = {
  bgcolor: "#405686",
};

const headerTextStyle = {
  color: "#e9edf5",
  fontSize: 40,
  fontWeight: "medium",
  textAlign: "center",
  pb: 6,
};

function App() {
  const [courses, setCourses] = useState(DUMMY_COURSES);
  function addCourseHandler(course) {
    // depends on previous state
    setCourses((prevCoruses) => {
      return [course, ...prevCoruses];
    });
  }
  return (
    <div>
      <Box sx={headerBoxStyle}>
        <Stack direction="row" justifyContent="space-between">
          <CourseProgressDrawer />
          <SettingsDrawer />
        </Stack>
        <Box sx={headerTextStyle}>Learning Management System</Box>
      </Box>
      <CourseDisplay courses={courses} />
      <NewCourse onAddCourse={addCourseHandler} />
    </div>
  );
}

export default App;
