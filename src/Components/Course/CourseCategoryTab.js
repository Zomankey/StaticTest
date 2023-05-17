import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const box = { width: "100%", bgcolor: "#c1cbe0", pb: 2 };
const genres = [
  { label: "Finance and Accounting" },
  { label: "Cybersecurity" },
  { label: "Sales" },
  { label: "Data Science" },
  { label: "Human Resources" },
  { label: "Design" },
  { label: "Language" },
];

const CourseCategoryTabs = (props) => {
  const [value, setValue] = useState(0);

  const filterHandler = (event, newValue) => {
    setValue(newValue);
  };

  // function filterHandler(event) {
  //   props.onSelectFilter(event.target.value);
  // }

  return (
    <Box sx={box}>
      <Tabs
        value={value}
        onChange={filterHandler}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable genre tabs"
      >
        {genres.map((genre) => (
          <Tab key={genre.label} label={genre.label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default CourseCategoryTabs;
