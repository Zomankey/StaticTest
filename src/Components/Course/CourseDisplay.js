import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import CourseList from "./CourseList";
import CourseSearch from "./CourseSearch";
import CourseCategoryTabs from "./CourseCategoryTab";
import CourseSorter from "./CourseSorter";

const courseStyle = { bgcolor: "#c1cbe0", mx: 0.5, fontSize: 14, pt: 1 };

function CourseDisplay(props) {
  const [filteredCategory, setFilterCategory] = useState("Computing");

  function addCategoryFilter(selectedFilter) {
    setFilterCategory(selectedFilter);
  }

  const filteredCategoryCourse = props.courses.filter((course) => {
    return course.category == filteredCategory;
  });

  return (
    <Box sx={courseStyle}>
      <CourseCategoryTabs onSelectCategoryFilter={addCategoryFilter} />
      <CourseSearch />
      <CourseSorter />
      <CourseList courses={filteredCategoryCourse} />
    </Box>
  );
}

export default CourseDisplay;
