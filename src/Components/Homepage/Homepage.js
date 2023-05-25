import { useState } from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Navigate } from "react-router-dom";

import CourseDisplay from "./Course/CourseDisplay";
import SettingsDrawer from "../Login/Account/AccountSettingsDrawer";
import { DUMMY_COURSES } from "../../Data/CourseData";
// import CourseProgressDrawer from "../Course/CourseProgressDrawer";
// import NewCourse from "../NewCourse/NewCourse";

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

function Homepage() {
  const courses = DUMMY_COURSES;

  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  console.log(authenticated);

  if (!authenticated) {
    return <Navigate to="/login" replace={true} />;
  }

  //   function addCourseHandler(course) {
  //     // depends on previous state
  //     setCourses((prevCourses) => {
  //       return [course, ...prevCourses];
  //     });
  //   }
  else {
    return (
      <div>
        <Box sx={headerBoxStyle}>
          <Stack direction="row" justifyContent="flex-end">
            <SettingsDrawer />
          </Stack>
          {/* <Stack direction="row" justifyContent="space-between">
          <CourseProgressDrawer />
          <SettingsDrawer />
        </Stack> */}
          <Box sx={headerTextStyle}>Learning Management System</Box>
        </Box>
        <CourseDisplay courses={courses} />
        {/* <NewCourse onAddCourse={addCourseHandler} /> */}
      </div>
    );
  }
}
export default Homepage;
