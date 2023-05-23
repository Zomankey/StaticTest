import { useState } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const box = { width: "100%", bgcolor: "#c1cbe0", pb: 2 };
const categories = [
  //{ label: "All" },
  { label: "Computing" },
  { label: "Cybersecurity" },
  { label: "Data Science" },
  { label: "Design" },
  { label: "Language" },
  { label: "Human Resources" },
  { label: "Finance and Accounting" },
  { label: "Sales and Marketing" },
];

const CourseCategoryTabs = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.onSelectCategoryFilter(newValue);
  };

  return (
    <Box sx={box}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable genre tabs"
      >
        {categories.map((categories) => (
          <Tab
            key={categories.label}
            label={categories.label}
            value={categories.label}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CourseCategoryTabs;
