import { useState } from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";

import SettingsDrawer from "./Components/Account/AccountSettingsDrawer";
import NewCourse from "./Components/NewCourse/NewCourse";
import CourseList from "./Components/Course/CourseList";
import CourseSearch from "./Components/Course/CourseSearch";
import CourseCategoryTabs from "./Components/Course/CourseCategoryTab";
import CourseSorter from "./Components/Course/CourseSorter";
import CourseProgressDrawer from "./Components/Course/CourseProgressDrawer";

const courseStyle = { bgcolor: "#c1cbe0", mx: 0.5, fontSize: 14, pt: 1 };

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
    // grade: "",
    // date: new Date(2020, 7, 14),
  },
  {
    id: "BC2407",
    name: "ANALYTICS",
    description: "Modelling data to predict trends and solve problems",
    // grade: "",
    // date: new Date(2020, 7, 14),
  },
  {
    id: "SC2000",
    name: "PROB & STAT FOR COMPUTING",
    description: "Probabilities",
    // grade: "",
    // date: new Date(2020, 7, 14),
  },
  {
    id: "SC2001",
    name: "ALGORITHM DESIGN & ANALYSIS",
    description: "Sorting Algorithms and Dynamic Programming",
    // grade: "",
    // date: new Date(2020, 7, 14),
  },

  {
    id: "SC2002",
    name: "OBJECT ORIENTED DES & PROG",
    description: "Java and C++",
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

      <Box sx={courseStyle}>
        <NewCourse onAddCourse={addCourseHandler} />;
        <CourseCategoryTabs />
        <CourseSearch />
        <CourseSorter />
        <CourseList courses={courses} />
      </Box>
    </div>
  );
}

export default App;
