import { Box } from "@mui/material";
import { useState } from "react";

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
    return course.category === filteredCategory;
  });

  const [searchText, setSearch] = useState("");
  function onSearch(searchText) {
    setSearch(searchText);
  }

  const filteredSearchCourses = filteredCategoryCourse.filter((course) => {
    if (props.input === "") {
      return course;
    }
    //return the item which contains the user input
    else {
      return course.name.toLowerCase().includes(searchText);
    }
  });

  return (
    <Box sx={courseStyle}>
      <CourseCategoryTabs onSelectCategoryFilter={addCategoryFilter} />
      <CourseSearch onSearch={onSearch} />
      <CourseSorter />
      <CourseList courses={filteredSearchCourses} />
    </Box>
  );
}

export default CourseDisplay;
