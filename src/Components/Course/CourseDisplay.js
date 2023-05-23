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
      return (
        course.name.toLowerCase().includes(searchText) ||
        course.id.toLowerCase().includes(searchText)
      );
    }
  });

  const [sort, setSort] = useState("Recent");
  function selectSort(selectedsort) {
    setSort(selectedsort);
  }

  const [sortedCourses, setSortedCourses] = useState(filteredSearchCourses);

  const SortCourses = (filteredSearchCourses) => {
    if (sort === "Recent") {
      setSortedCourses(filteredSearchCourses);
    } else if (sort === "Ascending") {
      setSortedCourses(
        [...filteredSearchCourses].sort((a, b) => (a.name > b.name ? 1 : -1))
      );
    } else if (sort === "Descending") {
      setSortedCourses(
        [...filteredSearchCourses].sort((a, b) => (a.name > b.name ? -1 : 1))
      );
    } else if (sort === "") {
      setSortedCourses(filteredSearchCourses);
    }
  };

  return (
    <Box sx={courseStyle}>
      <CourseCategoryTabs onSelectCategoryFilter={addCategoryFilter} />
      <CourseSearch onSearch={onSearch} />
      <CourseSorter
        selectSort={selectSort}
        courses={filteredSearchCourses}
        SortCourses={SortCourses}
      />
      <CourseList courses={sortedCourses} />
    </Box>
  );
}

export default CourseDisplay;
