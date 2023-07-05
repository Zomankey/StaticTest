import { Box } from "@mui/material";
import { Stack } from "@mui/material";

import { DUMMY_COURSES } from "../Data/Data";
import CourseDisplay from "./Course/CourseDisplay";
import SettingsDrawer from "./Account/AccountSettingsDrawer";

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
      <CourseDisplay courses={DUMMY_COURSES} />
    </div>
  );
}

export default Homepage;
