import { useState } from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";

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

const DUMMY_COURSES = [
  {
    id: "AB1501",
    name: "MARKETING",
    description: "Learn and the apply the basic principles of marketing",
    progress: "Current",
    category: "Sales and Marketing",
    // grade: "",
    // date: new Date(2020, 7, 14),
  },
  {
    id: "BC2407",
    name: "ANALYTICS",
    description: "Modelling data to predict trends and solve problems",
    progress: "Current",
    category: "Data Science",
    // grade: "",
    // date: new Date(2020, 7, 14),
  },
  {
    id: "SC2000",
    name: "PROB & STAT FOR COMPUTING",
    description: "Probabilities",
    progress: "Completed",
    category: "Computing",
    // grade: "",
    // date: new Date(2020, 7, 14),
  },
  {
    id: "SC2001",
    name: "ALGORITHM DESIGN & ANALYSIS",
    description: "Sorting Algorithms and Dynamic Programming",
    progress: "Uncompleted",
    category: "Computing",
    // grade: "",
    // date: new Date(2020, 7, 14),
  },

  {
    id: "SC2002",
    name: "OBJECT ORIENTED DES & PROG",
    description: "Java and C++",
    progress: "Uncompleted",
    category: "Computing",
    // grade: "",
    // date: new Date(2020, 7, 14),
  },
];

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
